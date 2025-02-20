import styles from "../styles/Content.module.css";

export default function content() {
  return (
<section className={styles.esq}>
                    <div className={styles.content}>
                        <h1 className={styles.contentTitle}>Big Mac 🍔</h1>
                        <p className={styles.contentText}>O Big Mac é um hambúrguer icônico do McDonald's, composto por dois hambúrgueres de carne bovina, alface, queijo cheddar, cebola, picles e molho especial, em um pão com três partes. Criado em 1967 por Jim Delligatti, ele se tornou um sucesso global, destacando-se pelo sabor equilibrado e o molho especial.</p>
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.contentTitle}>Mc Crispy Chicken Legend 🍗</h1>
                        <p className={styles.contentText}>O Mc Crispy Chicken Legend é uma versão mais sofisticada do sanduíche de frango do McDonald's. Com filé de peito de frango empanado e crocante, alface, queijo, cebola caramelizada e molho especial, ele oferece uma combinação de sabores equilibrada e robusta. Seu pão macio e levemente dourado complementa a crocância do frango e a doçura da cebola. Uma opção gourmet e popular, especialmente em muitos países.</p>
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.contentTitle}>Quarteirão 🧀</h1>
                        <p className={styles.contentText}>O Quarteirão é um sanduíche clássico do McDonald's, feito com um hambúrguer de carne bovina de 1/4 de libra (113g), queijo cheddar, cebola picada, picles, mostarda e ketchup, em um pão macio e levemente tostado. A versão mais popular é o Quarteirão com Queijo, mas há variações regionais com diferentes queijos e molhos. Conhecido por seu sabor de carne intenso e textura espessa, é uma opção robusta e apreciada por quem busca um sanduíche mais substancial.
                        </p>
                    </div>
                </section>
  );
}