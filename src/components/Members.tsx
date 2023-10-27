"use client";
import { useState } from "react";
import MembersTable from "./MembersTable";
import Navbar from "./Navbar";
import CreateMember from "./CreateMember";

export default function Members() {
  const [modal, setModal] = useState(false);
  return (
    <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
      {/* Navbar */}
      <Navbar />
  
      <div
        className="w-full px-6 py-0.5 mx-auto flex justify-end"
        onClick={() => {setModal(true),console.log(modal);
        }}
      >
        <button
          type="button"
          className="inline-block px-3 py-3 font-bold text-center text-white align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            className="fill-white mr-2 h-5 w-5"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          Create Member
        </button>
      </div>
      {modal ? <CreateMember setModal={setModal} modal={modal} /> : null}
      
      <div className="w-full px-6 py-6 mx-auto">
        <MembersTable />
      </div>
    </main>
  );
}
