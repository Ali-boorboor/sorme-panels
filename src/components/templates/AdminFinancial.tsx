import { memo } from "react";

const AdminFinancial = memo(() => {
  return (
    <section className="flex justify-center items-start pt-8 w-full overflow-x-auto p-4 mt-10">
      <table className="w-4/5">
        <thead className="">
          <tr className="text-left">
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">Order</th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">
              User Name
            </th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">
              email address
            </th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">Date</th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">Total</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-t border-black text-left">
            <td className="font-semibold text-black text-xs md:text-lg py-2">#2546</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">Hardy</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">vbbb@gmail.com</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 ">2022/02/01</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 ">-$60</td>
          </tr>
          <tr className="border-t border-black text-left">
            <td className="font-semibold text-black text-xs md:text-lg py-2">#2546</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">Hardy</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">vbbb@gmail.com</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 ">2022/02/01</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 ">+$60</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
});

export default AdminFinancial;
