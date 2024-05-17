import SignupSection from "../components/organisms/SignupSection";
import { memo } from "react";

const SellerSignupPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignupSection isSeller="sellerForm" signinLink="/seller-panel/login" />
    </section>
  );
});

export default SellerSignupPage;
