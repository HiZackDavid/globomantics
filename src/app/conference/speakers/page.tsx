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

// Static Data Fetching or Static Site Generation (SSG) by default
// The request will be cached until it is manually invalidated.
// After the first request, every time this page is loaded, it pull the data from the cache and not make a request call.
// async function fetchSpeakers() {
//   const response = await fetch(
//     "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
//   );
//   const data = await response.json();
//   return data;
// }

// Static Data Fetching with Revalidation or Incremental Static Regeneration
// Revalidates cache data at a specific interval (default unit: seconds).
// - When a request is made to the route that was staticly rendered at build time,
// it will show the cached data. The same goes for request made after the initial request and before 20 seconds.
// - After the 20 seconds, the next request will show the cached data while next will trigger
// a regeneration of the data in the background. If the regeneration is successful, nextjs will
// invalidate the cached data and show the updated data. Otherwise, it will show the cached data.
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    { next: { revalidate: 20 } }
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
