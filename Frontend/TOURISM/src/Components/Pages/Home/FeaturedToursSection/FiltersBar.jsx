

import FilterDropdown from './FilterDropdown';

const FiltersBar = () => {
    
  
    const categoryOptions = ['Hotels', 'Flights', 'Tours', 'Rental'];
    const durationOptions = ['1-3 Days', '4-7 Days', 'More than 7'];
    const reviewOptions = ['5 Stars', '4 Stars & Up', '3 Stars & Up'];
    const priceOptions = ['0 - 100$', '100 - 500$', '500$+'];

    const handleFilterChange = (filterName, value) => {
        console.log(`Filter changed: ${filterName} to ${value}`);
        // هنا يتم تحديث حالة الفلترة الرئيسية لجلب البيانات الجديدة
    };

    return (
        <div className="flex gap-2 p-2 md:gap-4 md:p-4">
            <FilterDropdown 
                title="Categories" 
                options={categoryOptions}
                onFilterChange={handleFilterChange} 
            />
            
            <FilterDropdown 
                title="Duration" 
                options={durationOptions}
                onFilterChange={handleFilterChange} 
            />

            <FilterDropdown 
                title="Review / Rating" 
                options={reviewOptions}
                onFilterChange={handleFilterChange} 
            />

            <FilterDropdown 
                title="Price range" 
                options={priceOptions}
                onFilterChange={handleFilterChange} 
            />
        </div>
    );
};

export default FiltersBar;