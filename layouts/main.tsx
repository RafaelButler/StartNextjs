import { ReactElement } from "react";

function MainLayout({ children }) {
  return (
    <>
      <h1>Main Layout</h1>
      {children}
    </>
  );
}

export function getMainLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
}
