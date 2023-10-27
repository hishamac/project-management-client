"use client";
import { useEffect, useState } from "react";
import ViewProjectModal from "./ViewProjectModal";
import { app } from "@/components/firebase/config";
var firebasedb = require("firebase/database");

export default function Profile() {
  const [taskSelection, setTaskSelection] = useState("");
  const [viewProject, setViewProject] = useState(false);
  const [value, setValue] = useState([]);

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
      <ViewProjectModal
        viewProject={viewProject}
        setViewProject={setViewProject}
      />
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
                <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
                  <div className="relative right-0">
                    <ul
                      className="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl"
                      nav-pills
                      role="tablist"
                    >
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                          href=""
                          role="tab"
                          aria-selected="true"
                        >
                          <svg
                            className="text-slate-700"
                            width="16px"
                            height="16px"
                            viewBox="0 0 42 42"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-2319.000000, -291.000000)"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(603.000000, 0.000000)">
                                    <path
                                      className="fill-slate-800"
                                      d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"
                                    />
                                    <path
                                      className="fill-slate-800"
                                      d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="fill-slate-800"
                                      d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z"
                                      opacity="0.7"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">App</span>
                        </a>
                      </li>
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <svg
                            className="text-slate-700"
                            width="16px"
                            height="16px"
                            viewBox="0 0 40 44"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>document</title>
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-1870.000000, -591.000000)"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(154.000000, 300.000000)">
                                    <path
                                      className="fill-slate-800"
                                      d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                      opacity="0.603585379"
                                    />
                                    <path
                                      className="fill-slate-800"
                                      d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">Messages</span>
                        </a>
                      </li>
                      <li className="z-30 flex-auto text-center">
                        <a
                          className="z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                          nav-link
                          href="javascript:;"
                          role="tab"
                          aria-selected="false"
                        >
                          <svg
                            className="text-slate-700"
                            width="16px"
                            height="16px"
                            viewBox="0 0 40 40"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <title>settings</title>
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                transform="translate(-2020.000000, -442.000000)"
                                fill="#FFFFFF"
                                fillRule="nonzero"
                              >
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(304.000000, 151.000000)">
                                    <polygon
                                      className="fill-slate-800"
                                      opacity="0.596981957"
                                      points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                    />
                                    <path
                                      className="fill-slate-800"
                                      d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                      opacity="0.596981957"
                                    />
                                    <path
                                      className="fill-slate-800"
                                      d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span className="ml-1">Settings</span>
                        </a>
                      </li>
                    </ul>
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
                          href="javascript:;"
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
                          <p className="mb-0 leading-tight text-xs">
                            Hi! I need more information..
                          </p>
                        </div>
                        <a
                          className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                          href="javascript:;"
                        >
                          Reply
                        </a>
                      </li>
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
                            <a href="javascript:;">
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
