import { GetAllProjectsDocument, GetAllProjectsQuery, GetAllProjectsQueryVariables } from "@/gql/graphql";
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
>(GetAllProjectsDocument, {
});

  return <Projects />;
};

export default page;
