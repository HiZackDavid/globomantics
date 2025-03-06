import Link from "next/link";

const ConferencePage = () => {
  return (
    <>
      <h1>Welcome to Globomatics Conference</h1>
      <h2>
        <Link href="/conference/speakers">Speakers</Link>
      </h2>
      <h2>
        <Link href="/conference/sessions">Sessions</Link>
      </h2>
    </>
  );
};

export default ConferencePage;
