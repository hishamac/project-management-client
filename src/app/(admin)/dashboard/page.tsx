import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("../../../components/Dashboard"), {
  ssr: false,
});

const page = () => {
  return <Dashboard />;
};

export default page;
