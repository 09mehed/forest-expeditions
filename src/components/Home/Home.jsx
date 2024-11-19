import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Forest Expeditions | Home</title>
            </Helmet>
            <Banner services={services} />
        </div>
    );
};

export default Home;
