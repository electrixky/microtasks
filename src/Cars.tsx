type CarsPropsType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}

export const Cars = (props: CarsPropsType) => {
    return (
        <ul>
            {
                props.cars.map((car,index)=>{
                    return <li key={index}>
                        <span>{index+1}. </span>
                        <span>{car.manufacturer}</span>
                        <span>, model: {car.model}</span>
                    </li>
                })
            }
        </ul>
    )
}