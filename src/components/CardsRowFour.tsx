"use client";
import { Member, Project, Skill } from "@/gql/graphql";
import { useEffect, useState } from "react";

interface Props {
  projects: Project[];
  skills: Skill[];
  members: Member[];
}

export default function CardsRowFour(props: Props) {

  const [lastSixProjects, setLastSixProjects] = useState<Project[]>([])
  const [lastFiveMembers, setLastFiveMembers] = useState<Member[]>([])

  useEffect(() => {
    if(props.projects?.length > 6){
      setLastSixProjects(props.projects?.slice(props.projects?.length - 6, props.projects?.length))
    }else{
      setLastSixProjects(props?.projects)
    }

    if(props.members?.length > 6){
      setLastFiveMembers(props.members?.slice(props.members?.length - 6, props.members?.length))
    }
    else{
      setLastFiveMembers(props?.members)
    }
  }
  , [props.projects])

  return (
    <div className="flex flex-wrap my-6 -mx-3">
      {/* card 1 */}
      <div className="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                <h6>Projects</h6>
                <p className="mb-0 text-sm leading-normal">
                  {/* <i className="fa fa-check text-cyan-500" /> */}
                  <span className=" font-semibold"></span>
                 
                </p>
              </div>
              <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                <div className="relative pr-6 lg:float-right">
                  <a
                    dropdown-trigger=""
                    className="cursor-pointer"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v text-slate-400" />
                  </a>
                  <p className="hidden transform-dropdown-show" />
                  <ul
                    dropdown-menu=""
                    className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']"
                  >
                    <li className="relative">
                      <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="#"
                      >
                        Action
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="#"
                      >
                        Another action
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        className="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300"
                        href="#"
                      >
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-auto p-6 px-0 pb-2">
            <div className="overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                      Project
                    </th>
                    <th className="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                      Members
                    </th>
                    <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                      Status
                    </th>
                    <th className="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody>
                 
                 {
                  lastSixProjects 
                  && lastSixProjects.map((project) => {
                    let tasksCount = project.tasks?.length ;
                    let projectCompletion = 0;
        
                    project.tasks?.map((task) => {
                      projectCompletion += task.isCompleted ? 1 : 0;
                    }
                    )
                    return (

                    
                      <tr>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                        <div className="flex px-2 py-1">
                          <div>
                            <img
                              src={`${project.imageId ? project.imageId : '/img/project.jpg'}`}
                              className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                              alt="xd"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="mb-0 text-sm leading-normal">
                              {project.title}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                        <div className="mt-2 avatar-group">
                          <a
                            href="#"
                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-xs text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-1.jpg"
                              className="w-full rounded-full"
                              alt="team1"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                            role="tooltip"
                          >
                            Ryan Tompson
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            />
                          </div>
                          <a
                            href="#"
                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-xs text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-2.jpg"
                              className="w-full rounded-full"
                              alt="team2"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                            role="tooltip"
                          >
                            Romina Hadid
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            />
                          </div>
                          <a
                            href="#"
                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-xs text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-3.jpg"
                              className="w-full rounded-full"
                              alt="team3"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                            role="tooltip"
                          >
                            Alexander Smith
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            />
                          </div>
                          <a
                            href="#"
                            className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-xs text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out hover:z-30"
                            data-target="tooltip_trigger"
                            data-placement="bottom"
                          >
                            <img
                              src="https://raw.githubusercontent.com/creativetimofficial/soft-ui-dashboard-tailwind/main/build/assets/img/team-4.jpg"
                              className="w-full rounded-full"
                              alt="team4"
                            />
                          </a>
                          <div
                            data-target="tooltip"
                            className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg"
                            role="tooltip"
                          >
                            Jessica Doe
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap">
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
                      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                        <div className="w-3/4 mx-auto">
                          <div>
                            <div>
                              <span className="text-xs font-semibold leading-tight">
                              { (projectCompletion ? projectCompletion : 0) / (tasksCount ? tasksCount : 1) * 100 }%
                              </span>
                            </div>
                          </div>
                          <div className="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                            <div
                            className={`duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-[${ (projectCompletion ? projectCompletion : 0) / (tasksCount ? tasksCount : 1) * 100 }%] flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all`}
                              role="progressbar"
                              aria-valuenow={60}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
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
      {/* card 2 */}
      <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
        <div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
            <h6>Mmbers overview</h6>
            <p className="text-sm leading-normal">
            </p>
          </div>
          <div className="flex-auto p-4">
            <div className="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
             {
              lastFiveMembers &&
              lastFiveMembers.map((member) => {
                return(
                  <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                  <span className="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                    <i className="relative z-10 leading-none text-transparent ni ni-bell-55 leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent" />
                  </span>
                  <div className="ml-11.252 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                    <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                     {member.username}
                    </h6>
                    <p className="mt-1 mb-0 text-xs font-semibold leading-tight text-slate-400">
                      {member.role}
                    </p>
                  </div>
                </div>
                )
              })
             }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
