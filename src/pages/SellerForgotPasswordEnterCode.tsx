import SentCodeSection from "../components/organisms/SentCodeSection";
import { memo } from "react";

const SellerForgotPasswordEnterCode = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SentCodeSection title="forget password" isSeller="sellerForm" />
    </section>
  );
});

export default SellerForgotPasswordEnterCode;
