import Link from "next/link";

const SessionsPage = () => {
  return (
    <>
      <h1>Welcome to Globomatics Sessions</h1>
      <h2>
        <Link href="/conference">Back to Conference</Link>
      </h2>
    </>
  );
};

export default SessionsPage;
