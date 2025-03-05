import { ButtonProps } from '../type/type'

export default function Button(props: ButtonProps) {
    console.log(props)
    return (
        <button className={props.color === "red" ? `bg-red-500 text-white px-4 py-2 rounded capitalize m-2` : props.color === "blue" ? `bg-blue-500 text-white px-4 py-2 rounded capitalize m-2` : props.color === "green" ? `bg-green-500 text-white px-4 py-2 rounded capitalize m-2` : `bg-pink-500 text-white px-4 py-2 rounded capitalize m-2`}>{props.value}</button>
    )
}
