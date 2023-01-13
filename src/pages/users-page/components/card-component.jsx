
import code from "../../../assets/code-logo.png"
export default function CardComponent(props){
    return(
        <div className='card-component-main-box' id='card'>
            <section className='card-content-box'>
                
                <img src={props.item.picture.large} alt="" />
                <h3>{props.item.name.first} {props.item.name.last}</h3>
                
            </section>

            <section className='card-content-box'>
                <p>E-mail: {props.item.email}</p>
                <p>Nome de usuário: {props.item.login.username}</p>
                <p>Idade: {props.item.dob.age}</p>
            </section>
            
        </div>
    )
}