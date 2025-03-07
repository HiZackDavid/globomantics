const ConferenceLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <section>{children}</section>
    </>
  );
};

export default ConferenceLayout;
