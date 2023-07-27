import { createContext } from "react";

interface headerItems {
  title: string;
  value: string;
}

const headerMenu: headerItems[] = [
  { title: "About", value: "about" },
  { title: "Products", value: "products" },
  { title: "Projects", value: "projects" },
  { title: "Contact", value: "contatc" }
];

const AppContext = createContext(headerMenu);
export { AppContext };
