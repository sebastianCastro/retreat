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

        <div className="overflow-x-auto">
          <div className="flex gap-8 min-w-[1200px] sm:min-w-full" style={{width: '100%', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth'}}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-96 h-[36rem] bg-white rounded-2xl flex flex-col items-center justify-start text-gray-400 text-2xl flex-shrink-0 scroll-snap-align-start overflow-hidden"
                style={{ minWidth: '24rem', minHeight: '36rem' }}
              >
                <img src={`/retreat/images/review${index + 1}.jpg`} alt={`Review ${index + 1}`} className="object-contain w-full h-auto mt-2 mb-2" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18))' }} />
                <Card className="mt-4">
                  <CardHeader>
                    <h3 className="text-xl font-bold text-foreground">{review.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                    <p className="text-sm text-muted-foreground mt-2">{review.retreat}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
