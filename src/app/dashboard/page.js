export default function Dashboard() {
  return (
    <div class="w-[1440px] h-[72px] px-[120px] py-4 bg-white justify-between items-center inline-flex">
      <div class="justify-start items-center gap-6 flex">
        <div class="p-[6.30px] justify-start items-center gap-[11.03px] flex"></div>
        <div class="text-center text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
          Dashboard
        </div>
        <div class="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
          Records
        </div>
      </div>
      <div class="justify-start items-center gap-6 flex">
        <div class="w-[99px] px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex">
          <div class="w-5 h-5 relative"></div>
          <div class="text-white text-base font-normal font-['Roboto'] leading-normal">
            Record
          </div>
        </div>
        <div class="w-10 h-10 flex-col justify-center items-center inline-flex">
          <img
            class="self-stretch grow shrink basis-0 rounded-full"
            src="https://via.placeholder.com/40x40"
          />
        </div>
      </div>
    </div>
  );
}
