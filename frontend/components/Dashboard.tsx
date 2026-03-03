import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center grow ">
      <div className="flex flex-col">
        <div className="text-left">
          {" "}
          You currently do not belong to any company.
        </div>
        <div className="text-left">
          You can try and request a company to join them from list below.
        </div>
      </div>

      <div className="flex flex-col w-full grow">
        <div className="bg-black text-white  p-2 m-2 ">
          Workspaces publicly available
        </div>

        <div className="hover:bg-slate-100 dark:hover:bg-stone-900 w-full px-2 py-2 flex flex-row cursor-pointer gap-2">
          <div className="bg-green-500 min-w-24 text-center px-1 py-0.5 text-sm">
            open
          </div>
          <div>CodersLab</div>
          <div className="text-stone-500">13/95 online</div>
        </div>
        <div className="hover:bg-slate-100 dark:hover:bg-stone-900 w-full px-2 py-2 flex flex-row cursor-pointer gap-2">
          <div className="bg-yellow-500 px-1 py-0.5 text-sm min-w-24 text-center">
            request only
          </div>
          <div>CodersLab</div>
          <div className="text-stone-500">53/254 online</div>
        </div>
        <div className="hover:bg-slate-100 dark:hover:bg-stone-900 w-full px-2 py-2 flex flex-row cursor-pointer gap-2">
          <div className="bg-red-500 px-1 py-0.5 text-sm min-w-24 text-center">
            invite only
          </div>
          <div>CodersLab</div>
          <div className="text-stone-500">2/10 online</div>
        </div>
      </div>
    </div>
  );
}
