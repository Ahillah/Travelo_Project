import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Suspense } from "react";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main>
         {/* Suspense component to show a fallback loader while lazy-loaded components are being fetched */}
        <Suspense
          fallback={
            <div
              className="animate-spin 
                          rounded-full 
                          h-12 w-12 
                          border-4 
                          border-t-transparent 
                       border-blue-500"
            ></div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
