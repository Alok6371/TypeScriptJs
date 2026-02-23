import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContent";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebr = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetCategoies = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");

        const data: FetchResponse = await response.json();
        // console.log(data.products);

        const uniqueCategory = Array.from(
          new Set(data.products.map((product) => product.category)),
        );

        // console.log(uniqueCategory);

        setCategories(uniqueCategory);
      } catch (err) {
        // console.error("Error Fetching Product", err);
      }
    };
    fetCategoies();
  });
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilter = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-5 h-screen">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-1 text-base py-3 sm:mb-0 w-full "
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 text-base py-3 mr-2 w-[40%] px-1 mb-4 "
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 text-base py-3 mr-2 w-[50%] px-1 mb-4 "
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Category Section */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-semibold mb-3">Category</h2>
            {categories.map((category, index) => (
              <label key={index} className="block mb-2 text-base">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  onChange={() => handleRadioChangeCategory(category)}
                  className="mr-2 w-[16px] h-[16px]"
                  checked={selectedCategory === category}
                />
                {category.toLocaleUpperCase()}
              </label>
            ))}
          </div>
        </section>
        {/* keyword Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3"> Keyword</h2>
          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-2 px-1  py-2 w-full text-left border rounded text-base hover:bg-gray-400 hover:text-white"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleResetFilter}
          className="w-full text-xl px-2 mb-[4rem] bg-black text-white rounded mt-5"
        >
          {" "}
          ResetFilter
        </button>
      </section>
    </div>
  );
};

export default Sidebr;
