import { ReactElement } from "react";

export function SecondLayout({ children }) {
  return (
    <>
      <h1>This is another layout</h1>
      {children}
    </>
  );
}

export function getLayout(page: ReactElement) {
  return <SecondLayout>{page}</SecondLayout>;
}
