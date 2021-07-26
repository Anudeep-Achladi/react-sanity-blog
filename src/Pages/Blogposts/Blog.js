// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "../../styles/Blog.css";

const Blog = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blogs-page">
      <div className="container-blog">
        <h2 className="titl-blog-posts">Blog Posts</h2>
        <h3 className="welcome-titl">Welcome to my blog posts page!</h3>
        <div className="posts-grid">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span className="img-cls" key={index}>
                  <img src={post.mainImage.asset.url} alt="" />
                  <span>
                    <h2 className="post-titl">{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
