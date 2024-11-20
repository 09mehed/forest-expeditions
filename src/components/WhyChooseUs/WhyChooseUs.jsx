import Choose from "./Choose";
import PropTypes from "prop-types";


const WhyChooseUs = ({ adventureData }) => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
                Why Choose Us?
            </h2>
            <div className="bg-green-200 p-3 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    adventureData.map((service) => <Choose key={service.id} service={service}></Choose>)
                }
            </div>
        </div>
    );
};
WhyChooseUs.propTypes = {
    adventureData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default WhyChooseUs;


// {/* <section className="py-12 bg-green-50">
//             <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
//                     Why Choose Us?
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         <div
//                             key={service.id}
//                             className="bg-white rounded-lg shadow-md p-6 text-center"
//                         >
//                             <img
//                                 src={service.icon}
//                                 alt={service.title}
//                                 className="w-16 h-16 mx-auto mb-4 rounded-full"
//                             />
//                             <h3 className="text-xl font-semibold text-green-700 mb-2">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600">{service.description}</p>
//                         </div>

//                     })}
//                 </div>
//             </div>
//         </section> */}