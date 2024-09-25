import React, { useState } from "react";
import { Post } from "./Post";

const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Optimizing Performance and Productivity with the Latest Tools and Technologies",
    author: "Mohammed Arshad",
    readingTime: "3 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },

  {
    id: 2,
    title: "Git + Bit: components",
    subtitle:
      "Keeping Git Branches and bit lanes in sync for seamless development",
    author: "Ashan fernando",
    readingTime: "6 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },

  {
    id: 3,
    title: "Average Manager Vs. Great Manager",
    subtitle:
      "Optimizing Performance and Productivity with the Latest Tools and Technologies",
    author: "Julie zhuo",
    readingTime: "9 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },
];
export function App() {
  const [state, setState] = useState(data);
  const addClap = (id) => {
    setState((prevState) => {
      const newstate = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, claps: item.claps + 1 };
        } else {
          return item;
        }
      });
      return newstate;
    });
  };
  return (
    <div className="container">
      {state.map((item) => (
        <Post post={item} addClap={addClap} key={item.id} />
      ))}
    </div>
  );
}
