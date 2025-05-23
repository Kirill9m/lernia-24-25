import { MyButton } from "./UI/button/MyButton"

export const PostItem = (props) => {
  return(
    <div className="post">
    <div className="post__content">
      <strong>{props.number}. {props.post.title}</strong>
      <div>{props.post.body}</div>
    </div>
    <div className="post_btns">
      <MyButton>Remove</MyButton>
    </div>
  </div>
  )
} 