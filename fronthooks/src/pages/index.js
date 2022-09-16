import Link from "next/link";
import Layout  from "@/containers/Layout/index";
import { useAuth } from "@/context/AuthContext";

function Home() {

  const user=useAuth();

  return (
    <Layout>
      HomePage

    </Layout>
  );
}

export default Home;
