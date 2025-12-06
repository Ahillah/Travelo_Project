import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const FullSearchWidget = () => {
  
    const [searchQuery, setSearchQuery] = useState('');
    
   
    const primaryColor = 'bg-teal-500';
    const primaryHover = 'hover:bg-teal-600'; 

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        console.log("Starting Search for:", searchQuery);
        
        // ****************************************************
        
        //  استدعاء دالة API لجلب بيانات الفنادق باستخدام searchQuery
        // ****************************************************
    };

    return (
      
        <div className="absolute top-[65vh] left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl mx-auto z-10">
            
          
            <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-full shadow-2xl shadow-gray-400/50 p-1 md:p-2">
                
              
                <input
                    type="text"
                    name="hotelName"
                    placeholder="Enter hotel name"
                    value={searchQuery}
                    onChange={handleInputChange}
               
                    className="grow p-3 md:p-4 text-gray-700 bg-transparent focus:outline-none placeholder-gray-400 text-lg ml-3 md:ml-4"
                />

               
                <button 
                    type="submit" 
                    className={`${primaryColor} ${primaryHover} text-white font-bold px-4  md:px-6 md:py-3 rounded-full transition duration-300 flex items-center mr-1`}
                >
                    <IoIosSearch className="text-xl mr-2" /> Search
                </button>
            </form>
        </div>
    );
};

export default FullSearchWidget;