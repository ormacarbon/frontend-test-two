import CodeLogo from '../../../assets/code-logo.png'
import Link from 'next/link'
import cat from "../../../assets/menu-icons/cat-icon.png"
import dog from "../../../assets/menu-icons/dog-icon.png"
import user from "../../../assets/menu-icons/user-icon.png"
import client from "../../../assets/menu-icons/client-icon.png"
import Image from 'next/image'
import styles from '../../../styles/side-menu/side-menu.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
//import Theme from '@/pages/contexts/contexts'

export default function SideMenu({ setSelect }) {

    const [t, setT] = useContext(Theme)
    return (
        <div className={styles.menuMainBox}>
            <div>
                <Image className={styles.img} src={CodeLogo} alt="logo"></Image>
                
                <h4>Teste FrontEnd</h4>
            </div>

            <ul>
                <Link href='' onClick={() => { setSelect(0) }} className={styles.li}><Image className={styles.img} src={user} alt="usuários" /><li>Usuários</li></Link>
                <Link href='' onClick={() => { setSelect(1) }} className={styles.li}><Image className={styles.img} src={cat} alt="gatos" /><li>Gatos</li></Link>
                <Link href='' onClick={() => { setSelect(2) }} className={styles.li}><Image className={styles.img} src={dog} alt="cachorros" /><li>Cachorros</li></Link>
                <Link href='' onClick={() => { setSelect(3) }} className={styles.li}><Image className={styles.img} src={client} alt="clientes" /><li>Clientes</li></Link>
                <button>dsdsd</button>
            </ul>

            <button onClick={() => seta(false)}>teste</button>
        </div>
        
    )
}