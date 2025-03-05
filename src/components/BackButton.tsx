import { useNavigate } from "react-router-dom"

function BackButton() {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={back} className="bg-blue-500 text-white px-4 py-2 rounded">Back</button>
        </div>
    )
}

export default BackButton