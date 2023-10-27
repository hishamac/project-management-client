import { GetAllMemmbersDocument, GetAllMemmbersQuery, GetAllMemmbersQueryVariables } from "@/gql/graphql";
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
  

  return <Members />;
};

export default page;
