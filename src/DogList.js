import DogCard from './DogCard'

function DogList(props){
    const dogCards = props.dogs.map(dog => {
        return (
            <DogCard 
            name={dog.name}
            description={dog.description}
            imageUrl={dog.imageUrl}
        />
        )
    })
    return(
        <ul className='dogs'>
            {dogCards}
        </ul>
    )
}

export default DogList;