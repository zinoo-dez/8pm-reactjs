import { useEffect, useState } from "react"

import { UserTypes } from "../type/type"
import Button from "../components/Button"
import Card from "../components/Card"

function Home() {
    // const [hello, setHello] = useState<string>("Hello World!")
    // setHello("Hello World 2!")
    // console.log(hello)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [users, setUsers] = useState<UserTypes[]>([])
    const getUsers = async () => {
        // new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve(true)
        //   }, 10000)
        // })
        setIsLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsers(data)
        setIsLoading(false)
    }
    // useEffect is dom initial render
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <div>
                {/* <MyCarousel /> */}
            </div>
            {
                isLoading && <p className="bg-red-200 text-center w-full text-red-700 p-5 text-2xl text-bold">Loading...</p>
            }
            <div className="md:grid md:grid-cols-3 gap-4 p-5 text-center">
                {
                    users.length > 0 && users.map((user, index) => (
                        <Card key={index} user={user} />
                    ))
                }
            </div>
            <Button value="add" color="red" />
            <Button value="edit" color="blue" />
            <Button value="delete" color="green" />
            <Button value="see mores" color="pink" />
        </div>
    )
}

export default Home