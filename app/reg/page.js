import RegFrom from "@/components/auth/RegFrom";

export default function RegPage()
 {
   return (
      <section className=" grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl text-center pb-1">Register Now</h4>

          {/* Reg From */}
          <RegFrom />

          <span className="text-center text-xs text-white">
            Already have an account?
            <a className="underline hover:text-indigo-600 ml-1" href="/login">
              Login
            </a>
          </span>

        </div>
      </section>
   );
 };
