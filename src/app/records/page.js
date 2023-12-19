import { DashboardNavbar } from "@/components/dashboardNavbar/page";
export default function Records() {
  return (
    <div className=" w-full h-screen">
      <div className="bg-white">
        <div className="max-w-[1400px] m-auto">
          <DashboardNavbar />
        </div>
      </div>
      <div className="max-w-[1400px] m-auto">
        <div className="w-full flex gap-6 px-[120px] py-4">
          <div className="w-1/3">
            <div className="w-[282px] h-[1080px] px-4 py-6 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[88px] flex-col justify-start items-start gap-6 flex">
                <div className="text-black text-2xl font-semibold font-['Roboto'] leading-loose">
                  Records
                </div>
                <div className="self-stretch h-8 px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                  <div className="w-5 h-5 relative" />
                  <div className="text-white text-base font-normal font-['Roboto'] leading-normal">
                    Add
                  </div>
                </div>
              </div>
              <div className="h-8 rounded-lg flex-col justify-center items-center flex">
                <div className="self-stretch h-8 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-neutral-400 text-base font-normal font-['Roboto'] leading-normal">
                    Search
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                  Types
                </div>
                <div className="w-[109px] relative">
                  <div className="w-[67px] h-8 px-3 left-0 top-0 absolute rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex" />
                    <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                      All
                    </div>
                  </div>
                  <div className="w-[102px] h-8 px-3 left-0 top-[36px] absolute rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex" />
                    <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                      Income
                    </div>
                  </div>
                  <div className="w-[109px] h-8 px-3 left-0 top-[72px] absolute rounded-lg justify-center items-center gap-2 inline-flex">
                    <div className="w-4 h-4 opacity-20 rounded-[50px] border border-gray-700 justify-center items-center flex" />
                    <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                      Expense
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[520px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                    Category
                  </div>
                  <div className="w-[61px] px-3 rounded-[20px] justify-center items-center gap-1 flex">
                    <div className="opacity-20 text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                      Clear
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[472px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[151px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Food & Drinks
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[120px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Shopping
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-28 px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Housing
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[157px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Transportation
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[104px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Vehicle
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[197px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Life & Entertainment
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[193px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Communication, PC
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[188px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Financial expenses
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[140px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Investments
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[106px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Income
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[100px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Others
                      </div>
                    </div>
                    <div className="w-5 h-5 relative origin-top-left -rotate-90" />
                  </div>
                  <div className="self-stretch justify-between items-center inline-flex">
                    <div className="w-[149px] px-3 rounded-lg justify-center items-center gap-2 flex">
                      <div className="w-5 h-5 relative" />
                      <div className="text-gray-800 text-base font-normal font-['Roboto'] leading-normal">
                        Add Category
                      </div>
                    </div>
                    <div className="w-5 h-5 px-[7px] origin-top-left -rotate-90 opacity-0 justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                  Amount Range
                </div>
                <div className="flex-col justify-start items-center gap-4 flex">
                  <div className="self-stretch justify-start items-start gap-4 inline-flex">
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                      <div className="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                      <div className="self-stretch h-12 p-4 bg-gray-100 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                        <div className="grow shrink basis-0 text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
                          1000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[245px] justify-start items-start gap-[189px] inline-flex">
                    <div className="flex-col justify-start items-center gap-1 inline-flex">
                      <div className="p-1 bg-blue-600 rounded-full justify-start items-center gap-2 inline-flex">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                        0
                      </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-1 inline-flex">
                      <div className="p-1 bg-blue-600 rounded-full justify-start items-center gap-2 inline-flex">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                        1000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-6 justify-start">
            <div>
              <div className="w-[180px] h-12 rounded-lg flex-col justify-center items-center inline-flex">
                <div className="self-stretch h-12 p-4 bg-gray-50 rounded-lg border border-gray-300 justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-gray-800 text-base font-semibold font-['Roboto'] leading-normal">
                    Newest fisrt
                  </div>
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
              <div className="w-[188px] h-8 justify-start items-center gap-4 inline-flex">
                <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Last 30 Days
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-lg justify-center items-center gap-1 flex">
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[894px] h-[980px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-4 flex">
                    <div className="w-6 h-6 opacity-20 rounded border border-gray-800 justify-center items-center flex" />
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                      Select all
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">
                      -
                    </div>
                    <div className="text-slate-400 text-base font-semibold font-['Roboto'] leading-normal">
                      35,500₮
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[404px] flex-col justify-start items-start gap-3 flex">
                  <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                    Today
                  </div>
                  <div className="self-stretch h-[368px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-blue-600 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Lending & Renting
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-green-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-red-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-red-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[480px] flex-col justify-start items-start gap-3 flex">
                  <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                    Yesterday
                  </div>
                  <div className="self-stretch h-[444px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch px-6 py-3 bg-white rounded-xl border border-gray-200 justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 opacity-20 rounded border border-gray-800" />
                        <div className="w-10 h-10 relative">
                          <div className="w-10 h-10 left-0 top-0 absolute bg-red-500 rounded-full" />
                          <div className="w-5 h-5 left-[10px] top-[10px] absolute rounded" />
                        </div>
                        <div className="flex-col justify-start items-start inline-flex">
                          <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                            Food & Drinks
                          </div>
                          <div className="text-gray-500 text-xs font-normal font-['Roboto'] leading-none">
                            14:00
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 flex">
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          -
                        </div>
                        <div className="text-yellow-500 text-base font-semibold font-['Roboto'] leading-normal">
                          1,000₮
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
