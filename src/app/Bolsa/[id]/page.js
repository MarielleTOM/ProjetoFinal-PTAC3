import Image from "next/image";
import styles from "./bolsa.module.css"
export default async function Bolsa({ params }) {

    const response = await fetch("http://localhost:3000/api/" + params.id);

    const data = await response.json();
    return (
        <div key={data.id}>
            <br />
            <div className={styles.container}>
                <p>{data.bolsa}</p>
                <div>
                    <Image
                        width={300}
                        height={300}
                        src={data.img} />
                </div>
                <p>R${data.preco}</p>
                <p>{data.cor}</p>
                <p>{data.tamanho}</p>
            </div>
        </div>
    );
}