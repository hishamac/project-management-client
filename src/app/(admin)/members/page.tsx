import { GetAllMemmbersDocument, GetAllMemmbersQuery, GetAllMemmbersQueryVariables, Member } from "@/gql/graphql";
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
  

  return <Members members={members.data?.members as Member[]}/>;
};

export default page;
