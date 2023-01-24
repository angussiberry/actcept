import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Home() {
    const [featuredEvent, setFeaturedEvent] = useState([]);
    useEffect(() => {
        // const random = 1 + Math.random() * (3 - 1);
        const fetchData = async () => {
            try {
                const response = await fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events?event_id=1');
                const data = await response.json();
                setFeaturedEvent(data);
                console.log(featuredEvent)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="App">
            <Header />
            {/* <Banner
                img="https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg"
                title="Featured event"
                desc="long test loren"
                date="10-12-2023" /> */}
            {/* {console.log(featuredEvent[0].image_url)} */}
            <Banner
                img={featuredEvent[0].image_url}
                title={featuredEvent[0].event_name}
                desc={featuredEvent[0].event_description}
                date="10-12-2023" />
            <Content />
        </div>
    );
}

export default Home;