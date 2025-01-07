import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TESTIMONIALS_LIST } from '../utils/helper';
import SubHeading from "../common/SubHeading"
import Heading from "../common/Heading"
import Description from '../common/Description';
const Testimonials = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 1,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };
  return (
    <div id='testimonials' className='pt-[175px] bg-darkBlue pb-[210px] max-md:py-24 max-sm:pt-6 max-sm:pb-12'>
      <div id='solution' className='max-w-[1172px] mx-auto px-4'>
        <Heading text="Testimonials" myClass="pb-10 max-sm:pb-6" />
        <div>
          <Slider {...settings}>
            {TESTIMONIALS_LIST.map((obj, i) => (
              <div key={i} className='bg-gradient-to-b from-darkSky rounded-3xl px-6 pt-6 max-[500px]:h-[264px] sm:h-[289px] max-sm:px-4 max-sm:pt-4 !flex flex-col justify-between'>
                <div>
                  <SubHeading text={obj.title} />
                  <Description text={obj.description} myClass="pt-[8.39px] max-sm:pb-8 max-[500px]:pb-0" />
                </div>
                <div className='flex items-center gap-2'>
                  <img src={obj.image} alt={obj.imageAlt} className='h-[60px] max-sm:h-10' />
                  <div>
                    <p className='font-medium text-xl leading-6 text-white max-sm:text-base max-sm:leading-4'>{obj.name}</p>
                    <Description text={obj.position} myClass="max-sm:!text-[10px]" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials