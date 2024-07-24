import styles from "./menu.module.css";
import Image from "next/image";
import Logo from "./LogoMB.png"
export default function Menu() {
    return (
        <header>
            <nav className={styles.cabecalho}>
                <div >
                    <Image
                        width={100}
                        height={100}
                        src={Logo}
                    />
                </div>
                <div>
                    <h1>Marizinha e Bravas SHOP</h1>  
                </div>
               
            </nav>
        </header>
    )
}