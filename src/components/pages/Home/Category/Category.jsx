import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../../../../src/assets/home/slide1.jpg"
import img2 from "../../../../../src/assets/home/slide2.jpg"
import img3 from "../../../../../src/assets/home/slide3.jpg"
import img4 from "../../../../../src/assets/home/slide4.jpg"
import img5 from "../../../../../src/assets/home/slide5.jpg"
import SectionTitle from '../../../Section/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle
        heading={"Order online"}
        subHeading={"From 11:00am to 10:00pm"}
        ></SectionTitle>

        <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide><img src={img1} alt="" />
                <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                <h3 className='text-4xl uppercase text-center text-white -mt-16'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                <h3 className='text-4xl uppercase text-center text-white -mt-16'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                <h3 className='text-4xl uppercase text-center text-white -mt-16'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />
                <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                
            </Swiper>
       </section>
    );
};

export default Category;