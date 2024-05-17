import { memo } from "react";
import { Link } from "react-router-dom";
import { DashboardBoxPropsType } from "../../types/MoleculesType";

const DashboardBox = memo((props: DashboardBoxPropsType) => {
  return (
    <Link
      to={props.href}
      className="relative px-4 py-2 text-right w-52 h-20 border-2 shadow-md shadow-primary-color border-primary-color rounded-lg"
    >
      <img
        src={props.icon}
        alt="box-icon"
        className="absolute w-16 h-16 object-cover -top-7 -left-6 -rotate-[30deg]"
      />
      <p className="font-semibold text-black text-lg text-nowrap">{props.title}</p>
      <p className="font-semibold text-black text-lg text-nowrap">{props.text}</p>
    </Link>
  );
});

export default DashboardBox;
