import PropTypes from "prop-types";
const Choose = ({service}) => {
    const { title, shortDescription, image } = service;
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <img
                src={image}
                alt={title}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
            <p className="text-gray-600">{shortDescription}</p>
        </div>
    );
};
Choose.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired, 
        shortDescription: PropTypes.string.isRequired, 
        image: PropTypes.string.isRequired,
    }).isRequired,
};


export default Choose;