import "../assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";
import NoFirstRender from "@/design-systems/Atoms/NoFirstRender";
import Footer from "@/design-systems/Organisms/Footer";
import Header from "@/design-systems/Organisms/Header";
import { Context } from "@/context";
import backgroundImage from "../assets/image/bg-light.png";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alto | Home",
  description: "Alto Data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="website" name="og:type" property="og:type" />
        <meta content="summary_large_image" name="twitter:card" />
      </head>
      <body
        className={`text-white bg-[#181c27] bg-blend-multiply relative w-full h-full bg-no-repeat bg-center bg-cover bg-fixed ${poppins.className}`}
        // style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {/* <ContextProvider> */}
        <Context>
          <NoFirstRender>
            <div className="m-0 min-h-screen overflow-x-hidden p-0 text-center">
              <Header />
              <div className="mb-24 mt-14 min-h-[calc(100vh-230px)] w-screen md:min-h-[calc(100vh-159px)] md:pt-16">
                {children}
              </div>
              <Footer />
            </div>
            <ToastContainer
             position="top-right"
             autoClose={2000}
             toastClassName={'bg-[#1A202C]'}
             hideProgressBar
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"
             transition={Bounce}
            />
          </NoFirstRender>
        </Context>
        {/* </ContextProvider> */}
      </body>
    </html>
  );
}