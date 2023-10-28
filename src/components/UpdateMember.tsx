"use client";
import { Member, Skill } from "@/gql/graphql";
import { useEffect, useState } from "react";
import SkillSearchInput from "./SkillSearchInput";

interface Props {
  setModal: any;
  modal: boolean;
  member: Member;
  skills: Skill[];
}
export default function UpdateMember(props: Props) {
  const { setModal, modal } = props;
  const [file, setFile] = useState<File | null>(null);
  const [member, setMember] = useState<Member | null>(props.member);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const selectedSkillsIds = selectedSkills.map((skill) => skill.id);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setFirstName(props.member?.firstName as string);
    setLastName(props.member?.lastName as string);
    setUserName(props.member?.username as string);
    setEmail(props.member?.email as string);
    setRole(props.member?.role as string);
    setBio(props.member?.bio as string);
    console.log(props.member?.skillMembers);
  }, [props.member]);

  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-sticky outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl md:min-w-120">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-[95vh] overflow-y-auto">
                {/*header*/}
                <div className="flex items-start justify-between px-5 py-2 border-blueGray-200 rounded-t border-b border-solid">
                  <h3 className="text-xl font-bold">Update Member</h3>
                  <button
                    onClick={() => setModal(false)}
                    type="button"
                    data-toggle="modal"
                    data-target="#import"
                    className="fa fa-close w-4 h-4 ml-auto box-content p-2 text-black dark:text-white border-0 rounded-1.5 opacity-50 cursor-pointer -m-2 "
                    data-dismiss="modal"
                  />
                </div>
                {/*body*/}
                <form encType="multipart/form-data">
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Avatar</p>
                    <input
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none "
                      type="file"
                      required
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">First Name</p>
                    <input
                      type="text"
                      placeholder="Enter your First Name"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      required
                      value={firstName}
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Last Name</p>
                    <input
                      type="text"
                      placeholder="Enter your Last Name"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      required
                      value={lastName}
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Username</p>
                    <input
                      type="text"
                      placeholder="Enter your Username"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      required
                      value={userName}
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Password</p>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Email</p>
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      required
                      value={email}
                    />
                  </div>
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Role</p>
                    <select
                      value={role}
                      className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                    >
                      <option>Choose a Role</option>
                      <option value="projectManager">Project Manager</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                  <SkillSearchInput
                    skillsData={props.skills}
                    selectedSkills={selectedSkills}
                    setSelectedSkills={setSelectedSkills}
                    skills={skills}
                    setSkills={setSkills}
                    selectedSkillsIds={selectedSkillsIds}
                    className="px-6 py-3"
                  />
                  <div className="relative px-6 py-1 flex-auto">
                    <p className="-mb-1 ml-1 text-sm font-bold">Bio</p>
                    <textarea
                      value={bio}
                      name="textarea-name"
                      rows={5}
                      placeholder="About Yourself"
                      className="focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none"
                      defaultValue={""}
                      required
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end px-6 py-1 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      onClick={() => setModal(false)}
                      type="button"
                      data-toggle="modal"
                      data-target="#import"
                      className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-slate-600 to-slate-300 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      data-toggle="modal"
                      data-target="#import"
                      className="inline-block px-8 py-2 m-1 mb-4 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
