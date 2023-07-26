const TimelineItem = ({ item }) => {
  const { title, date, location, content } = item;

  return (
    <div className="flex">
      <div className="w-[6.2rem] pt-1">
        <div className="text-sm font-semibold text-slate-300" style={{textAlign: "right"}}>{date}</div>
        <div className="text-xs font-light text-slate-400" style={{textAlign: "right"}}>{location}</div>
      </div>

      <div className="flex w-14 flex-col items-center">
        <div className="absolute flex h-4 w-4 translate-y-[6px] items-center justify-center rounded-full bg-cyan-500 bg-opacity-60">
          <div className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-cyan-500">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-700"></div>
          </div>
        </div>
        <div className="h-full w-px bg-cyan-300"></div>
      </div>

      <div className="flex-1 mb-10 pt-1">
        <p className="mb-3 text-base font-bold leading-tight text-slate-100 text-end">{title}</p>
        <div className="text-sm text-slate-300">{content}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
