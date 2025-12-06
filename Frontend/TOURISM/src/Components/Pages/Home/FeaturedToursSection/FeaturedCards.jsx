import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa";
const FeaturedCards = ({Imgsrc}) => {
  return (
    <motion.div className="border border-gray-400 rounded-md"
     initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    
    >

      <img
        src={Imgsrc}
        alt="Featured Tour"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <div className="p-5  main-font space-y-2 relative">

         <div className=" bg-white absolute bottom-52 right-5 md:bottom-44 rounded-t-2xl pt-2.5 px-2.5 text-sm flex items-center justify-between gap-5">
            <FaRegStar className="text-yellow-600 "/>
            <span className="text-sm text-[#737373]">4.96 (672 reviews)</span>
         </div>

        <h3 className="font-bold text-[20px] ">
          California Sunset/Twilight Boat Cruise
        </h3>
        <span className="text-sm text-[#737373] font-medium">
          2 days 3 nights - Family
        </span>

        <div className="flex  items-center justify-between py-4 mt-4 border-t border-gray-300  ">
           
          <p className="text-lg font-semibold">$1,499 <span className="text-sm text-[#737373] ">/ person</span></p>
          <button className="bg-teal-500  px-2.5 py-2 font-bold text-sm rounded-md hover:bg-teal-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCards;
