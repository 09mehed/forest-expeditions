import ExploreCard from "./ExploreCard";
import PropTypes from 'prop-types';

const Explore = ({ servicesData }) => {

    return (
        <div className="w-11/12 mx-auto py-5">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
                Explore Our Adventures
            </h2>
            <p className="text-center text-gray-600 mb-6">
                Experience the thrill of nature and discover exciting adventures tailored just for you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    servicesData.map((service) => <ExploreCard key={service.id} service={service}></ExploreCard>)
                }
            </div>
        </div>
    );
};
Explore.propTypes = {
    servicesData: PropTypes.arrayOf()
};

export default Explore;