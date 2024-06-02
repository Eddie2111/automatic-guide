"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@nextui-org/react";

import CreateTaskForm from "./CreateTask";

export default function ModalWrapper() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-blue-500 text-white">+ Create New Task</Button>
      </DialogTrigger>
      <DialogContent>
        <CreateTaskForm />
      </DialogContent>
    </Dialog>
  );
}
