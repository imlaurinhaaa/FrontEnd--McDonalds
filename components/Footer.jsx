import styles from "../styles/Footer.module.css";

export default function Footer({title}) { 
    return (
        <footer className={styles.footer}>
            <p className={styles.footerTitle}>{title}</p>
        </footer>
    ); 
}