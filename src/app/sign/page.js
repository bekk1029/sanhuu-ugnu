import { Vector } from "@/assets/Vector";
import { Name } from "@/assets/Name";
import Link from "next/link";
import { Btn } from "@/components/btn";
export default function Sign() {
  return (
    <div className="w-full flex h-screen ">
      <div class="w-1/2 flex justify-center items-center">
        <div className="flex flex-col justify-start items-center gap-10">
          <div class="p-[5px] justify-start items-center gap-[10px] flex">
            <Vector />
            <Name />
          </div>
          <div class="flex-col justify-start items-center gap-2 flex">
            <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
              Create Geld account
            </div>
            <div class="text-slate-700 text-base font-normal font-['Roboto'] leading-normal">
              Sign up below to create your Wallet account
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-4 flex">
            <input
              placeholder="Name"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <input
              placeholder="Email"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <input
              placeholder="Password"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <input
              placeholder="Re-Password"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex"
            />
            <Btn value="Sign up" />
          </div>
          <div class="justify-start items-baseline inline-flex">
            <div class="text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
              Already have account?
            </div>
            <div className="w-[77px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
              <div className="text-blue-600 text-base font-normal font-['Roboto'] leading-normal">
                <Link href={`/login`}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-600"></div>
    </div>
  );
}
