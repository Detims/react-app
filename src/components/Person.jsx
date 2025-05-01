import { useState } from "react"
import { Link } from "react-router-dom"

export default function Person(props) {
    const [person, setPerson] = useState({
        name: "Joe",
        age: 100,
    })

    // proper way to handle state changes
    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({
            ...prevPerson, age: prevPerson.age + 1
        }))
    }   

    return(
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Click Me</button>
            <Link to="/">Go back</Link>
        </>
    )
}