'use client';

import { useEffect } from 'react';

import CardLoading from '@/components/CardLoading';
import CardMedia from '@/components/CardMedia';
import Navbar from '@/components/Navbar';
import { useAppDispatch, useAppSelector } from '@/store';
import { setAnnounceData } from '@/store/slices/announceSlice';
import { setHighligthData } from '@/store/slices/highligthSlice';
import { setRoomRecommendData } from '@/store/slices/roomRecommendSlice';

export default function Home() {
  const dispatch = useAppDispatch();

  const announcementContent = useAppSelector(
    (state) => state.announce.announceData,
  );

  const roomRecommendContent = useAppSelector(
    (state) => state.roomRecommend.roomRecommendData,
  );

  const highlightContent = useAppSelector(
    (state) => state.highligth.highligthData,
  );

  useEffect(() => {
    async function fetchData() {
      const getAnnounce = await fetch('/api/get_announce');
      const getRoomRecommend = await fetch('/api/get_room_recommend');
      const getHighlight = await fetch('/api/get_highlight');

      dispatch(setAnnounceData(await getAnnounce?.json()));
      dispatch(setRoomRecommendData(await getRoomRecommend?.json()));
      dispatch(setHighligthData(await getHighlight?.json()));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <AuthUpdater />
      <AuthViewer /> */}
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
              {(roomRecommendContent as any)?.data?.map((obj: any) => (
                <div
                  // onClick={}
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
              {(highlightContent as any)?.data?.map((item: any) => (
                <CardMedia
                  key={item?.id}
                  title={item?.name}
                  image={item?.image_url[1]}
                />
              )) || <CardLoading />}
            </div>
          </div>

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
