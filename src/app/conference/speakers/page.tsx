import styles from "../conference.module.css";

type SpeakerSessionData = {
  id: number;
  name: string;
};

type SpeakerData = {
  id: string;
  bio: string;
  sessions: SpeakerSessionData[];
  name: string;
};

// Static Site Generation (SSG) by default
// The request will be cached until it is manually invalidated.
// After the first request, every time this page is loaded, it pull the data from the cache and not make a request call.
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );
  const data = await response.json();
  return data;
}

const SpeakersPage = async () => {
  const data = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }: SpeakerData) => (
        <div key={id} className={styles.infoContainer}>
          <h3 className={styles.titleText}>{name}</h3>
          <h5 className={styles.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  );
};

export default SpeakersPage;
