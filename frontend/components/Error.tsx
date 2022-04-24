const Error = ({ title, msg }: { title: string; msg: string }) => (
  <div className="col-span-full card text-center">
    <h1 className="font-semibold text-5xl text-brand-400">{title}</h1>
    <p className="text-neutral-200 mt-2">{msg}</p>
  </div>
);

export default Error;
