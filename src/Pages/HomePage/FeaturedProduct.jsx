import { useEffect, useState } from "react";
import { getAllProductData } from "../../utils/productApi";
import ShopCard from "../../Components/Common/ShopCard";
import SectionWrapper from "../../Components/Common/SectionWrapper";

const FeaturedProduct = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [allProduct, setAllProduct] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);
    const products = await getAllProductData();
    setAllProduct(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("allProduct", allProduct);
  return (
    <SectionWrapper
      subHeaderTitle={"Exclusives"}
      HeaderTitle={"Featured Products"}>
      <div className="px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 px-0">
          {allProduct?.map((e, i) => (
            <ShopCard product={e} key={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedProduct;
