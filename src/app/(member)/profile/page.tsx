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

const Profile = dynamic(() => import("../../../components/Profile"), {
  ssr: false,
});

const page = async () => {
  const { client } = getUrqlClient();
  const members = await client.query<
    GetAllMemmbersQuery,
    GetAllMemmbersQueryVariables
  >(GetAllMemmbersDocument, {});

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, {});

  const projects = await client.query<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >(GetAllProjectsDocument, {});
  return (
    <Profile
      members={members.data?.members as Member[]}
      skills={skills.data?.skills as Skill[]}
      projects={projects.data?.projects as Project[]}
    />
  );
};

export default page;
