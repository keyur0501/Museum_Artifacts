import React from "react";
import { articfacts } from "../constants";
import ArtiDetails from "../components/ArtiDetails";
import { useParams } from "react-router-dom";

const Home = () => {
  const params = useParams();
  const artifactId = params.artifactId;

  return (
    <div className="container mx-auto px-4">
      <div className=" flex flex-col sm:flex-row gap-10 mt-20">
        <div className=" bg-black flex-shrink-0 md:w-[900px] md:h-[450px]  w-full  h-[250px]">
          {articfacts.map((artifact) => {
            if (artifact.id === artifactId) {
              return (
                <iframe
                  className="w-full h-full"
                  key={artifactId}
                  width="100%"
                  height="100%"
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
