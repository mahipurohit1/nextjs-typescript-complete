import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import classes from "./comments.module.css";
import NewComment from "./new-comment";

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.result);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setComments((prevState) => [data.result, ...prevState]));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && comments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
