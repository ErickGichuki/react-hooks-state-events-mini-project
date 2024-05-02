import React from "react";

function CategoryFilter({ categories }) {
  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
        key={category}
        onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
