import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full  grow items-center justify-center  font-sans ">
      <main className="flex flex-col grow justify-center items-center">
        

        <form className="bg-zinc-100 dark:bg-black p-4 rounded-lg sm:w-96 h-96 grow flex flex-col justify-between  gap-2  ">
          <div className="mb-auto p-1 text-md">Create new account</div>
          <label>Username</label>
          <input
            placeholder="JohnDoe"
            className="bg-zinc-200 dark:bg-neutral-950 p-1"
            type="text"
          />
          <label>Password</label>
          <input
            placeholder="***********"
            className="bg-zinc-200 dark:bg-neutral-950 p-1"
            type="password"
          />
          <label>Confirm Password</label>
          <input
            placeholder="***********"
            className="bg-zinc-200 dark:bg-neutral-950 p-1"
            type="password"
          />
          <div className="flex flex-row gap-1">
            <button
              type="submit"
              className="bg-white hover:opacity-85 cursor-pointer dark:border-0 border border-gray-800 px-4 py-1 rounded-md text-black ml-auto "
            >
              Sign up
            </button>
          </div>
          <Link
            href="/"
            className="underline mt-auto dark:text-slate-200 text-slate-800"
          >
            Switch to login page
          </Link>
        </form>
      </main>
    </div>
  );
}
