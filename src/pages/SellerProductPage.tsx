import { memo } from "react";

const SellerProductPage = memo(() => {
  return (
    <form
      className="flex basis-4/5 flex-col gap-6 items-start justify-center bg-white rounded-lg p-4 drop-shadow-md max-w-[60rem] m-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <label
        htmlFor="Product-photo-uploader"
        className="font-normal text-black text-lg md:basis-1/2 flex gap-2 items-center md:flex-nowrap flex-wrap w-full"
      >
        Product photo :
        <p className="text-black font-normal text-lg bg-zinc-100 rounded-xl py-2 px-4 cursor-pointer">
          Add file
        </p>
        <input type="file" id="Product-photo-uploader" placeholder="Add file" className="" hidden />
      </label>
      <label
        htmlFor="Product-Name-input"
        className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
      >
        Product Name :
        <input
          type="text"
          id="Product-Name-input"
          className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
        />
      </label>
      <label
        htmlFor="About-product-input"
        className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
      >
        About product :
        <input
          type="text"
          id="About-product-input"
          className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
        />
      </label>
      <label
        htmlFor="price-product-input"
        className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
      >
        price product :
        <input
          type="number"
          id="price-product-input"
          className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
        />
      </label>
      <label
        htmlFor="Product-discount-input"
        className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
      >
        Product discount :
        <input
          type="number"
          id="Product-discount-input"
          className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
        />
      </label>
      <label
        htmlFor="Product-brand-input"
        className="font-normal text-black text-lg md:basis-1/2 flex items-center gap-2 text-nowrap md:flex-nowrap flex-wrap w-full"
      >
        Product brand :
        <input
          type="text"
          id="Product-brand-input"
          className="outline-none w-full h-full p-2 bg-zinc-100 rounded-lg"
        />
      </label>
      <button
        type="submit"
        className="basis-1/2 font-normal text-black text-lg bg-zinc-100 py-2 px-6 rounded-full m-auto md:m-0 transition-all duration-300 hover:scale-105 hover:bg-primary-color"
      >
        confirmation
      </button>
    </form>
  );
});

export default SellerProductPage;
