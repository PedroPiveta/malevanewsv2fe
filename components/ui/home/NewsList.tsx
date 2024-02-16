import { getNews } from "@/lib/utils";
import { NewsCard } from "./NewsCard";

export interface Noticia {
  id: string;
  title: string;
  summary: string;
  cover: string;
  body: string[];
  createdAt: string;
  updatedAt: string;
}


export async function NewsList({ noticias }: { noticias: Noticia[] }) {
  return (
    <>
      {noticias.map((noticia: Noticia) => (
        <NewsCard key={noticia.id} noticia={noticia} />
      ))
      }
    </>
  )
}
