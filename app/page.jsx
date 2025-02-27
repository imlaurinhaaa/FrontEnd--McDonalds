import styles from "../styles/Home.module.css";
import Content from "../components/Content";
import Aside from "../components/Aside"
import rareBeauty from "../public/rareBeauty.jpg";
import dior from "../public/dior.jpg";
import fentyBeauty from "../public/fentyBeauty.jpg";
import makeups from "../public/makeups.jpg";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Beauty Internacional Makeup 💋✨</h1>
            </header>
            <main className={styles.main}>
            <section className={styles.esq}>
                <Content title="Rare Beauty 🎀" text="A Rare Beauty é uma marca de maquiagem criada pela talentosa Selena Gomez, que traz produtos inovadores e inclusivos para realçar a beleza única de cada pessoa! 💖✨ Com foco em fórmulas leves, de alta performance e adequadas para todos os tons de pele, a Rare Beauty é perfeita para quem busca uma maquiagem que valorize a autenticidade e o conforto. 🌈💄 #BeRare #RareBeauty" image={rareBeauty} />
                <Content title="Dior Makeup 💅🏼" text="A Dior é sinônimo de elegância e sofisticação no mundo da beleza e da moda! 💅✨ Com produtos icônicos e de alta qualidade, a marca oferece maquiagens que realçam a beleza de forma luxuosa e atemporal. 💖💄 Da pele perfeita ao olhar marcante, Dior traz inovação e glamour em cada produto. 🌟 #DiorBeauty #ElegânciaSempre" image={dior} />
                <Content title="Fenty Beauty ☁️" text="Fenty Beauty, criada pela incrível Rihanna, é uma marca revolucionária que celebra a diversidade e a inclusão! 💖🌍 Com uma gama de tons para todos os tipos de pele, Fenty tornou-se sinônimo de produtos de alta performance e inovação. 💄✨ Se você busca uma maquiagem que realce sua beleza natural e te faça brilhar, Fenty é a escolha certa! 🌟 #FentyBeauty #BeFenty" image={fentyBeauty} />
                </section>
                <section className={styles.dir}>
                <Aside title="Perfect Combo 💋✨💕" image={makeups} />
                </section>
            </main>
            <footer className={styles.footer}>
                <p className={styles.footerTitle}>&copy; 2025 Beauty Internacional Makeup. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}