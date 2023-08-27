import { createContext } from "react";

interface HeaderItems {
  title: string;
  value: string;
  icon?: string;
}

const headerMenu: HeaderItems[] = [
  { title: "Subjects", value: "about", icon: "" },
  { title: "Tutors", value: "tutors", icon: ""  },
  { title: "Schedule", value: "schedule", icon: "" },
  { title: "Online-tutoring", value: "online-tutoring", icon: "" },
  { title: "Live-Classes", value: "live-classes", icon: "" },
  { title: "e-books", value: "ebooks", icon: "" },
  { title: "Feedback", value: "feedback", icon: "" },
  { title: "Contact Us", value: "contact", icon: "" }
];

const AppContext = createContext(headerMenu);
export { AppContext, HeaderItems };
