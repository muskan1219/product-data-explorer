'use client'
import useSWR from 'swr'
const fetcher = (url:string)=> fetch(url).then(r=>r.json())

export default function Home(){
  const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/navigation`, fetcher)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Data Explorer</h1>
      <section>
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="grid gap-2 mt-2">
          {error && <div>Error loading navigation</div>}
          {!data && <div>Loading headings...</div>}
          {data?.map((n:any)=>(<a key={n.id} href={`/category/${n.slug}`} className="p-2 border rounded">{n.title}</a>))}
        </div>
      </section>
    </div>
  )
}
