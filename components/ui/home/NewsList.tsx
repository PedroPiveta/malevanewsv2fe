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


export async function NewsList() {
  const news = await getNews();
  return (
    <>
    {news.map((noticia: Noticia) => (
        <NewsCard key={noticia.id} noticia={noticia} />
      ))
    }
    </>
  )
}
