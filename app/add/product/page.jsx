import React from "react";
import "./style.css";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div className="new_form_container">
      <form>
        <h1>Add new product</h1>
        <hr />
        <div className="horizontal_inputs_container">
          <div>
            <label htmlFor="">Product Name:</label>
            <input placeholder="Product name" type="text" name="" id="" />
            <p>Enter a valid product name here</p>
          </div>
          <div>
            <label htmlFor="">Product Price:</label>
            <input placeholder="Price" type="number" name="" id="" />
            <p>Enter a valid number here</p>
          </div>
        </div>
        <div className="horizontal_inputs_container">
          <div>
            <label htmlFor="">In Stock:</label>
            <input placeholder="In stock" type="number" name="" id="" />
            <p>How many of this product is in stock?</p>
          </div>
          <div>
            <label htmlFor="">Product Description:</label>
            <textarea
              placeholder="Product Description..."
              type="number"
              name=""
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

export default page;
