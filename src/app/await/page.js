import { Vector } from "@/assets/Vector";
import { Name } from "@/assets/Name";
export default function Login() {
  return (
    <div className="w-full flex h-screen ">
      <div class="w-[1440px] h-[1024px] pt-[404px] pb-[436px] bg-white justify-center items-center inline-flex">
        <div class="self-stretch flex-col justify-start items-center gap-12 inline-flex">
          <div class="p-[10.08px] justify-start items-center gap-[17.64px] inline-flex">
            <Vector />
            <Name />
          </div>
          <div class="flex-col justify-start items-center gap-4 flex">
            <div class="w-8 h-8 justify-start items-start inline-flex">
              <div class="w-8 h-8 relative">
                <div class="w-8 h-8 left-0 top-0 absolute rounded-full border-2 border-neutral-200"></div>
                <div class="w-8 h-8 left-0 top-0 absolute rounded-full border-2 border-blue-600"></div>
              </div>
            </div>
            <div class="text-slate-900 text-base font-semibold font-['Roboto'] leading-normal">
              Түр хүлээнэ үү...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
