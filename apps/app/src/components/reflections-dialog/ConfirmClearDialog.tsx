import { Button } from "@v1/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@v1/ui/dialog";
import { useState } from "react";

export interface ReflectionsProps {
  handleDeleteReflections: () => Promise<boolean>;
}

export function ConfirmClearDialog(props: ReflectionsProps) {
  const { handleDeleteReflections } = props;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} variant="destructive">
          Clear reflections
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl p-8 bg-white rounded-lg shadow-xl">
        <DialogHeader>
          <DialogDescription className="mt-2 text-md text-center font-light text-red-500">
            Are you sure you want to clear all reflections? This action can not
            be undone.
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={async () => {
            setOpen(false);
            await handleDeleteReflections();
          }}
          variant="destructive"
        >
          Clear reflections
        </Button>
        <div className="mt-6 flex justify-end">
          <Button onClick={() => setOpen(false)} variant="outline">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
