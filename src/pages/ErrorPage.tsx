import { memo } from "react";
import { Link } from "react-router-dom";

const ErrorPage = memo(() => {
  return (
    <main className="w-full h-screen">
      <section className=" p-4 bg-[url('/images/png/error-page-bg-image.png')] bg-cover w-full h-full flex gap-4 flex-col justify-start items-center text-white">
        <h1 className="font-semibold text-8xl md:text-9xl">404</h1>
        <h2 className="font-semibold text-3xl md:text-7xl text-center">page not found</h2>
        <section className="flex gap-10 justify-center items-center mt-10">
          <Link
            to="/admin-panel/"
            className="transition-all duration-300 hover:bg-primary-color hover:text-white p-4 bg-white text-primary-color text-center rounded-full drop-shadow-md text-lg font-bold"
          >
            ADMIN - PANEL
          </Link>
          <Link
            to="/seller-panel/"
            className="transition-all duration-300 hover:bg-primary-color hover:text-white p-4 bg-white text-primary-color text-center rounded-full drop-shadow-md text-lg font-bold"
          >
            SELLER - PANEL
          </Link>
        </section>
      </section>
    </main>
  );
});

export default ErrorPage;
