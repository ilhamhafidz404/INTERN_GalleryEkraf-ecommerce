import Card from "alope-ui/Card";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getUMKMs } from "../apis/UMKM";
import { UMKM } from "../models/UMKMModel";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function HomeUMKM() {
  const [umkms, setUmkms] = useState<UMKM[]>();

  const getDataUMKM = async () => {
    const result = await getUMKMs();
    if (result) {
      console.log(result.result.data);
      setUmkms(result.result.data);
    }
  };

  useEffect(() => {
    getDataUMKM();
  }, []);

  return (
    <section className="mt-32">
      <div className="md:px-10 px-3">
        <h2 className="text-3xl font-semibold">Pelaku Usaha</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          tempora explicabo cupiditate rem animi solut
        </p>
      </div>
      <div className="md:px-10 px-3 py-10 mt-10">
        <Slider {...settings}>
          {umkms?.map((umkm) => (
            <div className="px-3" key={umkm.id}>
              <Card
                image={`http://127.0.0.1:8000/storage/${umkm.image1}`}
                title={umkm.name}
                subtitle={umkm.subsector.name}
                description={umkm.location}
                forceSameHeight
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
