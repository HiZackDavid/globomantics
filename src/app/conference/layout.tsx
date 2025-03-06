import style from "./styles.css";

const ConferenceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <header style={style.header}>
        <h1>GLOBOMANTICS MANIACALLY TAKING TECH TO THE GLOBE</h1>
      </header>
      <section>{children}</section>
    </>
  );
};

export default ConferenceLayout;
