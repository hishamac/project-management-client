import {
  GetAllMemmbersDocument,
  GetAllMemmbersQuery,
  GetAllMemmbersQueryVariables,
  GetAllProjectsDocument,
  GetAllProjectsQuery,
  GetAllProjectsQueryVariables,
  GetAllSkillsDocument,
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables,
  Member,
  Project,
  Skill,
} from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../../../components/Projects"), {
  ssr: false,
});

const page = async () => {
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

  return <Projects projects={projects.data?.projects as Project[]} skills={skills.data?.skills as Skill[]} members={members.data?.members as Member[]}/>;
};

export default page;
