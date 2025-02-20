import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Content from "../components/Content";
import Aside from "../components/Aside"

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>McDonald’s Brasil</h1>
                <Image className={styles.imgLogo} src={logo} alt=""/>
            </header>
            <main className={styles.main}>
            <Content />
            <Aside />
            </main>
            <footer className={styles.footer}>
                <p className={styles.footerTitle}>&copy; 2025 McDonald's Brasil. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}