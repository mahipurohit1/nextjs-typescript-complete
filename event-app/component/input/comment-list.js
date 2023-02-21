import classes from "./comment-list.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}

      {props.comments.map((com) => {
        return (
          <li key={com._id}>
            <p>{com.comment}</p>
            <div>
              By <address>{com.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
