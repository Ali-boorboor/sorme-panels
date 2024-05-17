import { memo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sormeLogoMainPage } from "../../contexts/RecoilAtoms";

const MainHeader = memo((props: any) => {
  const router = useLocation();
  const [mainPage, setMainPage] = useRecoilState(sormeLogoMainPage);

  useEffect(() => {
    const mainPageIndex = router.pathname.lastIndexOf("/");
    setMainPage(router.pathname.slice(0, mainPageIndex + 1));
  }, [mainPage]);

  return (
    <header className="sticky top-0 shadow-md shadow-zinc-300 z-50 bg-white">
      <section className="flex items-center justify-center md:justify-between flex-wrap gap-4 max-w-[86rem] w-full m-auto p-4">
        <div className="flex items-center gap-6 justify-center md:gap-10 flex-wrap">
          <Link
            to={mainPage}
            className="w-40 h-10 bg-center bg-cover bg-[url('/images/png/sorme-logo.png')]"
          ></Link>
        </div>
        <div className="flex items-center gap-7">
          <Link
            to={props.signLink}
            className="flex items-center justify-center gap-1 h-10 text-base p-2 font-semibold text-black bg-white border border-black rounded-md text-nowrap transition-all duration-300 hover:bg-primary-color hover:scale-105"
          >
            Sign In / SingUp
            <img
              src="/images/png/user-icon.png"
              alt="user-icon"
              className="object-cover w-5 h-5 brightness-0"
            />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-center rounded-md w-10 h-10 bg-secondary-color relative transition-all duration-300 hover:scale-95 after:absolute after:h-full after:w-1 after:border-l after:border-black after:-left-4"
          >
            <span className="flex items-center justify-center absolute w-6 h-6 bg-primary-color text-white text-base font-normal -top-2 -left-2 rounded-full">
              0
            </span>
            <img src="/images/png/cart-icon.png" alt="cart-icon" className="w-7 h-7 object-cover" />
          </Link>
        </div>
      </section>
    </header>
  );
});

export default MainHeader;
