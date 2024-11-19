import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    return (
        <div>
            <Helmet>
                <title>Forest Expeditions | Update Profile</title>
            </Helmet>
            <div className="w-11/12 mx-auto py-10 space-y-16">
                {/* User Profile Section */}
                <section className="text-center">
                    <h1 className="text-4xl font-bold mb-4">User Profile</h1>
                    <p className="text-gray-600 text-lg">Welcome to your profile page! Manage your personal details, preferences, and adventure history.</p>
                </section>

                {/* Section 1: Testimonials */}
                <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-6">What Our Adventurers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Testimonial 1 */}
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                The Amazon Jungle Expedition was a once-in-a-lifetime experience! Everything was perfectly organized, and the eco-friendly approach was inspiring.
                            </p>
                            <h3 className="text-right mt-4 font-semibold">— John Doe</h3>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                I loved the guided forest trek. It was thrilling, challenging, and totally worth it. Highly recommended for adventure seekers!
                            </p>
                            <h3 className="text-right mt-4 font-semibold">— Sarah Lee</h3>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p className="text-gray-700 italic">
                                Amazing experience! The team was professional, and I felt safe throughout the trip. Can not wait for my next adventure.
                            </p>
                            <h3 className="text-right mt-4 font-semibold">— Alex Johnson</h3>
                        </div>
                    </div>
                </section>

                {/* Section 2: FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {/* Question 1 */}
                        <div>
                            <h3 className="text-xl font-semibold">What should I pack for my adventure?</h3>
                            <p className="text-gray-600">We recommend packing lightweight, long-sleeved clothing, insect repellent, and any personal items you may need. All essential gear will be provided.</p>
                        </div>

                        {/* Question 2 */}
                        <div>
                            <h3 className="text-xl font-semibold">Are adventures suitable for beginners?</h3>
                            <p className="text-gray-600">Yes, we offer adventures for all skill levels. Check the adventure level in the details section to find the best fit for you.</p>
                        </div>

                        {/* Question 3 */}
                        <div>
                            <h3 className="text-xl font-semibold">How do I book an adventure?</h3>
                            <p className="text-gray-600">You can book an adventure directly from our website. Simply select the adventure and follow the steps to confirm your booking.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateProfile;