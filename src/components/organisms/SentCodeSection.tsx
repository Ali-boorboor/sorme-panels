import { memo } from "react";

const SentCodeSection = memo((props: any) => {
  return (
    <form
      className={`bg-primary-color py-4 px-6 rounded-2xl flex flex-col gap-4 max-w-md m-auto w-full h-96 ${
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
        <h1 className="font-semibold text-white text-2xl pl-2">{props.title}</h1>
        <img
          src="/images/png/sorme-logo.png"
          alt="sorme-logo"
          className="w-24 h-8 object-contain invert"
        />
      </section>
      <p className="font-semibold text-white text-xl text-left">Enter the code sent</p>
      <section className="flex gap-4 justify-between items-center">
        <label className="w-20 h-20 rounded-lg overflow-hidden relative after:absolute after:w-16 after:h-1 after:border-b-2 after:left-1/2 after:-translate-x-1/2 after:border-zinc-400 after:bottom-4">
          <input
            type="text"
            className="w-full h-full p-2 outline-none font-semibold text-5xl text-primary-color text-center"
          />
        </label>
        <label className="w-20 h-20 rounded-lg overflow-hidden relative after:absolute after:w-16 after:h-1 after:border-b-2 after:left-1/2 after:-translate-x-1/2 after:border-zinc-400 after:bottom-4">
          <input
            type="text"
            className="w-full h-full p-2 outline-none font-semibold text-5xl text-primary-color text-center"
          />
        </label>
        <label className="w-20 h-20 rounded-lg overflow-hidden relative after:absolute after:w-16 after:h-1 after:border-b-2 after:left-1/2 after:-translate-x-1/2 after:border-zinc-400 after:bottom-4">
          <input
            type="text"
            className="w-full h-full p-2 outline-none font-semibold text-5xl text-primary-color text-center"
          />
        </label>
        <label className="w-20 h-20 rounded-lg overflow-hidden relative after:absolute after:w-16 after:h-1 after:border-b-2 after:left-1/2 after:-translate-x-1/2 after:border-zinc-400 after:bottom-4">
          <input
            type="text"
            className="w-full h-full p-2 outline-none font-semibold text-5xl text-primary-color text-center"
          />
        </label>
      </section>
      <p className="font-semibold text-white text-xl text-left">{`Until resend 1:30`}</p>
      <button
        type="submit"
        className="text-white font-bold text-lg transition-all duration-300 hover:scale-110"
      >
        Confirm
      </button>
    </form>
  );
});

export default SentCodeSection;
