import SupportPageLeftSection from "../../components/molecules/SupportPageLeftSection";
import SupportPageRightSection from "../../components/molecules/SupportPageRightSection";
import { memo } from "react";

const AdminSupport = memo(() => {
  return (
    <>
      <section className="flex basis-4/5 flex-wrap md:flex-nowrap gap-10 justify-center items-center max-w-[60rem] m-auto bg-white rounded-lg drop-shadow-md">
        <SupportPageLeftSection />
        <SupportPageRightSection />
      </section>
    </>
  );
});

export default AdminSupport;
