import Navbar from "@/app/components/Navbar"
import Link from "next/link"

function Home() {
    return (
        <div>
            <Navbar />
            <div className="block">
                <Link href="/info" className="image-block">
                    “Oyoq kiyimlarimiz 5 ming so‘mdan. Bundan <br />  biroz foyda ham qoladi” (video)
                </Link>
                <div className="cards">
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolor officiis aspernatur omnis, id provident doloribus officia quidem reprehenderit.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolor officiis aspernatur omnis, id provident doloribus officia quidem reprehenderit.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolor officiis aspernatur omnis, id provident doloribus officia quidem reprehenderit.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolor officiis aspernatur omnis, id provident doloribus officia quidem reprehenderit.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolor officiis aspernatur omnis, id provident doloribus officia quidem reprehenderit.</div>
                </div>
            </div>
        </div>
    )
}

export default Home