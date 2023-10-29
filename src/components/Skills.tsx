"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import CreateSkill from "./CreateSkill";
import SkillsTable from "./SkillsTable";
import { Roles, Skill } from "@/gql/graphql";
import { useGlobalContext } from "@/context/user";
import ErrorPage from "./Error";


interface Props {
  skills: Skill[];

}

export default function Skills(props: Props) {
  const [modal, setModal] = useState(false);
  const [allSkills, setAllSkills] = useState(props.skills);
  const [filteredSkills, setFilteredSkills] = useState(props.skills);
  const {user , setUser} = useGlobalContext();

  function downloadExcel() {
    const data = props.skills;
    const replacer = (key: any, value: any) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\r\n");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvArray;
    a.target = "_Blank";
    a.download = "Skill.csv";
    document.body.appendChild(a);
    a.click();
  } 


  return (
    <>

      

      {
            user?.role === Roles.Admin ?  <>
          
          <div className="w-full px-6 py-0.5 mx-auto flex justify-end items-end">
          {
            user?.role === Roles.Admin ?  <>
          
      <div
        className="px-2 py-0.5"
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
          Create Skill
        </button>
      </div>

      <div
        className="px-2 py-0.5  "
        onClick={downloadExcel}
      >
        <button
          type="button"
          className="inline-block px-3 py-3 font-bold text-center text-white align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
        ><svg  className="fill-white w-5 h-5 mr-1 mb-0.5" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z" />
      </svg>
         
          Export
        </button>
      </div>
      </>
        : <ErrorPage/>
          }
        </div>
      </>
        : <ErrorPage/>
          }
     

      {modal ? <CreateSkill  allSkills={allSkills} setAllSkills={setAllSkills}
    filteredSkills={filteredSkills} setFilteredSkills={setFilteredSkills} setModal={setModal} modal={modal} /> : null}

      <div className="w-full px-6 py-6 mx-auto">
        <SkillsTable  allSkills={allSkills} setAllSkills={setAllSkills}
    filteredSkills={filteredSkills} setFilteredSkills={setFilteredSkills} />
      </div>
    </>
  );
}
