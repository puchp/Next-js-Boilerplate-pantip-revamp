'use client';

import { useEffect, useState } from 'react';

import CardLoading from '@/components/CardLoading';
import CardMedia from '@/components/CardMedia';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [announcementContent, setAnnouncementContent] = useState();
  const [roomRoomRecommendContent, setRoomRecommendContent] = useState();
  const [roomHighlightContent, setHighlightContent] = useState();

  useEffect(() => {
    async function fetchData() {
      const getAnnounce = await fetch('/api/get_announce');
      const getRoomRecommend = await fetch('/api/get_room_recommend');
      const getHighlight = await fetch('/api/get_highlight');

      setAnnouncementContent(await getAnnounce?.json());
      setRoomRecommendContent(await getRoomRecommend?.json());
      setHighlightContent(await getHighlight?.json());
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const sidebarContent = await getSidebarContent();
  // const roomClubsContent = await getRoomClubsContent();

  return (
    <div>
      <Navbar />
      <div className="px-3 sm:mx-6 md:mx-10 lg:mx-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/banner.png"
          alt=""
          className="w-full object-contain  sm:h-60 md:h-40"
        />
        <div>
          <h1 className="text-[#fbc02d]">Announce</h1>
          <div className="py-3 sm:py-5">
            <div className="flex w-full flex-col">
              {(announcementContent as any)?.data?.map(
                (item: { display_message: any; announce_id: number }) => {
                  return (
                    <div
                      className="flex w-full border p-3 text-[16px] text-[##ffd180]"
                      key={item.announce_id}
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={{ __html: item.display_message }}
                    />
                  );
                },
              ) || <CardLoading />}
            </div>
          </div>

          <h1 className="mt-2 text-[#fbc02d]">Room Recommend</h1>
          <div className="">
            <div className="mt-4 flex  justify-start gap-3  overflow-scroll  pb-[10px]  sm:gap-4">
              {(roomRoomRecommendContent as any)?.data?.map((obj: any) => (
                <div
                  key={obj?.id}
                  className="flex	min-w-[120px] items-center gap-2 overflow-hidden text-ellipsis	
                  break-words rounded-none border border-b-4 bg-white 
                  px-2 py-1 text-[16px] text-[#7872b1] duration-200 
                  ease-out hover:border-b-[#4e478f] hover:bg-white hover:text-[#4e478f] sm:px-4 sm:text-[14px]"
                >
                  {obj?.name}
                </div>
              )) || <CardLoading />}
            </div>
          </div>

          <h1 className="mt-2 text-[#fbc02d]">Highlight Content</h1>
          <div className="py-3 sm:py-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {(roomHighlightContent as any)?.data?.map((item: any) => (
                <CardMedia
                  key={item?.id}
                  title={item?.name}
                  image={item?.image_url[1]}
                />
              )) || <CardLoading />}
            </div>
          </div>

          {/* <h1 className="mt-2">Room Club</h1>

          <div className="">
            <div className="mt-4 flex  justify-start gap-3  overflow-scroll  sm:gap-4">
              {roomClubsContent?.data?.map((obj: any) => (
                <div
                  key={obj?.id}
                  className="flex	min-w-[100px] items-center gap-2 overflow-hidden text-ellipsis break-words rounded-[4px] bg-[#4e478f] px-2
             py-1 text-[8px] text-white duration-200 ease-out hover:bg-white hover:text-[#4e478f] sm:px-4 sm:text-[16px]"
                >
                  {obj?.name}
                </div>
              ))}
            </div>
          </div>
 
          <h1 className="mt-2">Sidebar Content</h1>

          <div className="py-3 sm:py-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {sidebarContent?.data?.map(
                (item: {
                  name: Key | null | undefined;
                  image_url: any[];
                  price: any;
                }) => (
                  <CardMedia
                    key={item.name}
                    title={item.name}
                    image={item.image_url[1]}
                  />
                ),
              )}
            </div>
          </div> */}

          {/* {sidebarContent && (
            <pre className="text-[10px]">
              {JSON.stringify(sidebarContent, null, 2)}
            </pre>
          )} */}
        </div>
      </div>
    </div>
  );
}
