import Testimonial1 from "../../../../assets/images/testimonial.png.png";
import Testimonial2 from "../../../../assets/images/testimonial2.png.png";
import Testimonial3 from "../../../../assets/images/testimonial3.png.png";
import ReviewImg from "../../../../assets/images/reviewImage.png";
import author1 from "../../../../assets/images/author.png.png";
import author2 from "../../../../assets/images/author2.png.png";
import { FaRegStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="bg-teal-100 ">
      <div className="w-[90%] mx-auto md:h-[500px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 gap-6 my-12">
          <div className="my-6 ">
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={Testimonial1} alt="" />
                <img src={Testimonial2} alt="" />
                <img src={Testimonial3} alt="" />
                <span className="text-sm font-medium">Testimonial</span>
              </div>
              <img src={ReviewImg} alt="" className="w-40" />
            </div>

            <h3 className="text-2xl md:text-5xl font-extrabold my-5">
              What our clients are saying about us?
            </h3>
            <p className="text-[18px] font-medium text-[#737373]">
              Discover how you can offset your adventure's carbon emissions and
              support the sustainable initiatives practiced by our operators
              worldwide.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* First Testimonial */}
            <div className="w-96 h-96 md:h-80 bg-[#E4E6E8] rounded-2xl">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center ">
                  <img src={author1} alt="" className="w-16 mt-4 ml-4" />
                  <div>
                    <h4 className="text-lg font-bold ml-4 mt-2">
                      Sara Mohamed
                    </h4>
                    <p className="text-sm font-medium ml-4 text-[#737373]">
                      Jakatar
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                </div>
              </div>

              <p className="text-[#737373] text-sm font-normal p-5 overflow-hidden">
                I've been using the hotel booking system for several years now,
                and it's become my go-to platform for planning my trips. The
                interface is user-friendly, and I appreciate the detailed
                information and real-time availability of hotels.
              </p>
            </div>

            {/* second Testimonial */}
            <div className="w-96 h-96  md:h-80 bg-[#E4E6E8] rounded-2xl">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center ">
                  <img src={author2} alt="" className="w-16 mt-4 ml-4" />
                  <div>
                    <h4 className="text-lg font-bold ml-4 mt-2">
                     Atend John
                    </h4>
                    <p className="text-sm font-medium ml-4 text-[#737373]">
                   Califonia
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                  <FaRegStar className="text-yellow-600 " />
                </div>
              </div>

              <p className="text-[#737373] text-sm font-normal p-5 overflow-hidden">
                I had a last-minute business trip, and the hotel booking system
                came to the rescue. I was able to find a high-quality hotel in
                no time and even got a great deal on the room. The confirmation
                process was straightforward, and I received all the necessary
                information promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
