import Logo from "../../../assets/icons/GG.png";
import visa from "../../../assets/images/visa-logo.png";
import DinersClub from "../../../assets/images/DinersClub.png";
import Mastercard from "../../../assets/images/Mastercard.png";
import GooglePay from "../../../assets/images/GooglePay.png";
import ApplePay from "../../../assets/images/ApplePay.png";
import Stripe from "../../../assets/images/Stripe.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="min-h-96 bg-[#27A599] text-white p-5 main-font">
     <div className="w-[90%] mx-auto">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 ">
        <div>
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-medium sm:text-4xl lg:text-5xl logo-font">
              Travel
            </h1>
            <img className="w-[50px] h-[46px]" src={Logo} />
          </div>
          <p className="main-font mt-10 text-justify text-sm font-bold">
            We help you find and book the perfect stay from cozy guesthouses to
            top hotels-with ease, trust, and the best deals.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-400">Explore</h2>
          <ul>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Trending Destinations
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300  text-sm leading-8">
                Summer Hotspots
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Winter Getaways
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Weekend Deals
              </Link>
            </li>{" "}
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Family-Friendly Stays
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-400">
            Property Types
          </h2>
          <ul>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Hotels
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300  text-sm leading-8">
                Apartments
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300  text-sm leading-8">
                Villas
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Cabins
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Glamping
              </Link>
            </li>{" "}
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Domes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-400">Support</h2>
          <ul>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Help Centre
              </Link>
            </li>

            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300  text-sm leading-8">
                Live Chat Support
              </Link>
            </li>

            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="font-semibold hover:text-gray-400 transition-colors duration-300 text-sm leading-8">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-5 text-gray-400">
            Get In Touch{" "}
          </h2>
          <p className="text-sm font-semibold leading-8"> +1 (800) 123‑456</p>
          <p className="text-sm font-semibold leading-8">support@tripto.com</p>

          <ul className="flex gap-5 mt-5">
            <li className="bg-gray-400 p-1 rounded-sm hover:bg-gray-500">
              <FaFacebookF />
            </li>

            <li className="bg-gray-400 p-1 rounded-sm hover:bg-gray-500">
              <FaInstagram />
            </li>
            <li className="bg-gray-400 p-1 rounded-sm hover:bg-gray-500">
              <FaYoutube />
            </li>
            <li className="bg-gray-400 p-1 rounded-sm hover:bg-gray-500">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-5"/>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm font-semibold mb-5">© 2025 TripTo. All rights reserved.</p>
        <div className="flex  items-center justify-between gap-2 md:gap-5 flex-wrap order-1 md:order-2">
         <img src={visa} alt="visa" className="block  bg-gray-300 p-2 rounded-sm w-10 h-8"/>
         <img src={DinersClub} alt="DinersClub" className="block  bg-gray-300 p-2 rounded-sm w-10 h-8"/>
         <img src={Mastercard} alt="Mastercard" className="block  bg-gray-300 p-2 rounded-sm w-10 h-8"/>
         <img src={GooglePay} alt="GooglePay" className="block  bg-gray-300 p-2 rounded-sm w-10 h-8"/>
         <img src={ApplePay} alt="ApplePay"className="block  bg-gray-300 p-2 rounded-sm w-10 h-8" />
         <img src={Stripe} alt="Stripe" className="block  bg-gray-300 p-2 rounded-sm w-10 h-8"/>
      
        </div>
      </div>

     </div>
    </footer>
  );
};

export default Footer;
