import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Добрый день. Хочу поблагодарить вас девочки за этот ретрит и за то состояние, которое внутри, очень хочется прибывать в нем и сохранить его.  Очень благодарна вам ",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    },
    {
      name: "Михаил Козлов",
      text: "Отличная организация, профессиональные преподаватели. Информационный детокс был именно тем, что нужно. Рекомендую всем, кто устал от стресса.",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    },
    {
      name: "Елена Петрова",
      text: "Прекрасное место, вкусная еда, атмосфера полного спокойствия. Научилась управлять стрессом и тревожностью. Планирую вернуться снова.",
      rating: 5,
      retreat: "Ретрит в горах Крыма, июнь 2025"
    }
  ];

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

  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

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
        <div className="flex justify-center items-center">
          <div className="relative w-96 h-[36rem]">
            {images.map((img, idx) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className={`object-contain w-full h-auto mt-2 mb-2 absolute top-0 left-0 transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))', minHeight: '36rem', borderRadius: '1rem' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
