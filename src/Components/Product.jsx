import React, { useEffect } from "react";
import Cards from "./Cards";
import { getProductsThunk } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import seoInfo from "../helmet.json";
import SeoHelmet from "../Helmet/SeoHelmet";

const Product = () => {
  const dispatch = useDispatch();
  const {
    data: product,
    isLoading,
    filteredDesc: filterProdDesc,
    filteredAsc: filterProdAsc,
    isDescending,
    isAscending,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <>
      <SeoHelmet
        title={seoInfo[0].title}
        content={seoInfo[0].content}
        href="/"
      />
      <div className="grid grid-cols-4 gap-2 mt-20">
        {isDescending && !isAscending
          ? filterProdDesc?.map((item, id) => (
              <Cards
                isLoading={isLoading}
                product={item}
                key={id}
                img={item.image}
                price={item.price}
                title={item.title}
              />
            ))
          : isAscending && !isDescending
          ? filterProdAsc?.map((item, id) => (
              <Cards
                isLoading={isLoading}
                product={item}
                key={id}
                img={item.image}
                price={item.price}
                title={item.title}
              />
            ))
          : product[0]?.map((item, id) => (
              <Cards
                isLoading={isLoading}
                product={item}
                key={id}
                img={item.image}
                price={item.price}
                title={item.title}
              />
            ))}
      </div>
    </>
  );
};

export default Product;
