import {HeartIcon,BookmarkIcon,ClockIcon,ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import PostInteractions from './PostInteractions';
function PostList({blogsData}) {
  return (
    <>
    {blogsData.docs.map((post , index)=>{
          return <div key={index} className="bg-white col-span-6 sm:col-span-3 md:col-span-2 rounded-xl overflow-hidden p-2 ">
                    {/* imgae cover */}
                    <div className='aspect-w-16 aspect-h-8 mb-4 '>
                        <Link href={`/posts/${post.slug}`}>
                            <a>
                             <img src={post.coverImage} alt={post.title} className="w-full h-full object-center object-cover rounded-xl "/>
                            </a>
                        </Link>
                    </div>
                    {/* content */}
                    <div className='bg-lime-100 rounded-xl p-2'>
                        <Link href={`/posts/${post.slug}`}>
                                <a>
                                <h2 className='mb-4'>{post.title}</h2>
                                </a>
                          </Link>
                      <div className='flex justify-between items-center mb-4' >
                        <div className='flex items-center '>
                            <img src={post.coverImage} alt={post.title} className="w-8 h-8 rounded-full ring-2 ring-white ml-2"/>
                            <p className='text-gray-500 font-light text-sm'>{post.author.name}</p>
                        </div>
                        <p className='px-4 py-1 font-light text-black bg-green-200 rounded-2xl text-sm cursor-pointer hover:bg-green-400  transition-all duration-300'>{post.category.title}</p>
                      </div>

                          {/* like & comment & ... */}
                        <div className='flex justify-between items-center text-sm '>
                            <PostInteractions post={post}/>
                            <div className='flex items-center text-xs font-thin text-gray-500'>
                              <ClockIcon className='w-4 h-4 ml-0.5'/>
                              <p>{`زمان مطالعه ${post.readingTime} دقیقه`}</p>
                            </div>
                        </div>
                    </div>
                
          </div>
        })}
    </>
  )
}

export default PostList