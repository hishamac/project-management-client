import { GetAllMemmbersDocument, GetAllMemmbersQuery, GetAllMemmbersQueryVariables, GetAllSkillsDocument, GetAllSkillsQuery, GetAllSkillsQueryVariables, Member, Skill } from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import dynamic from "next/dynamic";

const Members = dynamic(() => import("../../../components/Members"), {
  ssr: false,
});

const page = async () => {

  const { client } = getUrqlClient();
  const members = await client.query<
    GetAllMemmbersQuery,
    GetAllMemmbersQueryVariables
  >(GetAllMemmbersDocument, {
  });

  const skills = await client.query<
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables
>(GetAllSkillsDocument, {
});
  

  return <Members members={members.data?.members as Member[]} skills={skills.data?.skills as Skill[]}/>;
};

export default page;
