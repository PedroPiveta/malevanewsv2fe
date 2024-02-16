import { Navbar } from "@/components/ui/Navbar";
import { NewsCaroulser } from "@/components/ui/home/NewsCarousel";
import { NewsList } from "@/components/ui/home/NewsList";
import { getNews } from "@/lib/utils";
import { Suspense } from "react";

export default async function Home() {

  const news = await getNews();

  return (
    <>
      <main className="flex flex-col gap-4">
        <Suspense fallback="Carregando...">
          <section className="mb-2">
            <NewsCaroulser noticias={news} />
          </section>
          <section>
            <NewsList noticias={news} />
          </section>
        </Suspense>
      </main>
    </>
  );
}
