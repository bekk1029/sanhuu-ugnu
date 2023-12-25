import { Layout } from "../../components/layout";
import { Money } from "../../assets/Money";
import { Btn } from "../../components/btn";
import { Gline } from "../../assets/Gline";
import Link from "next/link";
export default function Currency() {
  return (
    <div className="w-full h-screen flex flex-col pt-10 justify-start items-center bg-white gap-[100px]">
      <div class="flex-col justify-start items-center gap-12 flex">
        <Layout />
        <div class="justify-start items-center gap-4 flex">
          <div class="flex-col justify-start items-center gap-1 flex">
            <div class="w-6 h-6 relative ">
              <div class="w-6 h-6 left-0 top-0 absolute bg-blue-600 rounded-full z-0">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight ">
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
              <div class="w-6 h-6 left-0 top-0 absolute bg-gray-200 rounded-full">
                <div className="absolute left-6 top-0">
                  <Gline />
                </div>
              </div>
              <div class="w-5 left-[2px] top-[2px] absolute text-center text-slate-900 text-sm font-normal font-['Roboto'] leading-tight">
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
      <div class="max-w-[384px] flex-col justify-start items-center gap-8 flex">
        <div class="flex-col gap-3 flex">
          <div class="flex-col justify-start items-center gap-6 flex">
            <div class="flex-col justify-start items-center gap-4 flex">
              <div class="p-2 bg-blue-600 rounded-[100px] justify-start items-center gap-2 flex">
                <div class="w-8 h-8 relative">
                  <Money />
                </div>
              </div>
              <div class="text-slate-900 text-2xl font-semibold font-['Roboto'] leading-loose">
                Select base currency
              </div>
            </div>
            <div class=" w-full h-16 rounded-lg flex-col justify-center items-center flex">
              <div class="self-stretch h-16 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center flex">
                <select className="w-full grow shrink basis-0 text-gray-700 text-xl font-medium font-['Roboto'] leading-normal bg-gray-100">
                  <option>MNT - Mongolian Tugrik</option>
                  <option>USD - United States dollar</option>
                  <option>CAD - Canadian dollar</option>
                  <option>GBP - Pound sterling</option>
                  <option>TL - Turkish lira</option>
                </select>

                {/* <div class="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z"
                      fill="#1F2937"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>
          <div class="flex flex-wrap self-stretch text-slate-600 text-xs font-normal font-['Roboto'] leading-none">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one{" "}
          </div>
        </div>
        <Link href={`/balance`}>
          <Btn value="Confirm" />
        </Link>
      </div>
    </div>
  );
}
