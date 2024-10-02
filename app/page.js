import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Discover delicious meals on Bite Buddy.</h1>
            <p>
              Your go-to place for delightful meals and culinary inspiration.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            Bite Buddy is a platform for food enthusiasts to share their
            favorite recipes and culinary tips. It’s a space to discover new
            dishes and connect with a community of food lovers.
          </p>
          <p>
            Join Bite Buddy to explore delicious meals and engage with fellow
            foodies who share your passion for cooking!
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Bite Buddy?</h2>
          <p>
            Bite Buddy brings together a vibrant community of food lovers,
            making it easy to share recipes and find inspiration. Whether you
            are looking for quick meals or gourmet creations, you will find it
            all here!
          </p>
          <p>
            With Bite Buddy, every meal is an opportunity to connect and create
            delicious memories.
          </p>
        </section>
      </main>
    </>
  );
}
