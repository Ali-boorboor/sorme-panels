import LoginSection from "../components/organisms/LoginSection";
import { memo } from "react";

const SellerLoginPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <LoginSection
        isSeller="sellerForm"
        signupLink="/seller-panel/signup"
        forgotPasswordLink="/seller-panel/forgot-password"
      />
    </section>
  );
});

export default SellerLoginPage;
