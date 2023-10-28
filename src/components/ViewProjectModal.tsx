interface Props {
  setViewProject: any;
  viewProject: boolean;
}
export default function ViewProjectModal(props: Props) {
  const { setViewProject, viewProject } = props;

  return (
    <>
      {viewProject ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-sticky outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-6 max-w-3xl bg-slate-50 p-5 rounded-5">
              {/*content*/}
              <div className="w-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-auto cursor-pointer"
                  onClick={() => setViewProject(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="w-full max-w-full px-3 lg-max:mt-6 lg:mt-6 xl:mt-6 mt-6">
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

              <div className="w-full max-w-full px-3 lg-max:mt-6 lg:mt-6 xl:mt-6">
                <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl flex justify-between">
                    <h6 className="mb-0">Tasks & Members</h6>
                    <button className="mb-0 bg-slate-600 px-2 rounded-3 text-white text-xs">Create Task</button>
                  </div>
                  <div className="flex-auto p-4 max-h-80 overflow-x-auto">
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                      <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
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
                          <p className="mb-0 leading-tight text-sm">
                            First Task
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
