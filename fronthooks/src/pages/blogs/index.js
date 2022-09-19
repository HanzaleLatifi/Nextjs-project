import axios from "axios";
import Link from "next/link";
import PostList from "@/components/posts/PostList";
import MobileCategory from "@/components/posts/MobileCategory";
import DesktopCategory from "@/components/posts/DesktopCategory";
import DesktopSortBar from "@/components/posts/DesktopSortBar";
import Layout from "@/containers/Layout/index";
import http from "src/services/httpServices";
import queryString from 'query-string'
import * as React from 'react';
import Pagination from '@mui/material/Pagination'
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";
import PaginationComponent from "@/common/Pagination";

export default function Blogs({ blogsData, categories }) {

 
  return (
    <Layout>
      <div className="container mx-auto xl::max-w-screen-xl px-4 md:px-0 ">
        <div className="grid gap-4 md:grid-cols-12  md:grid-rows-[60px_minmax(300px,_1fr)]  ">
          <div className="hidden  md:block md:col-span-3 md:row-span-2 ">
            <DesktopCategory categories={categories} />
          </div>

          <div className=" flex overflow-auto md:hidden gap-x-4 ">
            <MobileCategory categories={categories} />
          </div>

          <div className="hidden md:block md:col-span-9 ">
            <DesktopSortBar />
          </div>

          <div className="md:col-span-9 grid grid-cols-6 gap-8 ">
            <PostList blogsData={blogsData} />
            <PaginationComponent page={blogsData.page} totalPages={blogsData.totalPages}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({req , query}) {
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}` , {
      withCredentials:true ,
      headers :{
        Cookie:req.headers.cookie || ""
      }
    }
  );
  const { data } = result;
  const { data: categories } = await http.get(
    "/post-category"
  );

  return {
    props: {
      blogsData: data,
      categories: categories.data,
    }, // will be passed to the page component as props
  };
}
