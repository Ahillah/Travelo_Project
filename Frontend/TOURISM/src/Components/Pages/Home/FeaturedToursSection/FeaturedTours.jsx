import FeaturedCards from "./FeaturedCards"
import FiltersBar from "./FiltersBar"
import journy1 from "../../../../assets/images/journey1.png.png";
import journy2 from "../../../../assets/images/journey2.png.png";
import journy3 from "../../../../assets/images/journey3.png.png";
import journy4 from "../../../../assets/images/journy4.png";

const FeaturedTours = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto my-8">
        <div>
            <h2 className="text-2xl lg:text-5xl font-bold main-font"> Our Featured Tours</h2>
            <p className="my-5 md:my-10 text-gray-500  md:text-[20px]">Discover our top-rated destinations, handpicked based on customer reviews.</p>
        </div>

        <div>
            <FiltersBar/>
        </div>
      </div>

      <div className="w-[90%] mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeaturedCards Imgsrc={journy1}/>
        <FeaturedCards Imgsrc={journy2}/>
        <FeaturedCards Imgsrc={journy3}/>
     
        
      </div>
    </>
  )
}

export default FeaturedTours
