"use client";
import { useGlobalContext } from "@/context/user";
import CardsRowFour from "./CardsRowFour";
import CardsRowOne from "./CardsRowOne";
import CardsRowThree from "./CardsRowThree";
import CardsRowTwo from "./CardsRowTwo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Member, Project, Roles, Skill } from "@/gql/graphql";
import ErrorPage from "./Error";

interface Props {
  projects: Project[];
  skills: Skill[];
  members: Member[];
}

export default function Dashboard(props: Props) {

  const {user , setUser} = useGlobalContext();

  return (
    <>
        {/* end Navbar */}
        {/* cards */}
        <div className="w-full px-6 py-6 mx-auto">
          {
            user?.role === Roles.Admin ?  <>
            {/* row 1 */}
            <CardsRowOne 
            projects={props.projects}
            skills={props.skills}
            members={props.members}
            />
          {/* row 2 */}
          {/* <CardsRowTwo /> */}
          {/* row 3 */}
          {/* <CardsRowThree /> */}
          {/* row 4 */}
          <CardsRowFour projects={props.projects}
            skills={props.skills}
            members={props.members} />
          {/* Footer */}
          <Footer /></>
        : <ErrorPage/>
          }
        </div>
    </>
  );
}
