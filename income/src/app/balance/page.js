import { Layout } from "../../components/layout";
import { Coin } from "../../assets/Coin";
import { Btn } from "../../components/btn";
import { Bline } from "../../assets/Bline";
import { Gline } from "../../assets/Gline";
import Link from "next/link";
export default function Balance() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center pt-10 bg-white gap-[100px]">
      <div class="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div class="justify-start items-center gap-4 inline-flex">
          <div class="flex-col justify-start items-center gap-1 inline-flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Bline />
                </div>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight z-10">
                1
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Currency
            </div>
          </div>
          <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div class="flex-col justify-start items-center gap-1 inline-flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight z-50">
                2
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Balance
            </div>
          </div>
          <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div class="flex-col justify-start items-center gap-1 inline-flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight z-10">
                3
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Finish
            </div>
          </div>
        </div>
      </div>
      <div class="flex-col justify-start items-center gap-8 flex">
        <div class="w-full flex-col gap-3 flex">
          <div class="flex-col justify-start items-center gap-6 flex">
            <div class="flex-col justify-start items-center gap-4 flex">
              <div class="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                <div class="w-8 h-8 relative">
                  <Coin />
                </div>
              </div>
              <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
                Set up your cash Balance
              </div>
            </div>
            <input
              placeholder="Email"
              className="w-full h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex text-black"
            />
          </div>
          <div class="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">
            How much cash do you have in your wallet?
          </div>
        </div>
        <Link href={`/finish`}>
          <Btn value="Confirm" />
        </Link>
      </div>
    </div>
  );
}
