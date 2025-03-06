import { MyCarousel } from "../components/MyCarousel"

function About() {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            {/* <MyCarousel /> */}
            <div className="hover-container">
                <h1 className="explosive-text">Hover Over Me</h1>
            </div>
        </div>
    )
}

export default About