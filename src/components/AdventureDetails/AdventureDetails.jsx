import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AdventureDetails = () => {
    const {title, image, shortDescription, category, cost, availability, location,duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize,specialInstructions,} = useLoaderData()
    const [showModal, setShowModal] = useState(false);

    const handleTalk = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            window.open("https://meet.google.com", "_blank");
        } else {
            setShowModal(true);
        }
    };
    
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                        {title}
                    </h1>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Adventure Overview</h2>
                    <p className="text-gray-700">{shortDescription}</p>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold">Details:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>
                                <strong>Category:</strong> {category}
                            </li>
                            <li>
                                <strong>Location:</strong> {location}
                            </li>
                            <li>
                                <strong>Duration:</strong> {duration}
                            </li>
                            <li>
                                <strong>Adventure Level:</strong> {adventureLevel}
                            </li>
                            <li>
                                <strong>Cost:</strong> ${cost}
                            </li>
                            <li>
                                <strong>Max Group Size:</strong> {maxGroupSize}
                            </li>
                            <li>
                                <strong>Availability:</strong> {availability ? "Available" : "Not Available"}
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Included Items</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {includedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold">Eco-Friendly Features</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold">Special Instructions</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            {specialInstructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <button onClick={handleTalk} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg">
                    Talk with Expert
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 text-center">
                        <h2 className="text-2xl font-bold mb-4">Consultation Time</h2>
                        <p className="text-gray-700 mb-4">
                            Our experts are available from <strong>10:00 AM to 8:00 PM</strong>.
                            Please visit us during that time!
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdventureDetails;