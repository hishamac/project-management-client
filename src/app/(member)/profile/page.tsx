import dynamic from "next/dynamic";

const Profile = dynamic(() => import("../../../components/Profile"), {
  ssr: false,
});

const page = () => {
  return <Profile />;
};

export default page;
