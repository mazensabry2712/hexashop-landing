import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* best practice make it an array */}
      <div className={styles.social}>
        <Image
          src="/images/facebook.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Hexashop Facebook Link"
        />
        <Image
          src="/images/instagram.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Hexashop instagram Link"
        />
        <Image
          src="/images/linkedin.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Hexashop linkedin Link"
        />
        <Image
          src="/images/whatsapp.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Hexashop telegram Link"
        />
        <Image
          src="/images/twitter.png"
          width={20}
          height={20}
          className={styles.icon}
          alt="Hexashop twitter Link"
        />
      </div>
        <div>©2024 developed by ENG/ Mazen Sabry. All rights reserved</div>
    </div>
  );
};

export default Footer;
