import { toPersianDigits } from "@/utils/toPersianDigits";
import axios from "axios";
import {LinkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';



function Post({postData}) {
  console.log(postData)

  return (
    <div className="bg-gray-100">
      <div className="md:max-w-screen-md container px-4 md:px-0 py-8 mx-auto">
          <header className="flex flex-col md:flex-row  justify-between gap-y-4 mx-auto mb-8 md:mb-20 ">
                {/* author data */}
                  <div className="flex gap-x-4 items-center">
                      <img src="/images/vuejs.png" className="w-20 h-20 rounded-full "/>
                      <div className="gap-y-3 flex flex-col" >
                        <div className="flex items-center gap-x-2">
                          <h2 className="font-bold">{postData.author.name}</h2>
                          <span className="text-sm font-light px-2 rounded-2xl bg-white border border-green-500">{postData.category.title}</span>
                        </div>
                          <p className="text-sm">{postData.author.biography}</p>
                          <div className="flex text-xs gap-x-2 font-semibold">
                            <p>{new Date(postData.createdAt).toLocaleDateString("fa-IR")}</p>
                            <p>{`زمان خواندن ${toPersianDigits(postData.readingTime)} دقیقه`}</p>
                          </div>

                      </div>
                  </div>
                {/* interactions buttons */}
                  <div className="flex gap-x-4 items-center">
                    <button>
                      <LinkIcon className="w-5 h-5"/>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-gray-600 border border-gray-400 px-3 py-1 rounded-2xl">
                      <span className="text-sm font-light">{postData.isBookmarked ? 'ذخیره شده' :'ذخیره' }</span>
                                {postData.isBookmarked ? <BookmarkIconSolid className="h-5 w-5 fill-current"/> : <BookmarkIcon className="h-5 w-5 stroke-current"/>}
                    </button>

                  </div>
          </header>
          <main className="prose prose-xl prose-h1:text-4xl prose-h2:text-2xl prose-img:rounded-xl ">
              <h1>{postData.title}</h1>
              <h2 >عنوان تستی</h2>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              <img src={postData.coverImage} alt={postData.title}/>
              <h2>عنوان تستی دوم</h2>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              <pre>
                this is my code   
              </pre>
          </main>
      </div>
     
    </div>
  )
}

export default Post;

export async function getServerSideProps(context) {
    const {query}=context;
    const {data}=await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

    return {
      props: { 
            postData:data.data
    }
    }
  }