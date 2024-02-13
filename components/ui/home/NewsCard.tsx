
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Noticia } from "./NewsList";

export function NewsCard({ noticia }: { noticia: Noticia }) {

  return <Link href={`/noticia/${noticia.id}`}>
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle>{noticia.title}
        </CardTitle>
      </CardHeader>
    </Card>
  </Link>
}
