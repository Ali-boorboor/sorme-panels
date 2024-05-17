import { dashboardActiveLink } from "../../contexts/RecoilAtoms";
import { memo, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

const MainSellerPanelSidebar = memo(() => {
  const [activeLink, setActiveLink] = useRecoilState(dashboardActiveLink);
  const router = useLocation();

  useEffect(() => {
    const activeLinkIndex = router.pathname.lastIndexOf("/");
    setActiveLink(router.pathname.slice(activeLinkIndex + 1));
  }, [router]);

  return (
    <aside className="flex w-40 md:basis-1/5 flex-col gap-8 h-screen items-start p-4 md:p-12 shadow-md shadow-zinc-400 sticky top-20 left-0">
      <div className="flex flex-col items-center m-0 md:mx-auto gap-1">
        <img
          src="/images/png/dashboard-icon.png"
          alt="user-avatar"
          className="md:w-24 md:h-24 w-10 h-10 object-cover rounded-full border-2 border-primary-color mb-2"
        />
        <p className="font-semibold text-lg text-black capitalize">Ali boorboor</p>
        <p className="font-normal text-base text-zinc-500">Ali@gmail.com</p>
      </div>
      <Link
        to="/seller-panel/"
        className="text-black font-semibold text-lg capitalize flex gap-2 items-center transition-all duration-300 hover:text-primary-color md:m-0 mx-auto"
      >
        {activeLink === "" && (
          <img
            src="/images/png/active-link-icon.png"
            alt="active-link-icon"
            className="w-6 h-16 rotate-180 absolute left-0"
          />
        )}
        <img
          src="/images/png/dashboard-icon.png"
          alt="dashboard-avatar"
          className="w-8 h-8 object-cover"
        />
        <p className="hidden md:inline-block">dashboard</p>
      </Link>
      <Link
        to="/seller-panel/product"
        className="text-black font-semibold text-lg capitalize flex gap-2 items-center transition-all duration-300 hover:text-primary-color md:m-0 mx-auto"
      >
        <img
          src="/images/png/seller-box-icon.png"
          alt="dashboard-avatar"
          className="w-8 h-8 object-cover"
        />
        {activeLink === "product" && (
          <img
            src="/images/png/active-link-icon.png"
            alt="active-link-icon"
            className="w-6 h-16 rotate-180 absolute left-0"
          />
        )}
        <p className="hidden md:inline-block">product</p>
      </Link>
      <Link
        to="/seller-panel/settings"
        className="text-black font-semibold text-lg capitalize flex gap-2 items-center transition-all duration-300 hover:text-primary-color md:m-0 mx-auto"
      >
        <img
          src="/images/png/setting-icon.png"
          alt="dashboard-avatar"
          className="w-8 h-8 object-cover"
        />
        {activeLink === "settings" && (
          <img
            src="/images/png/active-link-icon.png"
            alt="active-link-icon"
            className="w-6 h-16 rotate-180 absolute left-0"
          />
        )}
        <p className="hidden md:inline-block">settings</p>
      </Link>
    </aside>
  );
});

export default MainSellerPanelSidebar;
