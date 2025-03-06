import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <h2>
        <Link href="/settings">Settings</Link>
      </h2>
      <h2>
        <Link href="/conference">Conference</Link>
      </h2>
    </>
  );
};

export default HomePage;
