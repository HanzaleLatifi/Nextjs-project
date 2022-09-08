import Link from "next/link"
function MobileCategory({categories}) {
  return (
    <>
    {categories.map(category=>{
            return <Link href={`/blogs/${category.englishTitle}`} key={category._id} >
            <a className='block py-2 px-1 border border-gray-500 rounded-2xl bg-white text-black whitespace-nowrap '>
              {category.title}
            </a>
            </Link>
           })}
    </>
  )
}

export default MobileCategory