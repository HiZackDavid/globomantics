import Link from "next/link";
import Image from "next/image";
import ConferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";

const ConferencePage = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt="Our story pic"
          quality={100}
          placeholder="blur"
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Globomantics Conference</h1>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/speakers">
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/sessions">
          View Sessions
        </Link>
      </h2>
    </>
  );
};

export default ConferencePage;
