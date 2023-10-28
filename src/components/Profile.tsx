"use client";
import { useEffect, useState } from "react";
import ViewProjectModal from "./ViewProjectModal";
import { app } from "@/components/firebase/config";
import ViewSubmitModal from "./ViewSubmitModal";
import { Member, Project, Skill } from "@/gql/graphql";
import CreateProject from "./CreateProject";
var firebasedb = require("firebase/database");

interface Props {
  projects: Project[];
  skills: Skill[];
  members: Member[];
}

export default function Profile(props: Props) {
  const [taskSelection, setTaskSelection] = useState("");
  const [viewProject, setViewProject] = useState(false);
  const [viewSubmit, setViewSubmit] = useState(false);
  const [value, setValue] = useState([]);
  const [modal, setModal] = useState(false);
  const [allProjects, setAllProjects] = useState(props.projects);
  const [filteredProjects, setFilteredProjects] = useState(props.projects);
  const [replyModal, setReplyModal] = useState(false);

  useEffect(() => {
    var db = firebasedb.getDatabase(app);

    const getMessagesBySenderId = (
      id_type: string | null = null,
      sender_id: any = null,
      message_id: any = null,
      reciever_id: any = null
    ) => {
      const checkId = sender_id
        ? sender_id
        : message_id
        ? message_id
        : reciever_id
        ? reciever_id
        : null;
      firebasedb
        .get(firebasedb.child(firebasedb.ref(db), "notification"))
        .then((snapshot: any) => {
          snapshot.val().map((value: any) => {
            if (value[id_type as any] == checkId) {
              console.log(value);
            }
          });
        })
        .catch((error: Error) => {
          console.error(error);
        });
    };
    getMessagesBySenderId("sender_id", 14);
  }, []);
  return (
    <>
      {modal ? (
        <CreateProject
          skills={props.skills}
          members={props.members}
          setModal={setModal}
          modal={modal}
          allProjects={allProjects}
          filteredProjects={filteredProjects}
          setFilteredProjects={setFilteredProjects}
          setAllProjects={setAllProjects}
        />
      ) : null}
      <ViewProjectModal
        viewProject={viewProject}
        setViewProject={setViewProject}
      />
      <ViewSubmitModal viewSubmit={viewSubmit} setViewSubmit={setViewSubmit} />
      <div>
        <div className="ease-soft-in-out relative h-full max-h-screen bg-gray-50 transition-all duration-200">
          <div className="w-full px-6 mx-auto">
            <div
              className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
              style={{
                backgroundImage:
                  'url("https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/curved-images/curved0.jpg")',
                backgroundPositionY: "50%",
              }}
            >
              <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60" />
            </div>
            <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-auto max-w-full px-3">
                  <div className="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                    <img
                      src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/bruce-mars.jpg"
                      alt="profile_image"
                      className="w-full shadow-soft-sm rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex-none w-auto max-w-full px-3 my-auto">
                  <div className="h-full">
                    <h5 className="mb-1">Alec Thompson</h5>
                    <p className="mb-0 font-semibold leading-normal text-sm">
                      CEO / Co-Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6 mx-auto">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                    <div className="flex flex-wrap -mx-3">
                      <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                        <h6 className="mb-0">Profile Information</h6>
                      </div>
                      <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
                        <a
                          href="javascript:;"
                          data-target="tooltip_trigger"
                          data-placement="top"
                        >
                          <i className="leading-normal fas fa-user-edit text-sm text-slate-400" />
                        </a>
                        <div
                          data-target="tooltip"
                          className="hidden px-2 py-1 text-center text-white bg-black rounded-lg text-sm"
                          role="tooltip"
                        >
                          Edit Profile
                          <div
                            className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto p-4 max-h-80 overflow-x-auto">
                    <p className="leading-normal text-sm">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                      answer is no. If two equally difficult paths, choose the
                      one more painful in the short term (pain avoidance is
                      creating an illusion of equality).
                    </p>
                    <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                      <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                        <strong className="text-slate-700">Full Name:</strong>{" "}
                        &nbsp; Alec M. Thompson
                      </li>
                      <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                        <strong className="text-slate-700">Mobile:</strong>{" "}
                        &nbsp; (44) 123 1234 123
                      </li>
                      <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                        <strong className="text-slate-700">Email:</strong>{" "}
                        &nbsp; alecthompson@mail.com
                      </li>
                      <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                        <strong className="text-slate-700">Location:</strong>{" "}
                        &nbsp; USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl flex justify-between">
                    <h6 className="mb-0">Tasks</h6>
                    <select
                      id="countries"
                      className=" w-auto p-1 border-b-2 border-slate-700 text-sm text-slate-700"
                      onChange={(e) => setTaskSelection(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="submitted">Submitted</option>
                      <option value="current">Current</option>
                    </select>
                  </div>
                  <div className="flex-auto p-4 max-h-80 overflow-x-auto">
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                      <li className="relative flex items-center px-2 py-2 mb-2 bg-white border-0  text-inherit border-l-2">
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm">
                            Create Hangouts for the team
                          </h6>
                          <p className="mb-0 leading-tight text-xs">
                            It is to create Hangouts for the team...
                          </p>
                        </div>
                        <a
                          className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                          onClick={() => setViewSubmit(true)}
                        >
                          Submit
                        </a>
                      </li>{" "}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                    <h6 className="mb-0">Conversations</h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="small-input"
                      placeholder="Search for Members to chat"
                      className="block h-8 w-[94%] p-2 border-b-2 border-slate-300 mx-auto mt-1 placeholder:text-sm"
                    />
                  </div>
                  <div className="flex-auto p-4 max-h-80 overflow-x-auto">
                    <ul className="flex flex-col mb-0 rounded-lg bg-slate-50 p-2">
                      <li className="relative flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                        <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                          <img
                            src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/kal-visuals-square.jpg"
                            alt="kal"
                            className="w-full shadow-soft-2xl rounded-xl"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <h6 className="mb-0 leading-normal text-sm">
                            Sophie B.
                          </h6>
                          <p className="mb-0 leading-tight text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                          onClick={() => setReplyModal(!replyModal)}
                        >
                          Reply
                        </a>
                      </li>
                      {replyModal ? (
                        <li className="relative flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                          <div className="flex flex-col items-start justify-center w-full pr-1">
                            <input
                              type="text"
                              className="border-b-2 border-slate-500 w-full bg-slate-50"
                            />
                          </div>
                          <a
                            className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                            href="javascript:;"
                          >
                            Send
                          </a>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-none w-full max-w-full px-3 mt-6">
                <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
                    <h6 className="mb-1">Projects</h6>
                    <p className="leading-normal text-sm">
                      Architects design houses
                    </p>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                          <div className="relative">
                            <a className="block shadow-xl rounded-2xl">
                              <img
                                src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/home-decor-1.jpg"
                                alt="img-blur-shadow"
                                className="max-w-full shadow-soft-2xl rounded-2xl"
                              />
                            </a>
                          </div>
                          <div className="flex-auto px-1 pt-6">
                            <p className="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                              Project #2
                            </p>
                            <a href="javascript:;">
                              <h5>Modern</h5>
                            </a>
                            <p className="mb-6 leading-normal text-sm">
                              As Uber works through a huge amount of internal
                              management turmoil.
                            </p>
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => setViewProject(true)}
                                type="button"
                                className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500"
                              >
                                View Project
                              </button>
                              <div className="mt-2">
                                <a
                                  href="javascript:;"
                                  className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                  data-target="tooltip_trigger"
                                  data-placement="bottom"
                                >
                                  <img
                                    className="w-full rounded-circle"
                                    alt="Image placeholder"
                                    src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-1.jpg"
                                  />
                                </a>
                                <div
                                  data-target="tooltip"
                                  className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                  role="tooltip"
                                >
                                  Elena Morison
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow
                                  />
                                </div>
                                <a
                                  href="javascript:;"
                                  className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                  data-target="tooltip_trigger"
                                  data-placement="bottom"
                                >
                                  <img
                                    className="w-full rounded-circle"
                                    alt="Image placeholder"
                                    src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-2.jpg"
                                  />
                                </a>
                                <div
                                  data-target="tooltip"
                                  className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                  role="tooltip"
                                >
                                  Ryan Milly
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow
                                  />
                                </div>
                                <a
                                  href="javascript:;"
                                  className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                  data-target="tooltip_trigger"
                                  data-placement="bottom"
                                >
                                  <img
                                    className="w-full rounded-circle"
                                    alt="Image placeholder"
                                    src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-3.jpg"
                                  />
                                </a>
                                <div
                                  data-target="tooltip"
                                  className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                  role="tooltip"
                                >
                                  Nick Daniel
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow
                                  />
                                </div>
                                <a
                                  href="javascript:;"
                                  className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                                  data-target="tooltip_trigger"
                                  data-placement="bottom"
                                >
                                  <img
                                    className="w-full rounded-circle"
                                    alt="Image placeholder"
                                    src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-4.jpg"
                                  />
                                </a>
                                <div
                                  data-target="tooltip"
                                  className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                  role="tooltip"
                                >
                                  Peterson
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                        <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                          <div className="flex flex-col justify-center flex-auto p-6 text-center">
                            <a onClick={() => setModal(true)}>
                              <i className="mb-4 fa fa-plus text-slate-400" />
                              <h5 className="text-slate-400">New project</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
