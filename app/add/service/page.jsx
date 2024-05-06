import React from "react";
import { FaPlus } from "react-icons/fa6";
import "./style.css";

const page = () => {
  return (
    <div className="new_form_container">
      <form>
        <h1>Add New Service</h1>
        <hr />
        <div className="horizontal_inputs_container">
          <div>
            <label htmlFor="">Service:</label>
            <input placeholder="In stock" type="text" name="" id="" />
            <p>What service is that?</p>
          </div>
          <div>
            <label htmlFor="">Service Description:</label>
            <textarea placeholder="Service Description..." name="" id="" />
            <p>Description of the service</p>
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
          Add New Service
        </button>
      </form>
    </div>
  );
};

export default page;
