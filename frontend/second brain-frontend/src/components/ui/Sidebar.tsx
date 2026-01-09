import { Logo } from "../../icons/Logo";
import { XIcon } from "../../icons/X";
import { YoutubeIcon } from "../../icons/Youtube";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className=" h-screen bg-white border-r border-gray pl-4 w-64 fixed left-0 top-0">
      <div className="flex items-center gap-3 font-bold text-lg text-gray-700 pt-6 pl-4 ">
        <div className="l-8 w-8 "><Logo/></div>
        Second Brain</div>
      <div className="p-6 ">
        <SidebarItem text="Tweets" icon={<XIcon />} />
        <SidebarItem text="Videos" icon={<YoutubeIcon />} />
      </div>
    </div>
}