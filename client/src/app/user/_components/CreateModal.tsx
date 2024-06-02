import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateTask from "./CreateTask";

export default function ModalWrapper() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-blue-500 p-2 rounded-lg font-bold text-white">
          + Create New Task
        </button>
      </DialogTrigger>
      <DialogContent>
        <CreateTask />
      </DialogContent>
    </Dialog>
  );
}
