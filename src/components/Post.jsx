import React from "react";

import avart from "../assets/images/profile-picture.jpg";
import claps from "../assets/icons/hands-clapping-thin.svg";

export function Post({ post, addClap }) {
  const handPost = () => {
    addClap(post.id);
  };

  /*const [post, setPost] = useState(props);
  const handPost = () => {
    setPost((prevState) => {
      return { ...prevState, claps: prevState.claps + 1 };
    });
  };*/

  return (
    <div className="post-header">
      <div className="title">{post.title}</div>
      <div className="subtitle"> {post.subtitle}</div>
      <div className="author-card">
        <div className="avatar">
          <img src={avart} height="44px" width="44px" />
        </div>
        <div className="column">
          <div className="row">
            <div>{post.author}</div>
            <div>.</div>
            <div className="rollow-button">Follow</div>
          </div>
          <div className="row secondary">
            <div>Published in Mac O’Clock</div>
            <div>.</div>
            <div>{post.readingTime}</div>
            <div>.</div>
            <div>{post.data}</div>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="claps">
          <div className="claps-button" onClick={handPost}>
            <img src={claps} height="24px" width="24px" />
          </div>
          <div className="claps-counter" id={post.id}>
            {post.claps}
          </div>
        </div>
      </div>
    </div>
  );
}
