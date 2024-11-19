import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner services={services} />
        </div>
    );
};

export default Home;
