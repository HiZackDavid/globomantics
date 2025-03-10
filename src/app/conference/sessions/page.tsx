import styles from "../conference.module.css";

type Speaker = {
  id: string;
  name: string;
};

type Session = {
  id: number;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  speakers: Speaker[];
  room: string;
  day: string;
  format: string;
  track: string;
  level: string;
};

// Dynamic Data Fetching or Server Side Rendering (SSR)
// With this method, there is no cache.
// The data is refreshed on every request.
// Therefore, nextjs will not look into the cache and will not update the cache on refresh.
async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

const SessionsPage = async () => {
  const data = await fetchSessions();

  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Sessions</h1>
      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }: Session) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name, id }: Speaker) => (
                <h3 key={id} className={styles.titleText}>
                  Speaker: {name}
                </h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        )
      )}
    </div>
  );
};

export default SessionsPage;
