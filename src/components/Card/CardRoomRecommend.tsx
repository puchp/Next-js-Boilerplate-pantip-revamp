const CardRoomRecommend = (props: { name: string }) => {
  return (
    <div
      className="flex	min-w-[120px] items-center gap-2 overflow-hidden text-ellipsis	
    break-words rounded-none border border-b-4 bg-white 
    px-2 py-1 text-[16px] text-[#7872b1] duration-200 
    ease-out hover:border-b-[#4e478f] hover:bg-white hover:text-[#4e478f] sm:px-4 sm:text-[14px]"
    >
      {props?.name}
    </div>
  );
};

export default CardRoomRecommend;
