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
import React from "react";

import { useGetAllEmployeesQuery } from "@/redux/queries/employee.query";

import ModalWrapper from "./_components/ModalButton";

export default function Page() {
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading } = useGetAllEmployeesQuery(page.toString());
  const refetch_next = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const refetch_prev = () => {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  };
  if (data) {
    return (
      <div className="m-4 container">
        <ModalWrapper />
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <Table aria-label="employees Table">
            <TableHeader>
              <TableColumn>Serial</TableColumn>
              <TableColumn>First Name</TableColumn>
              <TableColumn>Last Name</TableColumn>
              <TableColumn>Email</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>Delete</TableColumn>
            </TableHeader>
            <TableBody>
              {data?.data?.map((employee) => (
                <TableRow key={employee.serial}>
                  <TableCell>{employee.serial}</TableCell>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.role}</TableCell>
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
  if (isLoading) {
    <div> Loading </div>;
  }
  if (error) {
    <div> Some error occured </div>;
  }
}
