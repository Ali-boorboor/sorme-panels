import LoginSection from "../components/organisms/LoginSection";
import { memo } from "react";

const AdminLoginPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <LoginSection
        signupLink="/admin-panel/signup"
        forgotPasswordLink="/admin-panel/forgot-password"
      />
    </section>
  );
});

export default AdminLoginPage;
