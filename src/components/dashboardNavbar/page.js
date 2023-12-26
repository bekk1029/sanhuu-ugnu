import { Vector } from "@/assets/Vector";
import { AddRecord2 } from "../Addcard2";

import Link from "next/link";
import Profile from "../Avatar";
export const DashboardNavbar = () => {
  return (
    <div class="w-full px-[120px] py-4 bg-white justify-between items-center inline-flex">
      <div class="justify-start items-center gap-6 flex">
        <div class="p-[6.30px] justify-start items-center gap-[11.03px] flex">
          <Link href="/dashboard">
            <Vector />
          </Link>
        </div>
        <div class="text-center text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
          <Link href={`/dashboard`}> Dashboard</Link>
        </div>
        <div class="text-center text-slate-900 text-base font-normal font-['Roboto'] leading-normal">
          <Link href="/records">Records</Link>
        </div>
      </div>
      <div class="justify-start items-center gap-6 flex">
        <AddRecord2 />

        <Profile />
      </div>
    </div>
  );
};
