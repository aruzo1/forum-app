const Spinner = ({ size, className }: { size: number; className?: string }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={
        "rounded-full border border-transparent border-t-brand-400 animate-spin " +
        className
      }
    />
  );
};

export default Spinner;
