const CardMedia = (props: {
  title: string;
  image: string;
  postUrl: string;
}) => {
  return (
    <a href={props?.postUrl} target="_blank">
      <div className="relative">
        <div className="absolute size-full rounded-b-[1.3rem]" />
        <div className="flex  ">
          {/* Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.image}
            alt=""
            className="w-full rounded-[10px] object-cover  sm:h-[17rem] md:h-52"
          />
        </div>
      </div>
      {/* Description */}
      <div className="flex items-start justify-between pt-3">
        <div className="">
          <p className="max-w-[17rem] text-[14px]  font-semibold">
            {props?.title || ''}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CardMedia;
