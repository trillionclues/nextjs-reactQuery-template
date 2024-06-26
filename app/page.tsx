import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-40">
      <div className="container mx-auto px-2">
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4">
          You need to be logged in to view this page.{" "}
          <Link
            href="#"
            className="font-bold text-white hover:text-slate-400 ease-linear transition-all duration-150"
          >
            Login
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
