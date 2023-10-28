"use client";
import { Member } from "@/gql/graphql";
import { useEffect, useState } from "react";

interface Props {
  projectManagerData: Member[];
  selectedProjectManager: Member;
  setSelectedProjectManager: (selectedProjectManager: Member) => void;
  projectManagers: Member[];
  setProjectManagers: (projectManagers: Member[]) => void;
}

export default function ProjectManagerSearchInput(props: Props) {
  const {
    projectManagerData,
    selectedProjectManager,
    setSelectedProjectManager,
    projectManagers,
    setProjectManagers,
  } = props;

  useEffect(() => {
    setProjectManagers(projectManagerData);
  }, []);
  console.log(projectManagers);

  const [query, setQuery] = useState<string>("");
  const filtered = projectManagers.filter((projectManager) =>
    projectManager?.firstName?.toLowerCase().includes(query)
  );

  return (
    <div className="px-6 py-3">
      <div className="w-full  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto p-4 max-h-[365px] overflow-y-scroll">
      {selectedProjectManager.firstName && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Selected Author
            </h5>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-2">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                      src={selectedProjectManager?.avatarId as string}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                      {selectedProjectManager.firstName}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="my-4">
        <input
          type="text"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Search Authors"
          name="name"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          All Authors
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {projectManagers.length <= 0 ? (
            <p>No Authors Found</p>
          ) : (
            filtered.map((author, index) => (
              <li
                key={index}
                className="py-3 sm:py-2 cursor-pointer"
                onClick={() => {
                  if (selectedProjectManager) {
                    // projectManagers.includes(selectedProjectManager,0) ? null : setProjectManagers([...projectManagers, selectedProjectManager])
                    const objectWithIdIndex = projectManagers.findIndex(
                      (projectManagers1) => projectManagers1.id === author.id
                    );
                    projectManagers.splice(objectWithIdIndex, 1);
                    setProjectManagers([
                      ...projectManagers,
                      selectedProjectManager,
                    ]);
                    setSelectedProjectManager(author);
                    console.log(projectManagers.length);
                    setQuery("");
                  } else {
                    setSelectedProjectManager(author);
                    const objectWithIdIndex = projectManagers.findIndex(
                      (projectManagers1) => projectManagers1.id === author.id
                    );
                    projectManagers.splice(objectWithIdIndex, 1);
                    setQuery("");
                  }
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                      src={author.avatarId as string}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-gray-900 truncate dark:text-white">
                      {author.firstName}
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
