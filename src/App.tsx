import React, {MouseEvent} from 'react';
import {Button} from "./components/Button";
// import {NewComponent} from "./NewComponent";
// import {Cars} from "./Cars";

function App() {
    // const [students, setStudents] = useState([
    //         {id: 1, name: "James", age: 8},
    //         {id: 2, name: "Robert", age: 18},
    //         {id: 3, name: "John", age: 28},
    //         {id: 4, name: "Michael", age: 38},
    //         {id: 5, name: "William", age: 48},
    //         {id: 6, name: "David", age: 58},
    //         {id: 7, name: "Richard", age: 68},
    //         {id: 8, name: "Joseph", age: 78},
    //         {id: 9, name: "Thomas", age: 88},
    //         {id: 10, name: "Charles", age: 98},
    //         {id: 11, name: "Christopher", age: 100},
    //     ]
    // )

    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]

    // const myFirstSubscriber = () => {
    //     console.log("Hello!")
    // }
    // const mySecondSubscriber = () => {
    //     console.log("Hello, I'm second!")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(`Hello ${name}`)
    // }

    const Button1Foo = (name: string, age: number) => {
        console.log(`Hello ${name}, ${age}`)
    }

    const Button2Foo = () => {
        console.log("Hello Mila")
    }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    return (
        //<NewComponent students={students}/>
        // <Cars cars={topCars}/>
        <>
            {/*<button onClick={() => {*/}
            {/*    console.log("Hello")*/}
            {/*}}>Subscribe 1*/}
            {/*</button>*/}

            {/*<button onClick={event => onClickHandler("Tanya")}>Subscribe 1</button>*/}
            {/*<button onClick={event => onClickHandler("Mila")}>Subscribe 2</button>*/}

            <Button name={"YouTube channel 1"} callBack={()=>Button1Foo("Tanya", 26)}/>
            <Button name={"YouTube channel 2"} callBack={Button2Foo}/>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}
        </>

    );
}

export default App;