"use client";
import React, { useContext, useState } from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa6";
import RequestLoading from "@/loaders/RequestLoading";
import { MainContext } from "@/context/Main";

const Page = () => {
  const [productToAdd, setProductToAdd] = useState({
    product_name: "",
    product_description: "",
    price: null,
    in_stock: null,
    product_image: "",
  });
  const { setLoading } = useContext(MainContext);
  const onTextChange = (e) => {
    const { name, value } = e.target;
    setProductToAdd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createNewProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const api = `https://reiki-crm.vercel.app/api/product/new`;

      const req = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToAdd),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="new_form_container">
      <form onChange={(e) => onTextChange(e)} onSubmit={createNewProduct}>
        <h1>Add new product</h1>
        <hr />
        <div className="horizontal_inputs_container">
          <div>
            <label htmlFor="">Product Name:</label>
            <input
              placeholder="Product name"
              type="text"
              name="product_name"
              id=""
            />
            <p>Enter a valid product name here</p>
          </div>
          <div>
            <label htmlFor="">Product Price:</label>
            <input placeholder="Price" type="number" name="price" id="" />
            <p>Enter a valid number here</p>
          </div>
        </div>
        <div className="horizontal_inputs_container">
          <div>
            <label htmlFor="">In Stock:</label>
            <input placeholder="In stock" type="number" name="in_stock" id="" />
            <p>How many of this product is in stock?</p>
          </div>
          <div>
            <label htmlFor="">Product Description:</label>
            <textarea
              placeholder="Product Description..."
              type="number"
              name="product_description"
              id=""
            />
            <p>Description of the product</p>
          </div>
        </div>
        <button
          style={{
            background: "#91C3F4",
            padding: "1rem 1.5rem",
            border: "none",
            width: "fit-content",
            fontWeight: 700,
            borderRadius: "8px",
            alignSelf: "center",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaPlus style={{ background: "transparent" }} />
          Add New Product
        </button>
      </form>
    </div>
  );
};

export default Page;
