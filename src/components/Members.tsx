"use client";
import { useState } from "react";
import MembersTable from "./MembersTable";
import Navbar from "./Navbar";
import CreateMember from "./CreateMember";
import { Member, Roles, Skill } from "@/gql/graphql";
import { useGlobalContext } from "@/context/user";
import ErrorPage from "./Error";

interface Props {
  members: Member[];
  skills: Skill[];
}

export default function Members(props:Props) {
  const [modal, setModal] = useState(false);
  const [allMembers, setAllMembers] = useState(props.members);
  const [filteredMembers, setFilteredMembers] = useState(props.members);
  const {user , setUser} = useGlobalContext();
  return (
    <>
     <div className="w-full px-6 py-6 mx-auto">
          {
            user?.role === Roles.Admin ?  <>
          
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
          Create Member
        </button>
      </div></>
        : <ErrorPage/>
          }
        </div>

      {modal ? <CreateMember skills={props.skills} setModal={setModal} modal={modal}
      allMembers={allMembers}
      filteredMembers={filteredMembers}
      setFilteredMembers={setFilteredMembers}
      setAllMembers={setAllMembers}
      /> : null}

      <div className="w-full px-6 py-6 mx-auto">
        <MembersTable  skills={props.skills}
        allMembers={allMembers}
        filteredMembers={filteredMembers}
        setFilteredMembers={setFilteredMembers}
        setAllMembers={setAllMembers}
        />
      </div>
    </>
  );
}
