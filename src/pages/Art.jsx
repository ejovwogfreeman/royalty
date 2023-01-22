import React from "react";
import { useState } from "react";

const Art = () => {
  //   const [input, setInput] = useState("");
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <select
          name=""
          id=""
          onChange={(e) =>
            setInput([...e.target.selectedOptions].map((opt) => opt.value))
          }
          style={{ width: "500px" }}
          multiple
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Art;
