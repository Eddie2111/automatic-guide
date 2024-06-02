import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center my-32">
      <p className="mb-16 font-thin text-9xl text-center">
        {" "}
        Task Management System
      </p>
      <Link
        href="/register/admin"
        className="text-black text-center hover:text-blue-600 underline duration-300"
      >
        {" "}
        create an admin account to get started{" "}
      </Link>
    </div>
  );
}
