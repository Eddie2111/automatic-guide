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
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useReadTasksQuery } from "@/redux/queries/task.query";
import { logIn, logOut, setRole } from "@/redux/features/auth";

import ModalWrapper from "./_components/ModalButton";

export default function Page() {
  const router = useRouter();
  const role = useSelector((state: RootState) => state.auth.role);
  if (role !== "ADMIN") {
    router.push("/");
  }

  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useReadTasksQuery(page.toString());
  const refetch_next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const refetch_prev = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <div className="m-4 container">
      <ModalWrapper />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <Table aria-label="Tasks Table">
          <TableHeader>
            <TableColumn>Serial</TableColumn>
            <TableColumn>Title</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Edit</TableColumn>
            <TableColumn>Delete</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.data?.map((task) => (
              <TableRow key={task.serial}>
                <TableCell>
                  <Link
                    href={`/task/` + task.serial}
                    className="text-blue-500 underline"
                  >
                    {task.serial}
                  </Link>
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Button className="mx-4 my-2" onPress={refetch_prev}>
        Previous
      </Button>
      <Button className="mx-4 my-2" onPress={refetch_next}>
        Next
      </Button>
    </div>
  );
}
