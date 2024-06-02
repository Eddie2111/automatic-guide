import axios from "axios";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await axios.get(
    "http://localhost:3100/task/getTask?id=" + params.id
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="flex flex-col container">
      <Link href="/user" className="text-blue-500 underline">
        {" "}
        ← Back to Task List
      </Link>
      <p className="my-4 font-bold text-xl">{response?.data?.data?.title}</p>
      <p className="my-4 font-extralight text-center text-md">
        {response?.data?.data?.description}
      </p>
      <p>Status: {response?.data?.data?.status}</p>
      <p>Assigned by: {response?.data?.data?.assignedBy}</p>
      <p>Created at: {formatDate(response?.data?.data?.createdAt)}</p>
      <p>Updated at: {formatDate(response?.data?.data?.updatedAt)}</p>
    </div>
  );
}
