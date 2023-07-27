import "./styles.css";
import TopNavigation from "./components/navbar";
import BookList from "./components/bookList";

import { ThemeContext } from "./context/AppContext";
import { useState, useEffect } from "react";

export default function App() {
  const [lightThem, setLightThem] = useState("");
  const [darkThem, setDarkThem] = useState("");
  useEffect(() => {
    setLightThem("#ccc");
    setDarkThem("#ddd");
  }, []);

  const appThems = { lightThem, darkThem };

  return (
    <>
      <ThemeContext.Provider value={{ ...appThems }}>
        <TopNavigation />
        <BookList />
      </ThemeContext.Provider>
    </>
  );
}
