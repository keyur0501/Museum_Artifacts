import React from "react";
import { articfacts } from "../constants";
import { Link, useParams } from "react-router-dom";

const ArtiDetails = () => {
  const params = useParams();
  const artifactId = params.artifactId;

  return (
    <div className=" flex flex-col gap-5">
      <div>
        {articfacts.map((artifact) => {
          if (artifact.id === artifactId) {
            return (
              <div key={artifactId} className=" flex flex-col gap-3">
                <h1>
                  {" "}
                  <span className="font-black">Artifact Name:</span>{" "}
                  {artifact.title}
                </h1>
                <p>
                  <span className="font-black">Artifact Description:</span>{" "}
                  {artifact.Description}
                </p>
              </div>
            );
          }
        })}
      </div>
      <button className="border bg-blue-600 ml-auto p-3 rounded-lg text-white">
        <Link to="/contact">Contact Us </Link>
      </button>
    </div>
  );
};

export default ArtiDetails;
