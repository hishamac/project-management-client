import { GetAllSkillsDocument, GetAllSkillsQuery, GetAllSkillsQueryVariables } from "@/gql/graphql";
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
  return <Skills />;
};

export default page;
