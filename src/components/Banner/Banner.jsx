import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const Banner = ({ services }) => {
    return (
        <div className="w-11/12 mx-auto py-5">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                modules={[Navigation, Pagination]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id}>
                        <div className="relative w-[100%] h-[500px]">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover rounded-lg bg-cover bg-no-repeat bg-center"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 text-white text-center rounded-lg p-4">
                                <div>
                                    <h3 className="font-semibold text-5xl mb-2">{service.title}</h3>
                                    <ul className="list-disc list-inside text-white text-center text-xl">
                                        {service.ecoFriendlyFeatures.map((feature, index) => (
                                            <li className="list-none" key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="pt-5">
                                        <NavLink to={`details/${service.id}`} className="bg-blue-500 px-5 py-3 rounded-lg">
                                            Explore Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

Banner.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            ecoFriendlyFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Banner;
