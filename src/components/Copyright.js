const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-12 text-xs text-center font-normal text-slate-100">© {year} All rights reserved.</div>
  );
};

export default Copyright;
