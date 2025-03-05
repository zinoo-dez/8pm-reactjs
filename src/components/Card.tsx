import { UserTypes } from '../type/type'

export default function Card(props: { user: UserTypes }) {
    return (
        <div className='bg-slate-200 p-4 rounded mb-5 md:mb-0'>
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <p>{props.user.address.street}</p>
            <p>{props.user.website}</p>
            <p>{props.user.phone}</p>
        </div>
    )
}
