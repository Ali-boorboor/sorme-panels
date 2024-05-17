import SignupSection from "../components/organisms/SignupSection";
import { memo } from "react";

const AdminSignupPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignupSection signinLink="/admin-panel/login" />
    </section>
  );
});

export default AdminSignupPage;
