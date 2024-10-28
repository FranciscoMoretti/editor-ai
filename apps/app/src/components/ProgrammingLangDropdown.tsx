import { ProgrammingLanguageOptions } from "@/types";
import { TooltipIconButton } from "@v1/ui/assistant-ui/tooltip-icon-button";
import { Button } from "@v1/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@v1/ui/dropdown-menu";
import { Code } from "lucide-react";

interface ProgrammingLanguageListProps {
  handleSubmit: (portLanguage: ProgrammingLanguageOptions) => Promise<void>;
}

export function ProgrammingLanguageList(
  props: Readonly<ProgrammingLanguageListProps>,
) {
  return (
    <div className="flex flex-col gap-3 items-center w-full text-left">
      <TooltipIconButton
        tooltip="PHP"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("php")}
      >
        <p>PHP</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="TypeScript"
        variant="ghost"
        className="transition-colors w-full h-fit px-1 py-1"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("typescript")}
      >
        <p>TypeScript</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="JavaScript"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("javascript")}
      >
        <p>JavaScript</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="C++"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("cpp")}
      >
        <p>C++</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="Java"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("java")}
      >
        <p>Java</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="Python"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("python")}
      >
        <p>Python</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="HTML"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("html")}
      >
        <p>HTML</p>
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="SQL"
        variant="ghost"
        className="transition-colors w-full h-fit"
        delayDuration={400}
        onClick={async () => await props.handleSubmit("sql")}
      >
        <p>SQL</p>
      </TooltipIconButton>
    </div>
  );
}

const LANGUAGES: Array<{ label: string; key: ProgrammingLanguageOptions }> = [
  { label: "PHP", key: "php" },
  { label: "TypeScript", key: "typescript" },
  { label: "JavaScript", key: "javascript" },
  { label: "C++", key: "cpp" },
  { label: "Java", key: "java" },
  { label: "Python", key: "python" },
  { label: "HTML", key: "html" },
  { label: "SQL", key: "sql" },
];

export const ProgrammingLanguagesDropdown = ({
  handleSubmit,
}: {
  handleSubmit: (portLanguage: ProgrammingLanguageOptions) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="transition-colors text-gray-600 flex items-center justify-center gap-2 w-[250px] h-[64px]"
        >
          New Code File
          <Code />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-[600px] w-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.key}
            onSelect={() => handleSubmit(lang.key)}
            className="flex items-center justify-start gap-1"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};