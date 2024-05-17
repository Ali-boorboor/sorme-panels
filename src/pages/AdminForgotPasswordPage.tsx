import ForgotPassword from "../components/organisms/ForgotPassword";
import { memo } from "react";

const AdminForgotPasswordPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <ForgotPassword />
    </section>
  );
});

export default AdminForgotPasswordPage;
