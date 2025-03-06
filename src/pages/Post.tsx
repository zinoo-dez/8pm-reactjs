import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { MyCarousel } from "../components/MyCarousel"

function Post() {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState()
    console.log('posts', posts)
    const fetchPost = async () => {
        setLoading(true)
        const data = await fetch('http://jsonplaceholder.typicode.com/posts')
        const posts = await data.json()
        setPosts(posts)
        setLoading(false)
    }
    useEffect(() => {
        fetchPost()
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            {/* <MyCarousel /> */}
            <div className="p-5">
                <h3>All Posts</h3>
                <div className="md:grid grid-cols-3 gap-5 shadow-xl bg-slate-200">
                    {posts && posts.slice(0, 30).map((post: any) => (
                        <div key={post.id} className="p-4 bg-white shadow rounded-md">
                            <h2 className="text-2xl font-bold">{post.title}</h2>
                            <p>{post.body}</p>
                            <Link to={`/post/${post.id}`} className="px-2 py-1 bg-red-700 rounded-md text-white">View Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Post