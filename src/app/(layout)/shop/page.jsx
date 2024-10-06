import Filtr from "@/components/filtr/Filtr";
import Shops from "@/components/shops/Shops";
import React from "react";

const Shop = () => {
  return (
    <div>
      <Shops title={"Shop"} home={"Shop"} />
      <Filtr />
    </div>
  );
};

export default Shop;
