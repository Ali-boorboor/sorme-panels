import { memo } from "react";

const AdminUser = memo(() => {
  return (
    <section className="flex justify-center items-start pt-8 w-full overflow-x-auto p-2 mt-10">
      <table className="w-4/5">
        <thead className="">
          <tr className="text-left">
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">
              User Name
            </th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">
              registery date
            </th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">
              email address
            </th>
            <th className="font-semibold text-black text-xs md:text-lg capitalize py-2">delete</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-t border-black text-left">
            <td className="font-semibold text-black text-xs md:text-lg py-2">Ali</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">2022/02/01</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">vbbb@gmail.com</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 relative after:absolute after:border-r-2 after:border-primary-color after:h-6 after:top-1/2 after:-translate-y-1/2 after:rotate-45 before:absolute before:border-r-2 before:border-primary-color before:h-6 before:top-1/2 before:-translate-y-1/2 before:-rotate-45 after:cursor-pointer before:cursor-pointer text-center md:text-left"></td>
          </tr>
          <tr className="border-t border-black text-left">
            <td className="font-semibold text-black text-xs md:text-lg py-2">Ali</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">2022/02/01</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2">vbbb@gmail.com</td>
            <td className="font-semibold text-black text-xs md:text-lg py-2 relative after:absolute after:border-r-2 after:border-primary-color after:h-6 after:top-1/2 after:-translate-y-1/2 after:rotate-45 before:absolute before:border-r-2 before:border-primary-color before:h-6 before:top-1/2 before:-translate-y-1/2 before:-rotate-45 after:cursor-pointer before:cursor-pointer text-center md:text-left"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
});

export default AdminUser;
