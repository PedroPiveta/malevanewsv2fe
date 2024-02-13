import { createClient } from "@sanity/client"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const client = createClient({
  projectId: "frwsiduq",
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

export async function getNews() {
  const news = await client.fetch('*[_type == "noticia"]{"id": _id,"title": title,"summary": summary,"body": body,"cover": cover.asset->url,"createdAt": _createdAt,"updatedAt": _updatedAt,}')
  
  return news;
}
