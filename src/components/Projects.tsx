"use client";
import { useState } from "react";
import CreateProject from "./CreateProject";
import Navbar from "./Navbar";
import ProjectsTable from "./ProjectsTable";
import { Project, Skill } from "@/gql/graphql";

interface Props {
  projects: Project[];
  skills: Skill[];
}

export default function Projects(props: Props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="w-full px-6 py-0.5 mx-auto flex justify-end"
        onClick={() => {
          setModal(true), console.log(modal);
        }}
      >
        <button
          type="button"
          className="inline-block px-3 py-3 font-bold text-center text-white align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="fill-white w-5 h-5 mr-1 mb-0.5"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          Create Project
        </button>
      </div>
      {modal ? <CreateProject skills={props.skills} setModal={setModal} modal={modal} /> : null}
      <div className="w-full px-6 py-6 mx-auto">
        <ProjectsTable />
      </div>
    </>
  );
}
