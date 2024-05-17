import { memo } from "react";

const SellerSettingsPage = memo(() => {
  return (
    <form
      className="flex basis-4/5 flex-col gap-6 items-start justify-center bg-white rounded-lg p-4 drop-shadow-md max-w-[60rem] m-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex justify-between items-center gap-4 w-full md:flex-nowrap flex-wrap">
        <label
          htmlFor="profile-input"
          className="font-normal text-black text-lg md:basis-1/2 flex gap-2 items-center md:flex-nowrap flex-wrap w-full"
        >
          Add profile :
          <p className="text-black font-normal text-lg bg-zinc-100 rounded-xl py-2 px-4 cursor-pointer">
            Add file
          </p>
          <input type="file" id="profile-input" placeholder="Add file" className="" hidden />
        </label>
        <label
          htmlFor="current-password-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          Current password :
          <input
            type="password"
            id="current-password-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
      </div>
      <div className="flex justify-between items-center gap-4 w-full md:flex-nowrap flex-wrap">
        <label
          htmlFor="name-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          full name :
          <input
            type="text"
            id="name-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
        <label
          htmlFor="new-password-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          New password :
          <input
            type="password"
            id="new-password-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
      </div>
      <div className="flex justify-between items-center gap-4 w-full md:flex-nowrap flex-wrap">
        <label
          htmlFor="birth-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          Date of birth :
          <input
            type="text"
            id="birth-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
        <label
          htmlFor="confirm-password-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          Confirm password :
          <input
            type="password"
            id="confirm-password-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
      </div>
      <div className="flex justify-between items-center gap-4 w-full md:flex-nowrap flex-wrap">
        <label
          htmlFor="address-input"
          className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
        >
          Address :
          <input
            type="text"
            id="address-input"
            className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
          />
        </label>
        <button
          type="submit"
          className="basis-1/2 font-normal text-black text-lg bg-zinc-100 py-2 px-6 rounded-full m-auto md:m-0 transition-all duration-300 hover:scale-105 hover:bg-primary-color"
        >
          confirmation
        </button>
      </div>
      <button className="font-normal text-black text-lg m-auto bg-zinc-100 py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:bg-primary-color">
        log out
      </button>
    </form>
  );
});

export default SellerSettingsPage;
