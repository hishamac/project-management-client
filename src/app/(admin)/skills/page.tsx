import dynamic from "next/dynamic";

const Skills = dynamic(() => import("../../../components/Skills"), {
  ssr: false,
});

const page = () => {
  return <Skills />;
};

export default page;
