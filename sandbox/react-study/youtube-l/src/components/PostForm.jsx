import { useState } from "react";
import { MyInput } from "./UI/input/MyInput";
import { MyButton } from "./UI/button/MyButton";

export const PostForm = ({create}) => {
  const [post, setPosts]= useState({title: '', body: ''})
  return(
    <form>
            <MyInput value={post.title} onChange={e => setPosts({...post, title: e.target.value})} type="text" placeholder='Post name' />
            <MyInput value={post.body} onChange={e => setPosts({...post, body: e.target.value})} type="text" placeholder='Post description' />
            <MyButton onClick={(e) => {
              e.preventDefault();
              const newPost = {
                ...post, id: Date.now()
              }
              create(newPost)
              setPosts({title: '', body: ''})
            }}>New post</MyButton>
          </form>
  );
};