import styles from '../../../styles/users-page/card-component.module.scss'
import code from "../../../assets/code-logo.png"
export default function CardComponent(props){
    return(
        <nav className={styles.CardComponentMainBox}>
            <section className={styles.CardContentBox}>
                
                <img className={styles.image} src={props.item.picture.large} alt="" />
                <h3>{props.item.name.first} {props.item.name.last}</h3>
                
            </section>

            <section className={styles.CardContentBox}>
                <p>E-mail: {props.item.email}</p>
                <p>Nome de usuário: {props.item.login.username}</p>
                <p>Idade: {props.item.dob.age}</p>
            </section>
            
        </nav>
    )
}