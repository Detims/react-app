export default function GeneralInfo({generalInfo, setGeneralInfo}) {
    const handleChange = (event) => {
        setGeneralInfo({ ...generalInfo, [event.target.id]: event.target.value})
    }
    
    return (
        <div>
            <input
                type="text"
                id="name"
                value={generalInfo.name}
                onChange={(event) => handleChange(event)}
                placeholder="Full Name"
            />
        </div>
    )
}