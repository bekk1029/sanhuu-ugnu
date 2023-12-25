import { Vector } from "@/assets/Vector";
import { Name } from "@/assets/Name";
import Link from "next/link";
export const Home = () => {
  return (
    <div className="w-full flex h-screen ">
      <div className="w-1/2 flex justify-center items-center bg-white ">
        <div className="flex  flex-col justify-start items-center gap-10 ">
          <div className="p-[5px] justify-start items-center gap-[10px] flex">
            <Vector />
            <Name />
          </div>
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-slate-900 text-2xl font-semibold leading-loose">
              Welcome Back
            </div>
            <div className="text-slate-700 text-base font-normal leading-normal">
              Welcome back, Please enter your details
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 flex">
            <input
              placeholder="Email"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <input
              placeholder="Password"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <div className="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex">
              <div className="text-white text-xl font-normal leading-7">
                Log in
              </div>
            </div>
          </div>
          <div className="justify-start  flex">
            <div className="text-slate-900 text-base font-normal leading-normal">
              Don’t have account?
            </div>
            <div className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
              <div className="text-blue-600 text-base font-normal leading-normal">
                <Link href={`/sign`}>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
};
