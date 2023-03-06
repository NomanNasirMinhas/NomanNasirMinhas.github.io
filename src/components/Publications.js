import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PublicationsCard from "./PublicationsCard"
import hr from "../assets/curve-hr.svg"

export default function Publications() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Publications</h1>
            <div className="mt-4">
                <Slider {...settings}>
                <PublicationsCard name="iTrace: When IOTA Meets COVID-19 Contact Tracing" 
                                    in="IEEE IT Professional" on="Jan.-Feb. 2022, pp. 56-62, vol. 24" doi="https://doi.ieeecomputersociety.org/10.1109/MITP.2021.3134896"/>
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}