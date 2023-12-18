import { Layout } from "@/components/layout";
import { Money } from "@/assets/Money";
export default function Currency() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div class="flex-col justify-start items-center gap-12 inline-flex">
        <Layout />
        <div class="justify-start items-center gap-4 inline-flex">
          <div class="flex-col justify-start items-center gap-1 inline-flex">
            <div class="w-6 h-6 relative">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full"></div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight">
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
              <div class="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full"></div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
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
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
                3
              </div>
            </div>
            <div class="text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
              Finish
            </div>
          </div>
        </div>
      </div>
      <div class="w-96 h-[308px] flex-col justify-start items-center gap-8 inline-flex">
        <div class="self-stretch h-[228px] flex-col justify-start items-center gap-3 flex">
          <div class="flex-col justify-start items-center gap-6 flex">
            <div class="flex-col justify-start items-center gap-4 flex">
              <div class="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 inline-flex">
                <div class="w-8 h-8 relative">
                  <Money />
                </div>
              </div>
              <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
                Select base currency
              </div>
            </div>
            <div class="h-16 rounded-lg flex-col justify-center items-center flex">
              <div class="self-stretch h-16 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                <div class="grow shrink basis-0 text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                  MNT - Mongolian Tugrik
                </div>
                <div class="w-6 h-6 relative"></div>
              </div>
            </div>
          </div>
          <div class="self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </div>
        </div>
        <div class="w-96 h-12 px-4 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
          <div class="text-white text-xl font-normal font-['Roboto'] leading-7">
            Confirm{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
