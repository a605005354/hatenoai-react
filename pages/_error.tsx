import Error from 'next/error';
import { NextPageContext } from 'next';

interface PageProps {
  statusCode: number; // Assuming statusCode is a number
}

interface CustomError {
  statusCode?: number;
}

function Page({ statusCode } : PageProps) {
  return <Error statusCode={statusCode}></Error>;
}


Page.getInitialProps = ({ res, err } : NextPageContext & { err?: CustomError }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Page;