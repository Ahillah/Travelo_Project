
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";


const FilterDropdown = ({ title, options }) => {
 
    const [isOpen, setIsOpen] = useState(false);
 
    const [selectedValue, setSelectedValue] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false); 
        
        // **********************************************
        // استدعاء دالة لمعالجة الفلترة في المكون الأب
        //onFilterChange(title, option);
        // **********************************************
    };

    return (
        <div className="relative inline-block text-left">
        
            <button
                type="button"
                className="inline-flex justify-center items-center w-full rounded-full bg-gray-200 px-2 md:px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {/* عرض القيمة المختارة أو العنوان الافتراضي */}
                {selectedValue ? selectedValue : title} 
                <IoIosArrowDown className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* قائمة الخيارات المنسدلة */}
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;