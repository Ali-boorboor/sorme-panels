import MainHeader from "../components/organisms/MainHeader";
import DashboardBox from "../components/molecules/DashboardBox";
import MainSellerPanelSidebar from "../components/organisms/MainSellerPanelSidebar";
import { Outlet, useLocation } from "react-router";
import { memo } from "react";

const SellerPanelPage = memo(() => {
  const URL = useLocation();

  return (
    <>
      <MainHeader signLink="/seller-panel/login" />
      <main className="flex gap-4 justify-between">
        <MainSellerPanelSidebar />
        {URL.pathname === "/seller-panel/" ? (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-items-center max-w-[40rem] m-auto p-4 mt-20">
            <DashboardBox
              href="/seller-panel/product"
              title="20 Seller"
              text="Sellers"
              icon="/images/png/seller-box-icon.png"
            />
          </section>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
});

export default SellerPanelPage;
