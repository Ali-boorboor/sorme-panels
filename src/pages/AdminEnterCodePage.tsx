import SentCodeSection from "../components/organisms/SentCodeSection";
import { memo } from "react";

const AdminEnterCodePage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SentCodeSection title="Sign In / Sign Up" />
    </section>
  );
});

export default AdminEnterCodePage;
