import { SidebarOption } from "../SidebarOption";
import { NavLink } from "react-router-dom";

import { MdOutlineDashboardCustomize, MdOutlineSettings } from "react-icons/md";

export const Sidebar = (props) => {
  return (
    <div class="flex-col  w-full border-2 border-right-2 border-slate-50 border-solid shadow-sm bg-slate-100">
      <div class="text-xl font-medium py-[30px] align-center">
        <span>CRUD</span>
      </div>
      <div class="px-[10px]">
        <SidebarOption
          Icon={MdOutlineDashboardCustomize}
          title="Dashboard"
          route="/"
        />
      </div>
    </div>
  );
};
