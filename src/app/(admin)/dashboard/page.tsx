import { GetAllMemmbersDocument, GetAllMemmbersQuery, GetAllMemmbersQueryVariables, GetAllProjectsDocument, GetAllProjectsQuery, GetAllProjectsQueryVariables, GetAllSkillsDocument, GetAllSkillsQuery, GetAllSkillsQueryVariables, Member } from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("../../../components/Dashboard"), {
  ssr: false,
});




const page =async () =>  {

  const { client } = getUrqlClient();
  const projects = await client.query<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >(GetAllProjectsDocument, {});

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, {});

  const members = await client.query<
    GetAllMemmbersQuery,
    GetAllMemmbersQueryVariables
  >(GetAllMemmbersDocument, {
  });

  return <Dashboard 
  members={members.data?.members as Member[]}
  projects={projects.data?.projects as any}
  skills={skills.data?.skills as any}
  />;
};

export default page;
