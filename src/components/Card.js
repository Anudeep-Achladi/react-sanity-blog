//imports section
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../Pages/client.js";
import "../styles/Card.css";
//functions
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const Card = () => {
  //states
  const [portfolioData, setPortfolioData] = useState(null);

  //useEffect
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="portfolio"]{
        person_name,
        interests,
        bio,
        social_media,
        image{
          asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setPortfolioData(data[0]))
      .catch(console.error);
  }, []);

  if (!portfolioData) return <div>Loading...</div>;

  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={urlFor(portfolioData.image).url()}
          className="person-img"
          alt="Img of a person"
        />
      </div>
      <div className="card-title">
        <h1 className="name-cls">{portfolioData.person_name}</h1>
      </div>
      <div className="interests-cls">
        <h3>Intrested in {portfolioData.interests.join()}.</h3>
      </div>
      <div className="card-body">
        <BlockContent
          blocks={portfolioData.bio}
          projectId="2jt5oees"
          dataset="production"
        />
      </div>
      <div className="github-cls">
        <a href="https://github.com/Anudeep-Achladi">
          <i class="fab fa-github"></i> My Github
        </a>
      </div>
    </div>
  );
};

export default Card;
