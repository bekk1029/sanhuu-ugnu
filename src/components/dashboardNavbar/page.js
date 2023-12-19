import { Vector } from "@/assets/Vector";
export const DashboardNavbar = () => {
  return (
    <div class="w-full px-[120px] py-4 bg-white justify-between items-center inline-flex">
      <div class="justify-start items-center gap-6 flex">
        <div class="p-[6.30px] justify-start items-center gap-[11.03px] flex">
          <Vector />
        </div>
        <div class="text-center text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
          Dashboard
        </div>
        <div class="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
          Records
        </div>
      </div>
      <div class="justify-start items-center gap-6 flex">
        <div class="w-[99px] px-3 bg-blue-600 rounded-[20px] justify-center items-center gap-1 flex">
          <div class="w-5 h-5 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H10.625V16.875C10.625 17.0408 10.5592 17.1997 10.4419 17.3169C10.3247 17.4342 10.1658 17.5 10 17.5C9.83424 17.5 9.67527 17.4342 9.55806 17.3169C9.44085 17.1997 9.375 17.0408 9.375 16.875V10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H9.375V3.125C9.375 2.95924 9.44085 2.80027 9.55806 2.68306C9.67527 2.56585 9.83424 2.5 10 2.5C10.1658 2.5 10.3247 2.56585 10.4419 2.68306C10.5592 2.80027 10.625 2.95924 10.625 3.125V9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="text-white text-base font-normal font-['Roboto'] leading-normal">
            Record
          </div>
        </div>
        <div class="w-16 h-16 flex-col justify-center items-center inline-flex">
          <img
            class="self-stretch grow shrink basis-0 rounded-full w-full h-full object-cover"
            src="https://i.pinimg.com/564x/22/fa/a5/22faa5eadb8dae8177e3d16e5fd028b5.jpg"
          />
        </div>
      </div>
    </div>
  );
};
