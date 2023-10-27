"use client";

import { LoginDocument, LoginMutation, LoginMutationVariables, Roles } from "@/gql/graphql";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OperationResult, useMutation } from "urql";

export default function Login() {

  const [state, LoginExecute] = useMutation(LoginDocument);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const HandleSubmit = async () => {
    const login: OperationResult<
      LoginMutation,
      LoginMutationVariables
    > = await LoginExecute({
      password: password,
      username: username,
    });

    if (login.data?.login?.token) {
      const data = login.data?.login;
      localStorage.setItem("token", login.data.login.token);
      if (data.admin.role === Roles.Admin) {
        router.push("/dashboard");
      } else {
        router.push("/profile");
      }
    }

  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              // console.log(e.target[0].value);
              // console.log(e.target[1].value);
              HandleSubmit();
            }} >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => { setUsername(e.target.value) }}
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="alexray"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-tl from-purple-700 to-pink-500 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
              >
                {
                  state.fetching ? "•••" : "Sign in"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


