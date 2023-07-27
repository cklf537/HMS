import { useContext } from "react";
import { ThemeContext } from "../context/AppContext";
export default function BookList() {
  const lightThem = useContext(ThemeContext);
  // console.log(lightThem.lightThem);
  return (
    <div className="booklist">
      <ul>
        <li>{lightThem.lightThem}</li>
        <li>Book 2</li>
        <li>Book 3</li>
      </ul>
    </div>
  );
}
