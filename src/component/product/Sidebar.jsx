

"use client";

import { useState } from "react";
import { FiShoppingCart, FiHeart, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/arrival.png";

const products = [
  { id: 1, name: "Eco Kitchen Degreaser", price: 1299, image: Image1, category: "Kitchen Cleaners", rating: 5 },
  { id: 2, name: "Sparkling Bathroom Spray", price: 950, image: Image1, category: "Bathroom Cleaners", rating: 4 },
  { id: 3, name: "Hardwood Floor Polish", price: 1500, image: Image1, category: "Floor Cleaners", rating: 5 },
  { id: 4, name: "Streak-Free Glass Cleaner", price: 700, image: Image1, category: "Glass Cleaners", rating: 3 },
  { id: 5, name: "Gentle Laundry Detergent", price: 1800, image: Image1, category: "Laundry Products", rating: 4 },
  { id: 6, name: "All-Purpose Disinfectant", price: 1100, image: Image1, category: "Kitchen Cleaners", rating: 5 },
  { id: 7, name: "Toilet Bowl Power Gel", price: 800, image: Image1, category: "Bathroom Cleaners", rating: 3 },
  { id: 8, name: "Tile & Grout Cleaner", price: 1350, image: Image1, category: "Floor Cleaners", rating: 4 },
  { id: 9, name: "Window & Mirror Shine", price: 650, image: Image1, category: "Glass Cleaners", rating: 5 },
  { id: 10, name: "Fabric Softener Concentrate", price: 1600, image: Image1, category: "Laundry Products", rating: 4 },
];

const categories = [
  "All Products",
  "Kitchen Cleaners",
  "Bathroom Cleaners",
  "Floor Cleaners",
  "Glass Cleaners",
  "Laundry Products",
];

const ratings = [
  { value: 5, label: "5 Star" },
  { value: 4, label: "4 Star & Up" },
  { value: 3, label: "3 Star & Up" },
];

export default function Sidebar() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["All Products"]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [appliedMinPrice, setAppliedMinPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

  const toggleCategory = (category) => {
    if (category === "All Products") {
      setSelectedCategories(["All Products"]);
    } else {
      const updated = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories.filter((c) => c !== "All Products"), category];

      setSelectedCategories(updated.length ? updated : ["All Products"]);
    }
  };

  const toggleRating = (rating) => {
    setSelectedRating(selectedRating === rating ? null : rating);
  };

  const handleApplyPriceFilter = () => {
    setAppliedMinPrice(minPrice);
    setAppliedMaxPrice(maxPrice);
  };

  const handleClearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategories(["All Products"]);
    setSelectedRating(null);
    setAppliedMinPrice("");
    setAppliedMaxPrice("");
    setIsSidebarOpen(false);
  };

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = selectedCategories.includes("All Products") || selectedCategories.includes(product.category);
    const min = parseFloat(appliedMinPrice);
    const max = parseFloat(appliedMaxPrice);
    const isPriceMatch = (isNaN(min) || product.price >= min) && (isNaN(max) || product.price <= max);
    const isRatingMatch = selectedRating === null || product.rating >= selectedRating;
    return isCategoryMatch && isPriceMatch && isRatingMatch;
  });

  return (
    <div className="bg-white min-h-[120vh] pt-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-6">
        <h2 className="text-2xl font-bold text-black">All Products</h2>
        <div className="text-sm text-black mt-1">
          <span>Home</span> / <span>All Products</span>
        </div>

        <button
          className="md:hidden mt-4 px-4 py-2 bg-[#393185] text-white rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className={`${isSidebarOpen ? "block" : "hidden"} md:block w-full md:w-64 shrink-0`}>
            <div className="border rounded-md p-4 space-y-6" style={{ borderColor: "#B4B4FF" }}>
              {/* Categories */}
              <div>
                <h2 className="font-semibold mb-3 text-black">Categories</h2>
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 mb-2 cursor-pointer text-black text-sm">
                    <div
                      className={`w-4 h-4 border rounded-sm flex items-center justify-center transition ${selectedCategories.includes(category) ? "bg-[#393185] text-white" : "bg-white"}`}
                      style={{ borderColor: "#B4B4FF" }}
                      onClick={() => toggleCategory(category)}
                    >
                      {selectedCategories.includes(category) && <FiCheck size={12} />}
                    </div>
                    <span>{category}</span>
                  </label>
                ))}
              </div>

              {/* Price Filter */}
              <div>
                <h2 className="font-semibold mb-3 text-black">Price Range</h2>
                <div className="flex gap-2 mb-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full border rounded-md px-2 py-1 text-sm text-black bg-white focus:ring-2 focus:ring-[#393185] focus:border-transparent"
                    style={{ borderColor: "#B4B4FF" }}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full border rounded-md px-2 py-1 text-sm text-black bg-white focus:ring-2 focus:ring-[#393185] focus:border-transparent"
                    style={{ borderColor: "#B4B4FF" }}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleApplyPriceFilter}
                    className="flex-1 bg-[#393185] text-white py-2 rounded-md text-sm hover:bg-[#2e2d73] transition"
                  >
                    Apply
                  </button>
                  <button
                    onClick={handleClearFilters}
                    className="flex-1 bg-gray-300 text-black py-2 rounded-md text-sm hover:bg-gray-400 transition"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Ratings */}
              <div>
                <h2 className="font-semibold mb-3 text-black">Rating</h2>
                {ratings.map((rating) => (
                  <label key={rating.value} className="flex items-center gap-2 mb-2 cursor-pointer text-black text-sm">
                    <div
                      className={`w-4 h-4 border rounded-sm flex items-center justify-center transition ${selectedRating === rating.value ? "bg-[#393185] text-white" : "bg-white"}`}
                      style={{ borderColor: "#B4B4FF" }}
                      onClick={() => toggleRating(rating.value)}
                    >
                      {selectedRating === rating.value && <FiCheck size={12} />}
                    </div>
                    <span className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < rating.value ? "text-[#393185]" : "text-gray-300"}>★</span>
                      ))}
                      <span className="ml-1 text-gray-500">{rating.label}</span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ scale: 0.94 }}
                    className="group border rounded-md overflow-hidden relative bg-white max-w-[280px] w-full shadow-sm hover:shadow-md transition"
                    style={{ borderColor: "#B4B4FF" }}
                  >
                    <div className="relative w-full h-70 bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:brightness-75 transition"
                      />
                      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
                          <FiHeart className="text-white w-4 h-4" />
                        </button>
                        <button className="bg-[#393185] w-9 h-9 flex items-center justify-center rounded-full">
                          <FiShoppingCart className="text-white w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm text-black">{product.name}</h3>
                      <p className="text-sm mt-1 text-black">₹{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-600 mt-8 text-lg">
                No products found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

