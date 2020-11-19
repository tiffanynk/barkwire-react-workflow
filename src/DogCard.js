import './DogCard.css';

function DogCard(props){
    return(
        <li>
            <img src={props.imageUrl} alt='dog-pic'/>
            <section>
                <h2>{props.name}</h2>
    <p>{props.description}</p>
            </section>
        </li>
    )
}

export default DogCard;