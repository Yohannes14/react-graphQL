import React, { useState } from "react";


const Search = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button>Search</button>
    </div>
  );
};

export default Search;
