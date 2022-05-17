import { GetStaticProps } from "next";

function Users({ id }) {
  return <h1>User {id}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  return { props: { id } };
};

export default Users;
