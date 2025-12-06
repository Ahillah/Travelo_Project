import { motion } from "framer-motion";
import FullSearchWidget from "./FullSearchWidget";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-[80vh] hero-bg ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white w-full px-4"
      >
       
        <div className="flex flex-col gap-4 justify-center mt-6">
           <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-10 mx-auto max-w-4xl main-font">
          Unleash Your Wanderlust Book Your Next Journey
        </h1>
        <p className="text-lg md:text-2xl mb-8 mx-auto max-w-3xl text-gray-300  main-font font-extralight">
          Crafting Exceptional Journeys: Your Global Escape Planner. Unleash
          Your Wanderlust: Seamless Travel, Extraordinary Adventures
        </p>
        </div>

    
      </motion.div>
         <FullSearchWidget/>
    </section>
  );
};

export default Hero;
