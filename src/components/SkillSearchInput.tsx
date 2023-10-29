"use client";

import { Skill } from "@/gql/graphql";
import { useEffect, useState } from "react";

interface Props {
  skillData: Skill[];
  className: string;
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
  selectedSkills: Skill[];
  setSelectedSkills: (selectedSkills: Skill[]) => void;
  selectedSkillsIds: any[];
}

export default function SkillSearchInput(props: Props) {
  const [query, setQuery] = useState("");

  const {
    skillData,
    skills,
    setSkills,
    selectedSkills,
    selectedSkillsIds,
    setSelectedSkills,
  } = props;

  useEffect(() => {
    setSkills(skillData);
  }, [skillData]);

  const filtered = skills.filter((skill) =>
    skill?.title?.toLowerCase().includes(query)
  );

  return (
    <div className={props.className}>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto p-4 max-h-[365px] overflow-y-auto">
        {selectedSkills?.length > 0 &&
          (console.log(selectedSkills),
          console.log(selectedSkillsIds),
          (
            <>
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Selected Tags
                </h5>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {selectedSkills?.map((skill, index) => (
                    <li
                      className="py-3 sm:py-2 flex justify-between"
                      key={index}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                            {skill.title}
                          </p>
                          <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer text-red-500"
                        onClick={() => {
                          const objectWithIdIndex = selectedSkills.findIndex(
                            (skill1) => skill1.id === skill.id
                          );
                          selectedSkills?.splice(objectWithIdIndex, 1);

                          setSkills([...skills, skill]);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        <div className="my-4">
          <input
            type="text"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Search Tags"
            name="title"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            All Tags
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {skills.length <= 0 ? (
              <p>All Tags Selected</p>
            ) : (
              filtered.map((skill, index) => (
                <li
                  className="py-3 sm:py-2 cursor-pointer"
                  key={index}
                  onClick={() => {
                    setSelectedSkills([...selectedSkills, skill]);
                    const objectWithIdIndex = skills.findIndex(
                      (skill1) => skill1.id === skill.id
                    );
                    skills.splice(objectWithIdIndex, 1);
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                        {skill.title}
                      </p>
                      <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
