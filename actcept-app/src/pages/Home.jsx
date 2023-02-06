import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Home() {
    const [featuredEvent, setFeaturedEvent] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events/all');
                const data = await response.json();
                const newData = data.filter(obj => obj.event_confirmation === 'accepted')
                const random = Math.floor(Math.random() * ((newData.length)));
                setFeaturedEvent([newData[random]]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="App">
            <Header />
            {featuredEvent.length ? <Banner
                img={featuredEvent[0].image_url}
                title={featuredEvent[0].event_name}
                desc={featuredEvent[0].event_description}
                date={featuredEvent[0].event_date}
                id={featuredEvent[0].event_id} /> : null}

            <Content />
            <Footer />
        </div>
    );
}

export default Home;