import styles from "../styles/Aside.module.css";
import Image from "next/image";
import fries from "../public/fries.png";

export default function Aside() {
    return (
    <section className={styles.dir}>
                    <aside className={styles.aside}>
                        <div className={styles.imgContainer}>
                        <Image className={styles.img} src={fries} alt="" />
                        </div>
                    </aside>
                </section>
                );
}