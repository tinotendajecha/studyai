import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col mb-5">
        <h1 className="text-6xl ">Ask me anything</h1>
        <p className="text-xl mt-2 w-96">From company policies, git workflows to products made here at Yirifi</p>
      </div>

      <Link href="/upload-pdf">
        <button className="bg-black text-white p-2 rounded-md mt-2">Get Started</button>
      </Link>
    </div>
  );
}
