import { memo } from "react";

const SupportPageRightSection = memo(() => {
  return (
    <section className="w-full md:basis-3/5 p-4 flex flex-col gap-6 h-[30rem]">
      <div className="flex justify-between items-center gap-4 w-full bg-zinc-100 p-2 md:p-4 rounded-lg drop-shadow-md">
        <p className="font-semibold text-lg text-black">Active ticket</p>
        <p className="font-semibold text-lg text-black">10</p>
      </div>
      <div className="bg-zinc-100 rounded-lg p-2 md:p-4 drop-shadow-md h-full">
        <table className="w-full">
          <thead className="">
            <tr className="">
              <th className="font-semibold text-black text-xs md:text-lg py-2">Title</th>
              <th className="font-semibold text-black text-xs md:text-lg py-2">Date</th>
              <th className="font-semibold text-black text-xs md:text-lg py-2">Condition</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-t border-black text-center">
              <td className="font-normal text-xs md:text-base text-black py-2">cashback</td>
              <td className="font-normal text-xs md:text-base text-black py-2">1402/2/26</td>
              <td className="font-normal text-xs md:text-base text-black py-2">active</td>
            </tr>
            <tr className="border-t border-black text-center">
              <td className="font-normal text-xs md:text-base text-black py-2">cashback</td>
              <td className="font-normal text-xs md:text-base text-black py-2">1402/2/26</td>
              <td className="font-normal text-xs md:text-base text-black py-2">active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
});

export default SupportPageRightSection;
