import Image from "next/image";
import styles from "./bolsa.module.css"
import Link from "next/link"
export default async function Bolsa({ params }) {

    const response = await fetch("http://localhost:3000/api/" + params.id);

    const data = await response.json();
    return (
        <div key={data.id}>
            <br />
            <div className={styles.container}>
                <p className={styles.bolsa}>{data.bolsa}</p>
                <div>
                    <Image
                        width={300}
                        height={300}
                        src={data.img} />
                </div>
                <p className={styles.preco}>R${data.preco}</p>
                <p className={styles.cor}>{data.cor}</p>
                <p className={styles.tam}>{data.tamanho}</p>
                <Link className={styles.link} href="/">
            Voltar
            </Link>
            </div>
        </div>
    );
}