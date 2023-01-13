import CodeLogo from '../../../assets/code-logo.png'
import Link from 'next/link'
import cat from "../../../assets/menu-icons/cat-icon.png"
import dog from "../../../assets/menu-icons/dog-icon.png"
import user from "../../../assets/menu-icons/user-icon.png"
import client from "../../../assets/menu-icons/client-icon.png"
import Image from 'next/image'
import styles from '../../../styles/side-menu/side-menu.module.scss'
import { useState } from 'react'

export default function SideMenu({ setSelect }) {
    return (
        <div className={styles.menuMainBox}>
            <div>
                <Image className={styles.img} src={CodeLogo}></Image>
                
                <h4>Desafio ShareEnergy</h4>
            </div>

            <ul>
                <Link href='' onClick={() => { setSelect(0) }} className={styles.li}><Image className={styles.img} src={user} alt="" /><li>Usuários</li></Link>
                <Link href='' onClick={() => { setSelect(1) }} className={styles.li}><Image className={styles.img} src={cat} alt="" /><li>Gatos</li></Link>
                <Link href='' onClick={() => { setSelect(2) }} className={styles.li}><Image className={styles.img} src={dog} alt="" /><li>Cachorros</li></Link>
                <Link href='' onClick={() => { setSelect(3) }} className={styles.li}><Image className={styles.img} src={client} alt="" /><li>Clientes</li></Link>
            </ul>
        </div>
    )
}