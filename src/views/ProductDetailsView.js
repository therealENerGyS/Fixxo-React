import React from "react";
import { useParams } from 'react-router-dom' 
import SFooter from "../sections/SFooter";
import SMainMenu from "../sections/SMainMenu";

const ProductDetailsView = () => {
const params = useParams()

  return (
    <>
      <SMainMenu />
      <div className="_container">
        <h1>{params.title.replaceAll("-", " ")}</h1>
      </div>
      <SFooter />
    </>
  );
};

export default ProductDetailsView;
