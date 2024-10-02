import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          United by a love for <span className={classes.highlight}>Food</span>
        </h1>
        <p>Become part of our community and showcase your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Why Join Us?</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A tasty dish" />
            <p>Share your recipes & discover new favorites</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="A group of people cooking together"
            />
            <p>Connect with fellow food enthusiasts</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A cooking event with many people" />
            <p>Attend members-only events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
