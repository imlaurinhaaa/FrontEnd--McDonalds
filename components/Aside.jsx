import styles from "../styles/Aside.module.css";
import Image from "next/image";

export default function Aside({title, image}) {
    return (
            <aside className={styles.aside}>
                <h1 className={styles.imgTitle}>{title}</h1>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} src={image} alt="" />
                </div>
            </aside>
    );
}