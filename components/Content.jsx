import styles from "../styles/Content.module.css";
import Image from "next/image";


export default function Content({ title, text, image }) {
    return (
            <div className={styles.content}>
                <div className={styles.texts}>
                    <h1 className={styles.contentTitle}>{title}</h1>
                    <p className={styles.contentText}>{text}</p>
                </div>
                <Image className={styles.makeupImg} src={image} alt="" />
            </div>
    );
}