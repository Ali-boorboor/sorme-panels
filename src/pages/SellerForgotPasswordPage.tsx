import ForgotPassword from "../components/organisms/ForgotPassword";
import { memo } from "react";

const SellerForgotPasswordPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <ForgotPassword isSeller="sellerForm" />
    </section>
  );
});

export default SellerForgotPasswordPage;
