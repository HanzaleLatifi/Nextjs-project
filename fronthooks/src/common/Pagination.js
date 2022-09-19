import * as React from 'react';
import Pagination from '@mui/material/Pagination'
import { useRouter } from "next/router";
import routerPush from "@/utils/routerPush";

function PaginationComponent({page , totalPages}) {

    const router=useRouter();
    const pageHandler=(e , currentPage)=>{
      router.query.page=currentPage;
      routerPush(router);
    }

  return (
    <div className="col-span-6 flex justify-center  text-center ">
      {totalPages > 1 && (
        <Pagination
          page={page}
          count={totalPages}
          onChange={pageHandler}
          color="primary"
          dir="ltr"
        />
      )}
    </div>
  );
}

export default PaginationComponent;
