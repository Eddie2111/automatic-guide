"use client";
import {
  useReadTaskQuery,
  useDeleteTaskMutation,
} from "@/redux/queries/task.query";
import React from "react";
import { useDispatch } from "react-redux";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function DeleteTask({ serial }: { serial: string }) {
  const dispatch = useDispatch();
  const [deleteTask, { isLoading, isSuccess, isError }] =
    useDeleteTaskMutation();

  const handleSubmit = async () => {
    try {
      console.log("Serial:", serial);
      const response = await deleteTask({ serial });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  if (isLoading) {
    return <p>Deleting task...</p>;
  }

  if (isSuccess) {
    return <p>Task deleted successfully.</p>;
  }

  if (isError) {
    return <p>Error deleting task: {isError.message}</p>;
  }

  return (
    <div>
      <p>Are you sure you want to delete this task? </p>
      <div className="flex flex-row gap-2">
        <button
          onClick={handleSubmit}
          className="bg-red-500 my-8 px-4 py-2 rounded-lg w-[120px] text-lg text-white"
        >
          Yes
        </button>
      </div>
    </div>
  );
}

const ModalWrapper = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useReadTaskQuery(id);

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-blue-500 p-2 rounded-lg font-bold text-white">
          Delete Task
        </button>
      </DialogTrigger>
      <DialogContent>
        {isLoading ? (
          <p>Loading task...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <DeleteTask serial={id || ""} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
