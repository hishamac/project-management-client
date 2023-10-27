import dynamic from "next/dynamic";

const Members = dynamic(() => import("../../../components/Members"), {
  ssr: false,
});

const page = () => {
  return <Members />;
};

export default page;
