export default function SingleCoffee({ name, price, description }) {



    const exampleProps = {
        description: 'lkadjlsadfs',
        name: 'Cafe Cubano',
        price: 'Mucho Mula'
    }

    // const description = exampleProps.description
    // const name = exampleProps.name
    // const price = exampleProps.price

    //const {description, name, price } = exampleProps // destructuring

    //
    // console.log('props here-> ', props)
    return(
        <div className="menu-items__item">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG" 
        alt="" 
        />    
    <div>
    <h3>{props.name}</h3>
    <span>Price: {props.price}</span>
    <p>{props.description}</p>
    </div>
    </div>
    )
}