"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector, useDispatch } from "react-redux";

import { useReadTaskQuery } from "@/redux/queries/task.query";

import EditTaskForm from "./EditTask";

export default function ModalWrapper({ id }: { id: string }) {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useReadTaskQuery(id);
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-blue-500 p-2 rounded-lg font-bold text-white">
          Edit Task
        </button>
      </DialogTrigger>
      <DialogContent>
        <EditTaskForm
          serial={id ?? ""}
          title={data?.data?.title ?? ""}
          description={data?.data?.description ?? ""}
          status={data?.data?.status ?? ""}
        />
      </DialogContent>
    </Dialog>
  );
}
