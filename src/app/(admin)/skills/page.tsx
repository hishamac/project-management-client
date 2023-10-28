import { GetAllSkillsDocument, GetAllSkillsQuery, GetAllSkillsQueryVariables, Skill } from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../../../components/Skills"), {
  ssr: false,
});

const page =async () => {
  const { client } = getUrqlClient();

  const skills = await client.query<
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables
>(GetAllSkillsDocument, {
});
  return <Skills 
  skills={skills?.data?.skills as Skill[]}
  />;
};

export default page;
