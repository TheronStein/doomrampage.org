import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function List() {
    link.map(link =>
        <li>{<Link /></Link>nk />}</li>
      );
    return <ul>{navLinks}</ul>;
}

export default function Navigation({ children }) {
    return (
        <>
        <div className={`${styles.links}`}>
          <ul>
            <li>
            <a
              href="/src/wads"
              className={`{styles.doomLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
            <Image
              className={`{styles.soon}`}
              src="/images/words/wads.png"
              alt="wads"
              width={232}
              height={60}
              priority
            />
            </a>
            </li>
            <li>
            <a
              href="https://discord.com/invite/WjwE27NwBm"
              className={`{styles.doomLink}`}
            >
            <Image
              className={`{styles.doomLink}`}
              src="/images/words/discord.png"
              alt="wads"
              width={368}
              height={60}
              priority
            />
            </a>
            </li>
            <li>
              {/* <a
                href="/pages/servers"
                className={`{styles.doomLink}`}
              >
              </a> */}
            <Image
              className={`{styles.doomLink}`}
              src="/images/words/servers.png"
              alt="servers"
              width={396}
              height={60}
              priority
            />
            </li>
            <li>
            <Image
              className={`{styles.doomLink}`}
              src="/images/words/events.png"
              alt="events"
              width={336}
              height={60}
              priority
            />
            </li>
            <li>
            <Image
              className={`{styles.doomLink}`}
              src="/images/words/leagues.png"
              alt="leagues"
              width={400}
              height={60}
              priority
            />
            </li>
          </ul>
        </div>
        </>
    )
}