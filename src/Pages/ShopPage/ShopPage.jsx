import { useEffect, useState } from "react";
import CommonHero from "../../Components/Common/CommonHero";
import { getAllProductData } from "../../utils/productApi";
import ShopCard from "../../Components/Common/ShopCard";
import { IoMdSearch } from "react-icons/io";
import { Slider } from "antd";

const ShopPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [allProduct, setAllProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const fetchProducts = async () => {
    setLoading(true);
    const products = await getAllProductData();
    setAllProduct(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const uniqueCategoryNames = [
    ...new Set(allProduct.map((p) => p.product_category?.name)),
  ];

  const filteredProducts = allProduct.filter((product) => {
    const matchesName = product.product_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.product_category?.name === selectedCategory
      : true;
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesName && matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div>
      <CommonHero type={"shop"} title={"Our Shop"} />
      <div className="max-w-6xl mx-auto mt-10">
        {/* Category Filter Buttons */}

        <div className="grid grid-cols-3 gap-6 my-20">
          {/* Filter Sidebar */}
          <div className="px-5 space-y-4">
            <label>Search Product by Product Name:</label>
            <div className="relative">
              <IoMdSearch className="text-[#C2A74E] font-medium text-xl absolute right-3 top-3" />
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <label>Filter By Brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-3 py-2 border rounded">
              <option value="">All Brands</option>
              {[...new Set(allProduct.map((p) => p.brand))].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
            <label>Filter by Category</label>
            <div className="flex justify-normal items-center gap-3 flex-wrap mb-6">
              <div
                onClick={() => setSelectedCategory("")}
                className={`border px-3 py-1 cursor-pointer rounded-sm ${
                  selectedCategory === "" ? "bg-red-500 text-white" : ""
                }`}>
                All
              </div>
              {uniqueCategoryNames.map((cat, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`border px-3 py-1 cursor-pointer rounded-sm ${
                    selectedCategory === cat ? "bg-red-500 text-white" : ""
                  }`}>
                  {cat}
                </div>
              ))}
            </div>

            <label className="mt-5">Filter By Product Price:</label>
            <Slider
              range={{ draggableTrack: true }}
              value={priceRange}
              onChange={(value) => setPriceRange(value)}
              max={Math.max(...allProduct.map((p) => p.price || 0), 100)}
            />
            <p className="text-sm text-gray-500">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>

          {/* Product Grid */}
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-5">
              {filteredProducts.length ? (
                filteredProducts.map((e, i) => <ShopCard key={i} product={e} />)
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
