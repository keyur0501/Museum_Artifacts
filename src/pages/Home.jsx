import React from "react";
import { articfacts } from "../constants";
import ArtiDetails from "../components/ArtiDetails";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const artifactId = params.artifactId;

  return (
    <div className="container">
      <div className=" gap-10 mt-20  flex  ">
        <div className=" bg-black w-[900px] h-[450px] ">
          {articfacts.map((artifact) => {
            if (artifact.id === artifactId) {
              return (
                <iframe
                  key={artifactId}
                  width="900"
                  height="450"
                  src={artifact.videoURL}
                  title={artifact.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              );
            }
          })}
        </div>
        <ArtiDetails />
      </div>
    </div>
  );
};

export default Home;
