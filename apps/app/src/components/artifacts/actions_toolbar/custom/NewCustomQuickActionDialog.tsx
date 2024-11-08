import { useStore } from "@/hooks/useStore";
import { CustomQuickAction } from "@/types";
import { TooltipIconButton } from "@v1/ui/assistant-ui/tooltip-icon-button";
import { Button } from "@v1/ui/button";
import { Checkbox } from "@v1/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@v1/ui/dialog";
import { Input } from "@v1/ui/input";
import { Label } from "@v1/ui/label";
import { Textarea } from "@v1/ui/textarea";
import { useToast } from "@v1/ui/use-toast";
import { Eye, EyeOff } from "lucide-react";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { FullPrompt } from "./FullPrompt";
import { InlineContextTooltip } from "./PromptContextTooltip";

interface NewCustomQuickActionDialogProps {
  userId: string;
  isEditing: boolean;
  allQuickActions: CustomQuickAction[];
  customQuickAction?: CustomQuickAction;
  getAndSetCustomQuickActions: () => Promise<void>;
  assistantId: string | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ViewOrHidePromptIconProps {
  showFullPrompt: boolean;
  setShowFullPrompt: Dispatch<SetStateAction<boolean>>;
}

const ViewOrHidePromptIcon = (props: ViewOrHidePromptIconProps) => (
  <TooltipIconButton
    tooltip={props.showFullPrompt ? "Hide prompt" : "View prompt"}
    variant="ghost"
    className="transition-colors"
    delayDuration={400}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      props.setShowFullPrompt((p) => !p);
    }}
  >
    {props.showFullPrompt ? (
      <EyeOff className="w-4 h-4 text-gray-600" />
    ) : (
      <Eye className="w-4 h-4 text-gray-600" />
    )}
  </TooltipIconButton>
);

export function NewCustomQuickActionDialog(
  props: NewCustomQuickActionDialogProps,
) {
  const { toast } = useToast();
  const { createCustomQuickAction, editCustomQuickAction } = useStore({
    assistantId: props.assistantId,
    userId: props.userId,
  });
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [name, setName] = useState("");
  const [prompt, setPrompt] = useState("");
  const [includeReflections, setIncludeReflections] = useState(true);
  const [includePrefix, setIncludePrefix] = useState(true);
  const [includeRecentHistory, setIncludeRecentHistory] = useState(true);
  const [showFullPrompt, setShowFullPrompt] = useState(true);

  useEffect(() => {
    if (props.customQuickAction) {
      setName(props.customQuickAction.title || "");
      setPrompt(props.customQuickAction.prompt || "");
      setIncludeReflections(props.customQuickAction.includeReflections ?? true);
      setIncludePrefix(props.customQuickAction.includePrefix ?? true);
      setIncludeRecentHistory(
        props.customQuickAction.includeRecentHistory ?? true,
      );
    }
  }, [props.customQuickAction]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitLoading(true);
    try {
      let success = false;
      if (props.isEditing && props.customQuickAction) {
        success = await editCustomQuickAction(
          {
            id: props.customQuickAction.id,
            title: name,
            prompt,
            includePrefix,
            includeRecentHistory,
            includeReflections,
          },
          props.allQuickActions,
        );
      } else {
        success = await createCustomQuickAction(
          {
            id: uuidv4(),
            title: name,
            prompt,
            includePrefix,
            includeRecentHistory,
            includeReflections,
          },
          props.allQuickActions,
        );
      }

      if (success) {
        toast({
          title: `Custom quick action ${props.isEditing ? "edited" : "created"} successfully`,
        });
        handleClearState();
        props.onOpenChange(false);
        // Re-fetch after creating a new custom quick action to update the list
        await props.getAndSetCustomQuickActions();
      } else {
        toast({
          title: `Failed to ${props.isEditing ? "edit" : "create"} custom quick action`,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleClearState = () => {
    setName("");
    setPrompt("");
    setIncludeReflections(true);
    setIncludePrefix(true);
    setIncludeRecentHistory(true);
    setShowFullPrompt(true);
  };

  return (
    <Dialog
      open={props.open}
      onOpenChange={(change) => {
        if (!change) {
          handleClearState();
        }
        props.onOpenChange(change);
      }}
    >
      <DialogContent className="max-w-xl p-8 bg-white rounded-lg shadow-xl min-w-[70vw]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-light text-gray-800">
            {props.isEditing ? "Edit" : "Create"} Quick Action
          </DialogTitle>
          <DialogDescription className="mt-2 text-md font-light text-gray-600">
            Custom quick actions are a way to create your own actions to take
            against the selected artifact.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-start gap-4 w-full"
        >
          <Label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            disabled={isSubmitLoading}
            required
            id="name"
            placeholder="Check for spelling errors"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex flex-col gap-1 w-full">
            <Label
              htmlFor="prompt"
              className="flex items-center justify-between w-full"
            >
              <span>
                Prompt <span className="text-red-500 mr-2">*</span>
              </span>
              <ViewOrHidePromptIcon
                showFullPrompt={showFullPrompt}
                setShowFullPrompt={setShowFullPrompt}
              />
            </Label>
            <p className="text-gray-500 text-sm whitespace-normal">
              The full prompt includes predefined variables in curly braces
              (e.g., <code className="inline-code">{`{artifactContent}`}</code>)
              that will be replaced at runtime. Custom variables are not
              supported yet.
            </p>
            <span className="my-1" />
            <div className="flex items-center justify-center w-full h-[350px] gap-2 transition-all duration-300 ease-in-out">
              <div className="w-full h-full flex flex-col gap-1">
                <p className="text-gray-500 text-sm flex items-center">
                  Custom instructions
                  <InlineContextTooltip type="custom_instructions" />
                </p>
                <Textarea
                  disabled={isSubmitLoading}
                  required
                  id="prompt"
                  placeholder="Given the following text..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-full resize-none"
                />
              </div>

              {showFullPrompt && (
                <div className="w-full h-full flex flex-col gap-1">
                  <p className="text-gray-500 text-sm flex items-center">
                    Full prompt
                    <InlineContextTooltip type="full_prompt" />
                  </p>
                  <FullPrompt
                    customQuickAction={{
                      title: name,
                      prompt,
                      includePrefix,
                      includeReflections,
                      includeRecentHistory,
                    }}
                    setIncludePrefix={setIncludePrefix}
                    setIncludeRecentHistory={setIncludeRecentHistory}
                    setIncludeReflections={setIncludeReflections}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              disabled={isSubmitLoading}
              checked={includePrefix}
              onCheckedChange={(c) => setIncludePrefix(!!c)}
              id="includeReflections"
            />
            <label
              htmlFor="includeReflections"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include prefix in prompt
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              disabled={isSubmitLoading}
              checked={includeReflections}
              onCheckedChange={(c) => setIncludeReflections(!!c)}
              id="includeReflections"
            />
            <label
              htmlFor="includeReflections"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include reflections in prompt
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              disabled={isSubmitLoading}
              checked={includeRecentHistory}
              onCheckedChange={(c) => setIncludeRecentHistory(!!c)}
              id="includeReflections"
            />
            <label
              htmlFor="includeReflections"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Include recent history in prompt
            </label>
          </div>
          <div className="flex items-center justify-center w-full mt-4 gap-3">
            <Button disabled={isSubmitLoading} className="w-full" type="submit">
              Save
            </Button>
            <Button
              disabled={isSubmitLoading}
              onClick={() => {
                handleClearState();
                props.onOpenChange(false);
              }}
              variant="destructive"
              className="w-[20%]"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
