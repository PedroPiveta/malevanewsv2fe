import { NewsList } from "@/components/ui/home/NewsList";
import { Suspense } from "react";

export default async function Home() {
  return <main>
    <Suspense fallback="Carregando...">
      <NewsList />
    </Suspense>
  </main>;
}
