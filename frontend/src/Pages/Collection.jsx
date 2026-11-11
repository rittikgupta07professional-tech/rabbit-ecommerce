import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from '../Components/Products/ProductGrid';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  // Add event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch products
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=14",
            },
          ],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=17",
            },
          ],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=16",
            },
          ],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [
            {
              url: "https://picsum.photos/500/500?random=19",
            },
          ],
        },
      ];

      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">

      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Option */}
        <SortOptions/>
        {/* Product Grid */}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default Collection;