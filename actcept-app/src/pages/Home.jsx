import Banner from "../components/Banner";
import Content from "../components/Content";
import Header from "../components/Header";

function Home() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Content />
        </div>
    );
}

export default Home;