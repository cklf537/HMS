import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import TopHeader from "./components/header/topheader";
const App = () => {
  const headerMenu = useContext(AppContext);
  return (
    <>
      <AppContext.Provider value={headerMenu}>
        <p>Main App</p>
        <TopHeader />
      </AppContext.Provider>
    </>
  );
};

export default App;
