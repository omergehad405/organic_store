import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";
import "../HomePage.css";

function Testimonials() {
  const Testimonials = [
    {
      id: 1,
      clientImg: "./people/testi1.jpg",
      clientReview:
        "It was my first time to buy healthy food online and I can say I will order it again and again! Now I pay more attention to my health and have a lot of organic products. Thank you, guys, for your attention to details and customers!",
      clientName: "tim diaz",
    },
    {
      id: 2,
      clientImg: "./people/testi2.jpg",
      clientReview:
        "I’d like to admit that the quality of clothes is really good. I ordered different items from different manufacturers, and they are all high-class!",
      clientName: "tim diaz",
    },
    {
      id: 3,
      clientImg: "./people/testi3.jpg",
      clientReview:
        "Thank you, Naturio, for remarkable discount you provided me! I became a regular buyer because my family and relatives now adore your products. We also shipped it to our overseas friends as such products are hard to find elsewhere!",
      clientName: "tim diaz",
    },
  ];

  return (
    <section className="Testimonials">
      <h1 className="title"> our claints testimonials</h1>
      <Swiper
        className="container"
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {Testimonials.map((testi) => (
          <SwiperSlide className="testi" key={testi.id}>
            <img src={testi.clientImg} />
            <p>{testi.clientReview}</p>
            <h4>{testi.clientName}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
