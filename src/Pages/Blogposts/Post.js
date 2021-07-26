// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import "../../styles/Post.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="post-main">
      <div className="container-post">
        <div className="third-cls">
          <div className="fourth-cls">
            <div className="titl-section">
              <h2 className="h2-post">{postData.title}</h2>
              <div className="img-section">
                <img
                  src={urlFor(postData.authorImage).width(100).url()}
                  className="img-cls"
                  alt="Author"
                />
                <h4 className="auth-name">{postData.name}</h4>
              </div>
            </div>
            <img
              className="main-img"
              src={urlFor(postData.mainImage).width(200).url()}
              alt=""
            />
            <div className="block-cls">
              <BlockContent
                blocks={postData.body}
                projectId="2jt5oees"
                dataset="production"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
