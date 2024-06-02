"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";

// import the slice here
// import the logout function here
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut, setRole } from "@/redux/features/auth";
import { useLoginMutation } from "@/redux/queries/user.query";

export default function navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  const role = useSelector((state: RootState) => state.auth.role);
  const LogOut = () => {
    dispatch(logOut());
    router.push("/");
  };
  console.log(role);
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          E-Management
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 hidden" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#"></Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page"></Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#"></Link>
        </NavbarItem>
      </NavbarContent>
      {isAuthenticated ? (
        <NavbarContent justify="end">
          {role === "ADMIN" ? (
            <>
              <NavbarItem className="lg:flex hidden">
                <Link href="/admin/users">Users</Link>
              </NavbarItem>
              <NavbarItem className="lg:flex hidden">
                <Link href="/admin/tasks">Tasks</Link>
              </NavbarItem>
            </>
          ) : (
            <NavbarItem className="lg:flex hidden">
              <Link href="/user">Tasks</Link>
            </NavbarItem>
          )}
          <NavbarItem>
            <Button
              onPress={LogOut}
              className="bg-red-500 text-white"
              variant="flat"
            >
              Log out
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex hidden">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
