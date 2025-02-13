import LoginFrom from "@/components/auth/LoginFrom";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl text-center mb-6">Sign in</h4>
        {/* Login From */}
        <LoginFrom/>

        <span className="text-center text-xs text-white block mt-4">
          Don&apos;t have an account?
          <Link className="underline hover:text-indigo-600 ml-1" href="/reg">
            Register
          </Link>
        </span>
      </div>
    </section>
  );
};
