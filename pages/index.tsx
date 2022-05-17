import Link from "next/link";
import { getMainLayout } from "../layouts/main";

function Home({ content }) {
  return (
    <>
      <h1>Working hard</h1>
      <Link href={"/about"}>About</Link>
    </>
  );
}

Home.getLayout = getMainLayout;

export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const content = await data.json();

  return { props: { content } };
}

export default Home;
