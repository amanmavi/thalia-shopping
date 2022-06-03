import React from "react";

const Filter = ({ filter, setFilter }) => {
  const filters = [
    {
      label: "Color",
      category: "color",
      values: ["orange", "blue", "black", "white", "pink", "red"],
    },
    {
      label: "Brand",
      category: "prodBrand",
      values: [
        "LEVIS",
        "MARC N SPENCER",
        "HRX",
        "BLUEBERRY",
        "G-STAR",
        "CHANNEL",
        "ADIDAS",
        "LIVI",
        "GUCCI",
        "NAVI",
        "NYKA",
      ],
    },
  ];

  function handleChange(category, value, checked) {
    let filterOfCategory = filter[category];
    if (!filterOfCategory.includes(value) && checked) {
      filterOfCategory.push(value);
    }
    if (filterOfCategory.includes(value) && !checked) {
      filterOfCategory = filterOfCategory.filter((_) => {
        return _ !== value;
      });
    }
    let temp = { ...filter };
    temp[category] = filterOfCategory;
    setFilter(temp);
  }

  return (
    <div className="space-y-6  p-8">
      {filters.map((filterCategory) => {
        return (
          <div key={filterCategory.category}>
            <p className="font-semibold mb-4">{filterCategory.label}</p>
            {filterCategory.values.map((filterValue) => {
              return (
                <div className="flex gap-8 mb-2" key={filterValue}>
                  <input
                    type="checkbox"
                    value={filterValue}
                    className="h-6 w-6"
                    onChange={(e) => {
                      handleChange(
                        filterCategory.category,
                        filterValue,
                        e.target.checked
                      );
                    }}
                  />
                  <p>{filterValue}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
