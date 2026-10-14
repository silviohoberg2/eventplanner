import { createRoot } from "react-dom/client";
import EventDemo from "./components/EventDemo.jsx";
import InteractionDemo from "./components/InteractionDemo.jsx";
import StateProblem from "./components/StateProblem.jsx";
import Counter from "./components/Counter.jsx";
import LikeButton from "./components/LikeButton.jsx";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  
  <LikeButton />
);