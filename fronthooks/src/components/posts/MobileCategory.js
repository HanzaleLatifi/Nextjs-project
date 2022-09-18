import Link from "next/link"
import { useRouter } from "next/router"

function MobileCategory({categories}) {
  const {query}=useRouter();
  return (
    <>
    {categories.map(category=>{
            return <Link href={`/blogs/${category.englishTitle}`} key={category._id} >
            <a className={`block py-2 px-1 border border-gray-500 rounded-2xl  text-black whitespace-nowrap ${category.englishTitle===query.categorySlug ? 'bg-green-200 text-white':'bg-white'}` }>
              {category.title}
            </a>
            </Link>
           })}
    </>
  )
}

export default MobileCategory