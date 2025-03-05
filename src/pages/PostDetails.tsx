import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"

function PostDetails() {
    const { id } = useParams()
    console.log(id)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [user, setUser] = useState<any>()
    const [post, setPost] = useState<any>()
    console.log('user', user)
    const fetchSinglePost = async () => {
        setIsLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        setPost(data)
        setIsLoading(false)
    }
    const fetchPostUser = async () => {
        setIsLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const data = await res.json()
        setUser(data)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchSinglePost()
        fetchPostUser()
    }, [])
    if (isLoading) {
        return <p className="bg-red-200 text-center w-full text-red-700 p-5 text-2xl text-bold">Loading...</p>
    }
    return (
        <div>
            <BackButton />
            <div>Post-{id}  Details </div>
            {
                post ? (
                    <div className="text-center shadow-lg p-5">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                        <p>{post.body}</p>
                        <h4 className="text-xl font-bold">User Details</h4>
                        <p>Posted By: <span className="text-bold text-red-400 text-lg">{user?.name ?? "Unknown"}</span></p>
                        <p>Worked at: <span className="text-bold text-red-400 text-lg">{user?.company.name ?? "Unknown"}</span></p>
                        <p>{user?.email ?? ''}</p>
                        <p>{user?.phone ?? ''}</p>
                        <p>{user?.website ?? ''}</p>
                    </div>
                ) :
                    (<p className="bg-red-200 text-center w-full text-red-700 p-5 text-2xl text-bold">Something went wrong</p>)
            }
        </div >
    )
}

export default PostDetails