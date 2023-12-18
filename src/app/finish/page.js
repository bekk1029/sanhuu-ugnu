import { Layout } from "@/components/layout";
import { Check } from "@/assets/Check";
export default function Finish() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div class="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div class="justify-start items-center gap-4 flex">
          <div class="flex-col justify-start items-center gap-1 flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="20"
                  viewBox="0 0 92 4"
                  fill="none"
                >
                  <path d="M0 2L92 2.00001" stroke="#2563eb" stroke-width="4" />
                </svg>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">
                1
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Currency
            </div>
          </div>
          <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div class="flex-col justify-start items-center gap-1 flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="92"
                  height="20"
                  viewBox="0 0 92 4"
                  fill="none"
                >
                  <path d="M0 2L92 2.00001" stroke="#2563eb" stroke-width="4" />
                </svg>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight overflow-hidden">
                2
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Balance
            </div>
          </div>
          <div class="w-4 self-stretch pb-6 justify-center items-center gap-2 flex"></div>
          <div class="flex-col justify-start items-center gap-1 flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">
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
        <div class="self-stretch h-[156px] flex-col justify-start items-center gap-3 flex">
          <div class="flex-col justify-start items-center gap-4 flex">
            <div class="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 flex">
              <div class="w-8 h-8 relative">
                <Check />
              </div>
            </div>
            <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
              Good Job!
            </div>
          </div>
          <div class="self-stretch text-center text-slate-600 text-base font-normal font-['Roboto'] leading-normal">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </div>
        </div>
        <div class="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex">
          <div class="text-white text-xl font-normal font-['Roboto'] leading-7">
            Go to Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}
