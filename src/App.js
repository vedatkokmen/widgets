import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia.",
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quia.",
  },
];

const options = [
  {
    label: "Green dolor sit amet.",
    value: "green",
  },
  {
    label: "Red ipsum dolor amet.",
    value: "red",
  },
  {
    label: "Blue lorem ipsum dolor.",
    value: "blue",
  },
];

const App = () => {
  return (
    <div className="ui container">
      <Dropdown options={options} />
    </div>
  );
};

export default App;
