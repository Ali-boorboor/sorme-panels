import MainSidebar from "../organisms/MainSidebar";
import DashboardBox from "../molecules/DashboardBox";
import MainHeader from "../organisms/MainHeader";
import { memo } from "react";
import { Outlet, useLocation } from "react-router";

const AdminPanel = memo(() => {
  const URL = useLocation();

  return (
    <>
      <MainHeader signLink="/admin-panel/login" />
      <main className="flex gap-4 justify-between">
        <MainSidebar />
        {URL.pathname === "/admin-panel/" ? (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-items-center max-w-[40rem] m-auto p-4 mt-20">
            <DashboardBox
              href="/admin-panel/user"
              title="20 Users"
              text="Users"
              icon="/images/png/user-icon.png"
            />
            <DashboardBox
              href="/admin-panel/seller"
              title="20 Seller"
              text="Sellers"
              icon="/images/png/seller-box-icon.png"
            />
            <DashboardBox
              href="/admin-panel/financial"
              title="20 transaction"
              text="Financial transactions"
              icon="/images/png/like-heart-icon.png"
            />
            <DashboardBox
              href="/admin-panel/support"
              title="20 Active"
              text="Support tickets"
              icon="/images/png/support-icon.png"
            />
          </section>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
});

export default AdminPanel;
