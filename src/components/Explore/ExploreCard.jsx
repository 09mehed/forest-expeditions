import PropTypes from 'prop-types';

const ExploreCard = ({service}) => {
    const {title, description, image} = service
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-green-800 mb-2">
                                {title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {description}
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition w-full">
                                Learn More
                            </button>
                        </div>
                    </div>
    );
};
ExploreCard.propTypes = {
    service: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};

export default ExploreCard;