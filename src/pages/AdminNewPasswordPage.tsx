import NewPassword from "../components/organisms/NewPassword";
import { memo } from "react";

const AdminNewPasswordPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <NewPassword />
    </section>
  );
});

export default AdminNewPasswordPage;
