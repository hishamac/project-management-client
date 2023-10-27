import dynamic from "next/dynamic";

const Projects = dynamic(() => import("../../../components/Projects"), {
  ssr: false,
});

const page = () => {
  return <Projects />;
};

export default page;
