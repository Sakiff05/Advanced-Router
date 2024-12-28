import React, { createContext, useState } from "react";

export const searchContext = createContext();
export default function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const value = {
    search,
    setSearch,
  };

  return (
    <searchContext.Provider value={value}>{children}</searchContext.Provider>
  );
}
