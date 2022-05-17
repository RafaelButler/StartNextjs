import Link from "next/link";
import { getLayout } from "../layouts/secondLayout";

function About() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>About Page</h1>
    </>
  );
}

About.getLayout = getLayout;

export default About;
