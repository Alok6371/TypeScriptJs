import { useEffect, useState } from "react";
import { useFilter } from "./FilterContent";
import { Tally3 } from "lucide-react";
import axios from "axios";

const MainContent = () => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const itemsPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPage}&skip=${
      (currentPage - 1) * itemsPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, [currentPage, keyword]);

  const getFilterProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    console.log("Filtered Products:", filteredProducts);

    return filteredProducts;
  };

  const filteredProducts = getFilterProducts();

  return (
    <div>
      <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
        <div className="mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <button className="relative px-4 py-2 rounded-full flex items-center">
              <Tally3 className="mr-2" />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toLowerCase() + filter.slice(1)}
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white border-gray-300 rounded mt-2 w-full sm:w-40">
                <button
                  onClick={() => setFilter("cheap")}
                  className="block px-4 py-3 w-full text-left hover:bg-gray-200"
                >
                  Cheap
                </button>

                <button
                  onClick={() => setFilter("expensive")}
                  className="block px-4 py-3 w-full text-left hover:bg-gray-200"
                >
                  Expensive
                </button>

                <button
                  onClick={() => setFilter("popular")}
                  className="block px-4 py-3 w-full text-left hover:bg-gray-200"
                >
                  Popular
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border p-3 rounded">
                <p>{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;