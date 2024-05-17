import SentCodeSection from "../components/organisms/SentCodeSection";
import { memo } from "react";

const AdminForgotPasswordCodePage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SentCodeSection title="forget password" />
    </section>
  );
});

export default AdminForgotPasswordCodePage;
