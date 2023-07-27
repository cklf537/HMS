import { useEffect, useState } from "react";
import Header from "./components/header/header";

interface User {
  // [x: string]: any;
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export default function App() {
  const [AppChildren, setAppChildren] = useState<User>({});

  const fetchDefaultData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const user: User = await response.json();
    return user;
  };

  useEffect(() => {
    fetchDefaultData().then((res) => {
      setAppChildren(res);
    });
  }, []);
  console.log("array", AppChildren);
  return (
    <>
      <Header />
      {/* {AppChildren.map()} */}
      {/* {AppChildren &&
        AppChildren.map((item: User) => {
          return <p key={item.id}>{item.title}</p>;
        })} */}
    </>
  );
}
