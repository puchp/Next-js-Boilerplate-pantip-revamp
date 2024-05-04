'use client';

import { useEffect } from 'react';

import CardLoading from '@/components/Card/CardLoading';
import CardMedia from '@/components/Card/CardMedia';
import CardRoomRecommend from '@/components/Card/CardRoomRecommend';
import Navbar from '@/components/Navbar';
import { useAppDispatch, useAppSelector } from '@/store';
import { setAnnounceData } from '@/store/slices/announceSlice';
import { setHighlightData } from '@/store/slices/highlightSlice';
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
    (state) => state.highlight.highlightData,
  );

  useEffect(() => {
    async function fetchData() {
      const getAnnounce = await fetch('/api/get_announce');
      const getRoomRecommend = await fetch('/api/get_room_recommend');
      const getHighlight = await fetch('/api/get_highlight');

      dispatch(setAnnounceData(await getAnnounce?.json()));
      dispatch(setRoomRecommendData(await getRoomRecommend?.json()));
      dispatch(setHighlightData(await getHighlight?.json()));
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />

      {/* Room Recommend */}
      <div className="sticky top-[81px] z-50 bg-white/[90%] px-3 sm:mx-6 md:mx-10 lg:mx-12">
        <div className="flex justify-start  gap-3 overflow-scroll  pb-[10px]  pt-4  sm:gap-4">
          {(roomRecommendContent as any)?.data?.map((item: any) => (
            <CardRoomRecommend
              key={item?.id}
              name={item?.name}
              slug={item?.slug || ''}
            />
          ))}
        </div>
      </div>

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

          <h1 className="mt-2 text-[#fbc02d]">Highlight Content</h1>
          <div className="py-3 sm:py-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {(highlightContent as any)?.data?.map((item: any) => (
                <CardMedia
                  key={item?.id}
                  title={item?.name}
                  image={item?.image_url[1]}
                  postUrl={item?.post_url}
                />
              )) || <CardLoading />}
            </div>
          </div>

          {/* {announcementContent && (
            <pre className="text-[10px]">
              {JSON.stringify(announcementContent, null, 2)}
            </pre>
          )}

          {roomRecommendContent && (
            <pre className="text-[10px]">
              {JSON.stringify(roomRecommendContent, null, 2)}
            </pre>
          )}

          {highlightContent && (
            <pre className="text-[10px]">
              {JSON.stringify(highlightContent, null, 2)}
            </pre>
          )} */}
        </div>
      </div>
    </div>
  );
}
