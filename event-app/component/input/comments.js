import { NotificationContext } from "@/store/Notification-context";
import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import classes from "./comments.module.css";
import NewComment from "./new-comment";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);
  const { eventId } = props;
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.result);
          setLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Comment",
      message: "posting comment",
      status: "pending",
    });
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("connecting Db failed");
      })
      .then((data) => {
        setComments((prevState) => [data.result, ...prevState]);
        notificationCtx.showNotification({
          title: "Comment",
          message: "comment add successfully",
          status: "success",
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Comment",
          message: err.message || "comment add failed",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && loading && <p>loading comments ...</p>}
      {showComments && comments && !loading && (
        <CommentList comments={comments} />
      )}
    </section>
  );
}

export default Comments;
