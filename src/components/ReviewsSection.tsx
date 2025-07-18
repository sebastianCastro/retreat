import React from 'react';

const ReviewsSection = () => {
  const images = [
    { src: "/retreat/images/review1.jpg", alt: "Review 1" },
    { src: "/retreat/images/review18.png", alt: "Review 2" },
    { src: "/retreat/images/review12.jpg", alt: "Review 3" },
    { src: "/retreat/images/review13.jpg", alt: "Review 4" },
    { src: "/retreat/images/review17.jpg", alt: "Review 5" },
    { src: "/retreat/images/review16.jpg", alt: "Review 6" },
    { src: "/retreat/images/review14.jpg", alt: "Review 7" },
    { src: "/retreat/images/review15.jpg", alt: "Review 8" },
  ];

  // Double the images array to create a seamless loop
  const doubledImages = [...images, ...images];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-lavender-new sm:text-4xl font-bold text-foreground mb-4">
            Отзывы участников
          </h2>
          <p className="text-lg text-muted-foreground">
            Что говорят люди о своем опыте на наших ретритах
          </p>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden">
          <div className="flex gap-8 animate-scroll" style={{ width: 'max-content' }}>
            {doubledImages.map((img, idx) => (
              <img
                key={`${img.src}-${idx}`}
                src={img.src}
                alt={img.alt}
                className="object-cover w-[280px] h-[36rem] rounded-2xl shadow-lg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
