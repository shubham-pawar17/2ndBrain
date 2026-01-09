import type { ReactElement } from "react";

export function SidebarItem({text , icon}:{text:string; icon:ReactElement;}){
    return <div className="flex items-center gap-3 pr-6 pl-6 py-2 hover:bg-slate-200 hover:rounded-xl cursor-pointer text-gray-600
    transition-all duration-150">
      {icon}
      <span className="text-md text-gray-700">{text}</span>
    </div>
}