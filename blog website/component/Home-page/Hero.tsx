import Image from "next/image";
import Styles from "./hero.module.css";
const Hero = () => {
  return (
    <section className={Styles.hero}>
      <div className={Styles.image}>
        <Image
          src={"/images/site/hero-img.jpg"}
          alt="image in box"
          height={300}
          width={300}
        />
      </div>
      <div>
        <h1>Hey, I'm Mahi</h1>
        <p>
          I blog about web development - especially frontend frameworks like
          Angular & React
        </p>
      </div>
    </section>
  );
};

export default Hero;
