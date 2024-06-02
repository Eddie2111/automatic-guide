"use client";
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useReadTasksEmployeeQuery } from "@/redux/queries/task.query";

import CreateTask from "./_components/CreateModal";
import DeleteTask from "./_components/DeleteTask";
import ModalWrapper from "./_components/ModalButton";

export default function Page() {
  const [page, setPage] = useState(0);
  const authenticated = useSelector((state) => state.auth.isLoggedIn);
  const serial = useSelector((state) => state.auth.serial);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useReadTasksEmployeeQuery(page.toString());
  const router = useRouter();
  const role = useSelector((state: RootState) => state.auth.role);
  if (role !== "USER") {
    router.push("/");
  }
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };

  if (isLoading) {
    return <div>Loading Fresh Data</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    console.log(data);
    return (
      <div className="m-4 p-4">
        <CreateTask />
        <Table aria-label="Tasks Table">
          <TableHeader>
            <TableColumn>Title</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Edit</TableColumn>
            <TableColumn>Delete</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.data?.map((task, index: number) => (
              <TableRow key={task?.serial ?? index}>
                <TableCell>
                  <NextLink
                    href={`/task/` + task?.serial ?? ""}
                    className="text-blue-500 underline"
                  >
                    {task?.title ?? ""}
                  </NextLink>
                </TableCell>
                <TableCell>{task?.description ?? ""}</TableCell>
                <TableCell>{task?.status ?? ""}</TableCell>
                <TableCell>
                  <ModalWrapper id={task?.serial ?? ""} />
                </TableCell>
                <TableCell>
                  <DeleteTask />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handlePrevPage}>Previous</Button>
        <Button onClick={handleNextPage}>Next</Button>
      </div>
    );
  }

  return <div>No data available</div>;
}
