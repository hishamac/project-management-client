"use client";
import { useState } from "react";
import UpdateProject from "./UpdateProject";
import DeleteProject from "./DeleteProject";
import { Member, Project, Skill } from "@/gql/graphql";

interface Props {
  projects: Project[];
  skills: Skill[];
  members:Member[]
  allProjects: Project[];
  setAllProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  filteredProjects: Project[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export default function ProjectsTable(props: Props) {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const {allProjects , filteredProjects , setFilteredProjects , setAllProjects} = props
  return (
    <>
      <UpdateProject
        skills={props.skills}
        projects={props.projects}
        members={props.members}
        setModal={setModal}
        allProjects={allProjects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
        setAllProjects={setAllProjects}
        modal={modal}
      />
      <DeleteProject
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        allProjects={allProjects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
        setAllProjects={setAllProjects}
      />
      <div className="flex flex-wrap -mx-3">
        <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="p-6 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <h6>Projects table</h6>
            </div>
            <div className="flex-auto px-0 pt-0 pb-2">
              <div className="p-0 overflow-x-auto">
                <table className="items-center justify-center w-full mb-0 align-top border-gray-200 text-slate-500">
                  <thead className="align-bottom">
                    <tr>
                      <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Project
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Budget
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Status
                      </th>
                      <th className="px-6 py-3 pl-2 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        Completion
                      </th>
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap" />
                      <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap" />
                    </tr>
                  </thead>
                  <tbody>
                  {
          filteredProjects.length > 0  && 
          filteredProjects.map((project) => {

            let tasksCount = project.tasks?.length ;
            let projectCompletion = 0;

            project.tasks?.map((task) => {
              projectCompletion += task.isCompleted ? 1 : 0;
            }

            )

            return  (
              <tr>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex px-2">
                  <div>
                    <img
                      src={project.imageId ? project.imageId : "/img/project.jpg"}
                      className="inline-flex items-center justify-center mr-2 text-sm text-white transition-all duration-200 rounded-full ease-soft-in-out h-9 w-9"
                      alt="spotify"
                    />
                  </div>
                  <div className="my-auto">
                    <h6 className="mb-0 text-sm leading-normal">
                      {project.title}
                    </h6>
                  </div>
                </div>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <p className="mb-0 text-sm font-semibold leading-normal">
                  {project.manager?.firstName}
                </p>
              </td>
              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <span className="text-xs font-semibold leading-tight">
                  {
                    projectCompletion == 0 ? 
                    "Not started" :
                    projectCompletion == tasksCount ?
                    "Completed" :
                    "In progress"
                  }
                </span>
              </td>
              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                <div className="flex items-center justify-center">
                  <span className="mr-2 text-xs font-semibold leading-tight">
                    { (projectCompletion ? projectCompletion : 1) / (tasksCount ? tasksCount : 1) * 100 }%
                  </span>
                  <div>
                    <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                      <div
                        className={`duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`}
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td
                className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                onClick={() => setModal(true)}
              >
                <a
                  href="javascript:;"
                  className="text-xs font-semibold leading-tight text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-slate-500 w-4 h-4 mb-1"
                  >
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                  </svg>
                </a>
              </td>
              <td
                className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
                onClick={() => setDeleteModal(true)}
              >
                <a
                  href="javascript:;"
                  className="text-xs font-semibold leading-tight text-slate-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-slate-500 w-4 h-4 mb-1"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </a>
              </td>
            </tr>
            
            )
          }
          
         )
         }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}
