import {  useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Explore from "../Explore/Explore";

const Home = () => {
    const {adventureData, servicesData} = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Forest Expeditions | Home</title>
            </Helmet>
            <Banner adventureData={adventureData} />
            <WhyChooseUs adventureData={adventureData}></WhyChooseUs>
            <Explore servicesData={servicesData}></Explore>
        </div>
    );
};

export default Home;
