import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../carousel";
import { Noticia } from "./NewsList";

export function NewsCaroulser({ noticias }: { noticias: Noticia[] }) {
  return (
    <Carousel className="w-full max-w-ws">
      <CarouselContent>
        {noticias.map(noticia => (
          <CarouselItem key={noticia.id}>
            <div className="w-full flex justify-center h-[400px] relative">
              <img className="w-full object-cover select-none" src={noticia.cover} alt={noticia.title} />
              <h1 className="absolute bottom-4 left-8 font-bold text-2xl">{noticia.title}</h1>
            </div>
          </CarouselItem>
        ))
        }
      </CarouselContent>
      <CarouselPrevious className="absolute left-8" />
      <CarouselNext className="absolute right-8"/>
    </Carousel>
  )
}
