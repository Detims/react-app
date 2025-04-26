import { useState } from "react"
import GeneralInfo from "./GeneralInfo"

export default function Resume(props) {
    const [completed, setCompleted] = useState(false)
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleClick = () => {
        setCompleted(!completed)
    }

    return (
        !completed ?
        <form>
            <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}/>
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>
        : 
        <>
            <button onClick={handleClick}>Edit</button>
        </>
    )
}