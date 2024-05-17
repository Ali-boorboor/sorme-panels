import SentCodeSection from "../components/organisms/SentCodeSection";
import { memo } from "react";

const SellerEnterCodePage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SentCodeSection title="Sign In / Sign Up" isSeller="sellerForm" />
    </section>
  );
});

export default SellerEnterCodePage;
