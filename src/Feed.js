import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
        />
      ))}

      <Post
        profilePic="https://avatars3.githubusercontent.com/u/6037819?s=460&u=3d84e364d958f764e0865cdca2bae0661b196b15&v=4"
        username="shahnewaj Imran"
        message="My first Post "
        timestamp="timestamp here"
        image="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      />
    </div>
  );
}

export default Feed;
