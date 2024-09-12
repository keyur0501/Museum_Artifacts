import React from "react";
import { articfacts } from "../constants";
import { useParams } from "react-router-dom";
import Contact from "./Contact";

const ArtiDetails = () => {
  const params = useParams();
  const artifactId = params.artifactId;

  const artifact = articfacts.find(({ id }) => {
    return id === artifactId;
  });
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="max-w-full">
        <div key={artifactId} className=" flex flex-col gap-3">
          <h1>
            {" "}
            <span className="font-black">Artifact Name:</span> {artifact.title}
          </h1>
          <p>
            <span className="font-black">Artifact Description:</span>{" "}
            {artifact.Description}
          </p>
        </div>
      </div>
      <div className="flex">
        <a
          href={artifact.pdf}
          download="Atifact_1"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download</span>
        </a>
        <button className="border bg-blue-600 ml-auto p-3 rounded-lg text-white">
          <Contact />
        </button>
      </div>
    </div>
  );
};

export default ArtiDetails;
