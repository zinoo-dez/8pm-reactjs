import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Post from "./pages/Post"
import PostDetails from "./pages/PostDetails"
import { Nav } from "./components/Nav"

function App() {
  return (
    <div className=''>
      <Routes>
        <Route element={<Nav />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App