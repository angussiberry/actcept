import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Home() {
    // const [featuredEvent, setFeaturedEvent] = useState([]);
    // useEffect(() => {
    //     const random = 1 + Math.random() * (10 - 1);
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:8080/events?event_id=${random}`);
    //             const data = await response.json();
    //             setFeaturedEvent(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    return (
        <div className="App">
            <Header />
            <Banner
                img="https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg"
                title="Featured event"
                desc="long test loren"
                date="10-12-2023" />
            <Content />
        </div>
    );
}

export default Home;