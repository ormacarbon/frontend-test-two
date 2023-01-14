/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/users-page/card-component.module.scss'
import code from "../../../assets/code-logo.png"
import { useContext } from 'react'
import Theme from '../../contexts/contexts'

export default function CardComponent(props){
    const {theme, toggleTheme} = useContext(Theme)
    
    return(
        <nav className={styles.CardComponentMainBox}>
            <section className={styles.CardContentBox}>
                
                <img className={styles.image} src={props.item.picture !== undefined? props.item.picture.large: code} alt="" />
                <h3 className={theme? styles.light: styles.dark}>{props.item.name.first} {props.item.name.last}</h3>
                
            </section>

            <section className={styles.CardContentBox}>
                <p className={theme? styles.light: styles.dark}>E-mail: {props.item.email}</p>
                <p className={theme? styles.light: styles.dark}>Nome de usuário: {props.item.login.username}</p>
                <p className={theme? styles.light: styles.dark}>Idade: {props.item.dob.age}</p>
            </section>
            
        </nav>
    )
}