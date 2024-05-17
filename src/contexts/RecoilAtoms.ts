import { RecoilState, atom } from "recoil";

const dashboardActiveLink: RecoilState<string> = atom({
  key: "dashboardActiveLink",
  default: "",
});

const sormeLogoMainPage: RecoilState<string> = atom({
  key: "sormeLogoMainPage",
  default: "",
});

export { dashboardActiveLink, sormeLogoMainPage };
