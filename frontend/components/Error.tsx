const Error = ({ code, msg }: { code: number; msg: string }) => (
  <div className="col-span-full card text-center">
    <h1 className="font-semibold text-8xl text-brand-400">{code}</h1>
    <p>{msg}</p>
  </div>
);

export default Error;
