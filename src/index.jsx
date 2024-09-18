import "./style.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

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
    readnumber: "2 min read",
    date: "Aug 29, 2024",
    claps: 0,
  },
];

function App() {
  return (
    <div className="container">
      {data.map((item) => (
        <Post props={item} key={item.id} {...item} />
      ))}
    </div>
  );
}

function Post(props) {
  const [post, setPost] = useState(props);
  const handPost = () => {
    setPost((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };

  return (
    <div className="post-header">
      <div className="title">{props.title}</div>
      <div className="subtitle"> {props.subtitle}</div>
      <div className="author-card">
        <div className="avatar">
          <img
            src="assets/images/profile-picture.jpg"
            height="44px"
            width="44px"
          />
        </div>
        <div className="column">
          <div className="row">
            <div>{props.author}</div>
            <div>.</div>
            <div className="rollow-button">Follow</div>
          </div>
          <div className="row secondary">
            <div>Published in Mac O’Clock</div>
            <div>.</div>
            <div>{props.readingTime}</div>
            <div>.</div>
            <div>{props.data}</div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="claps">
          <div className="claps-button" onClick={handPost}>
            <img
              src="assets/icons/hands-clapping-thin.svg"
              height="24px"
              width="24px"
            />
          </div>
          <div className="claps-counter" id="claps-counter-${props.id}">
            {post.claps}
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
