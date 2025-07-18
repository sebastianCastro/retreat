import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';

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

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

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

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex justify-center w-full"
          columnClassName="masonry-column"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl overflow-hidden shadow-md mb-6 mx-2"
              style={{ background: '#fff', borderRadius: '1rem' }}
            >
              <img
                src={`/retreat/images/review${index + 1}.jpg`}
                alt={`Review ${index + 1}`}
                className="w-full h-auto object-contain rounded-2xl border border-gray-200 shadow-sm"
                style={{ display: 'block', margin: '0 auto', borderRadius: '1rem' }}
              />
              {/* <div className="p-4 w-full text-base text-gray-700 bg-white rounded-b-2xl"> */}
                {/* Example review text, replace with actual if available */}
                {/* {reviews[index % reviews.length]?.text || ''} */}
              {/* </div> */}
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ReviewsSection;
