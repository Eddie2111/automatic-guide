"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useCreateTaskByEmployeeMutation } from "@/redux/queries/task.query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { taskFormSchema } from "@/schema/forms/taskFormSchema";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { taskFormProps } from "@/schema/forms/taskFormSchema";

export default function CreateTaskForm() {
  const [createTask, { isLoading: isCreating }] =
    useCreateTaskByEmployeeMutation();
  const [responseMessage, setResponseMessage] = React.useState<string>("");
  const form = useForm<taskFormProps>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "Active",
    },
  });

  async function onSubmit(values: taskFormProps) {
    const { data }: any = await createTask(values);
    setResponseMessage(data?.data ?? "");
    console.log(data);
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 w-full">
        <Label>Task Title</Label>
        <Input
          {...form.register("title")}
          error={form.formState.errors.title?.message}
          className="mb-4"
        />
        <Label>Description</Label>
        <Textarea
          placeholder="Type your message here."
          {...form.register("description")}
          error={form.formState.errors.description?.message}
          className="mb-4"
        />
        <div className="mb-4">
          <Label>Status</Label>
          <select
            {...form.register("status")}
            className="border-gray-300 px-3 py-2 border focus:border-blue-500 rounded-md w-full focus:outline-none"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Done">Done</option>
            <option value="Removed">Removed</option>
          </select>
          {form.formState.errors.status && (
            <p className="mt-1 text-red-500 text-xs">
              {form.formState.errors.status.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <p className="text-black">{responseMessage ?? ""}</p>
    </>
  );
}
