import NewPassword from "../components/organisms/NewPassword";
import { memo } from "react";

const SellerNewPasswordPage = memo(() => {
  return (
    <section className="flex justify-center items-center h-screen">
      <NewPassword isSeller="sellerForm" />
    </section>
  );
});

export default SellerNewPasswordPage;
