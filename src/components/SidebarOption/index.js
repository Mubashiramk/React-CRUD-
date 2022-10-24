import { Link, NavLink } from "react-router-dom";
// import { useRouter } from "next/router";

export const SidebarOption = (props) => {
  // const router = useRouter();

  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    console.log(pathname);
    return pathname === "/";
  };

  const act = "text-blue-400  font-large";
  const normalClass = "text-black-500 font-large";
  return (
    <NavLink
      exact={NavLink.URL === "/" ? true : false}
      to={props.route}
      className={({ isActive }) => (isActive ? act : normalClass)}
      // isActive={checkActive}
      // activeClassName="text-blue-400 "
      // className="text-black-500"
    >
      <div class={`flex h-10  my-2 items-center rounded-md  m-2 `}>
        <div class="p-2">{props.Icon && <props.Icon class="w-6 h-6" />}</div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
    </NavLink>
  );
};
