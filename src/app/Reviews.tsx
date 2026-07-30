import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 w-12 h-12 flex items-center justify-center border border-[#C8A96E]/30 text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
  >
    <svg xmlns="http://www.svg.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 w-12 h-12 flex items-center justify-center border border-[#C8A96E]/30 text-[#C8A96E] hover:bg-[#C8A96E] hover:text-black transition-colors"
  >
    <svg xmlns="http://www.svg.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
);

const Reviews = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [placeInfo, setPlaceInfo] = useState({ rating: 0, total: 0 });

  useEffect(() => {
    const fetchReviews = () => {
      // @ts-ignore
      if (!window.google) {
        setTimeout(fetchReviews, 500);
        return;
      }

      // @ts-ignore
      const map = new window.google.maps.Map(document.createElement('div'));
      // @ts-ignore
      const service = new window.google.maps.places.PlacesService(map);

      service.getDetails(
        {
          placeId: 'ChIJ3X9Q0THQfJYR3aRiDFDnc1E',
          fields: ['name', 'rating', 'reviews', 'user_ratings_total'],
          language: 'es'
        },
        (place: any, status: any) => {
          // @ts-ignore
          if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
            setPlaceInfo({ rating: place.rating, total: place.user_ratings_total });
            if (place.reviews) {
              const goodReviews = place.reviews.filter((r: any) => r.rating >= 4);
              setReviews(goodReviews);
            }
          }
          setLoading(false);
        }
      );
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-[#C8A96E]">
        <svg className="animate-spin h-8 w-8" xmlns="http://www.svg.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 768 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: windowWidth >= 768,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto min-w-0">
      {placeInfo.total > 0 && (
        <div className="flex items-center gap-4 mb-16 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-[#C8A96E]/20">
          <div className="flex gap-1 text-[#C8A96E]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.svg.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[#F0EDE6] font-['DM_Sans',sans-serif] text-sm">
            {placeInfo.rating} de 5 basado en {placeInfo.total} reseñas
          </span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-5 h-5 ml-2" />
        </div>
      )}

      <div className="w-full px-12 md:px-20 min-w-0">
        <Slider {...sliderSettings}>
          {reviews.map((item, idx) => (
            <div key={idx} className="px-4 py-4 h-full">
              <div className="flex flex-col bg-black/20 backdrop-blur-md border border-[#C8A96E]/20 p-10 hover:border-[#C8A96E]/50 transition-colors h-[400px]">
                <div className="flex gap-1 mb-6 text-[#C8A96E]">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.svg.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#9A9690] leading-relaxed text-sm mb-8 italic flex-grow overflow-hidden">
                  "{item.text.length > 250 ? item.text.substring(0, 250) + '...' : item.text}"
                </p>
                <div className="mt-auto border-t border-[#C8A96E]/20 pt-6 flex items-center gap-4">
                  {item.profile_photo_url && (
                    <img 
                      src={item.profile_photo_url} 
                      alt={item.author_name} 
                      className="w-10 h-10 rounded-full" 
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div>
                    <h4 className="font-['DM_Sans',sans-serif] text-xs uppercase tracking-[0.1em] text-[#F0EDE6]">
                      {item.author_name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-[#C8A96E] mt-1">
                      {item.relative_time_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
