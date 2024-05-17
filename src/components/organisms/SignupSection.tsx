import { memo } from "react";
import { Link } from "react-router-dom";

const SignupSection = memo((props: any) => {
  return (
    <form
      className={`bg-primary-color py-4 px-6 rounded-2xl flex flex-col gap-4 max-w-md m-auto w-full ${
        !props.isSeller && "pt-8"
      }`}
      onSubmit={(e) => e.preventDefault()}
    >
      {props.isSeller && (
        <p className="text-white flex gap-2 justify-end font-semibold text-lg items-center">
          Seller
          <img
            src="/images/png/seller-box-icon.png"
            alt="product-box"
            className="brightness-200 object-cover w-8 h-8"
          />
        </p>
      )}
      <section className="relative flex justify-between items-center">
        <img
          src="/images/png/active-link-icon.png"
          alt="active-icon"
          className="w-8 h-14 object-contain rotate-180 brightness-200 absolute right-full top-1/2 -translate-y-1/2"
        />
        <h1 className="font-semibold text-white text-2xl pl-2">Sign In / Sign Up</h1>
        <img
          src="/images/png/sorme-logo.png"
          alt="sorme-logo"
          className="w-24 h-8 object-contain invert"
        />
      </section>
      <section className="">
        <fieldset className="border-4 p-1 border-white rounded-md">
          <legend className="px-1 font-semibold text-white text-lg">username</legend>
          <label className="flex items-center justify-between px-1">
            <input
              type="text"
              className="bg-transparent w-full h-full text-white font-normal text-base placeholder:text-zinc-200 outline-none"
              placeholder="Ali"
            />
            <img
              src="/images/png/fill-user-icon.png"
              alt="input-icon"
              className="w-8 h-8 object-cover invert"
            />
          </label>
        </fieldset>
        <fieldset className="border-4 p-1 border-white rounded-md">
          <legend className="px-1 font-semibold text-white text-lg">Email Address</legend>
          <label className="flex items-center justify-between px-1">
            <input
              type="email"
              className="bg-transparent w-full h-full text-white font-normal text-base placeholder:text-zinc-200 outline-none"
              placeholder="Ali@gmail.com"
            />
            <img
              src="/images/png/fill-user-icon.png"
              alt="input-icon"
              className="w-8 h-8 object-cover invert"
            />
          </label>
        </fieldset>
        <fieldset className="border-4 p-1 border-white rounded-md">
          <legend className="px-1 font-semibold text-white text-lg">password</legend>
          <label className="flex items-center justify-between px-1">
            <input
              type="password"
              className="bg-transparent w-full h-full text-white font-normal text-base placeholder:text-zinc-200 outline-none"
              placeholder="********"
            />
            <img
              src="/images/png/hide-icon.png"
              alt="input-icon"
              className="w-8 h-8 object-cover invert"
            />
          </label>
        </fieldset>
      </section>
      <button
        type="submit"
        className="text-primary-color bg-white rounded-md p-4 font-bold text-lg hover:scale-105 transition-all duration-300"
      >
        Create an account
      </button>
      <Link
        to={props.signinLink}
        className="font-bold text-white border-t border-dashed pt-3 border-white text-lg text-center"
      >
        Sign In
      </Link>
    </form>
  );
});

export default SignupSection;
