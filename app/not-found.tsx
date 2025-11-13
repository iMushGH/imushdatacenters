import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" h-screen text-gray-700 flex flex-col p-4 items-center pt-4">
      <h1 className="text-5xl">OOOPS!!</h1>
      <h2 className="text-4xl font-black mt-4">Page Not Found</h2>
      <p className="my-4">Could not find requested resource</p>
      <Image
        src="/not_found.png"
        alt="iMush Data Center & Engineering Services Logo"
        width={600}
        height={120}
      />
      <Link className="text-blue-600 hover:underline my-4 font-bold" href="/">
        Return Home
      </Link>
    </div>
  );
}
