import styles from "../../conference.module.css";

type Session = {
  id: number;
  name: string;
};

type Speaker = {
  id: string;
  name: string;
  bio: string;
  featured: boolean;
  sessions: Session[];
};

async function getSpeakerInfo(id: string) {
  // API call, DB Query, fetch from the app

  const speakers = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );

  let speakersList = await speakers.json();
  speakersList = speakersList.speakers;

  return getSpeakerDetails(speakersList, atob(id));
}

function getSpeakerDetails(speakers: Speaker[], speakerId: string) {
  const speaker = speakers.find(({ id }: Speaker) => id === speakerId);

  if (speaker === undefined) {
    throw new Error(`Speaker with id ${speakerId} was not found`);
  }

  return speaker;
}

const SpeakerPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Fetch speaker information and render it below
  const { id } = await params;

  const speakerInfo = await getSpeakerInfo(id);
  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
};

export default SpeakerPage;
