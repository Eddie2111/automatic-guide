import axios from "axios";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await axios.get(
    "http://localhost:3100/employee/getOne?id=" + params.id
  );
  console.log(response);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();

    return (
      <div className="flex flex-col container">
        <Link href="/admin/users" className="text-blue-500 underline">
          {" "}
          ← Back to User List
        </Link>
        <p className="my-4 font-bold text-xl">{response?.data?.data?.serial}</p>
        <p className="my-4 font-bold text-xl">
          {response?.data?.data?.firstName} {response?.data?.data?.lastName}
        </p>
        <p className="my-4 text-md">{response?.data?.data?.email}</p>
        <p className="font-bold">Role: {response?.data?.data?.role}</p>
      </div>
    );
  };
}
