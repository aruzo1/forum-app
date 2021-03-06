const Spinner = ({ size, className }: { size: number; className?: string }) => (
  <div
    className={`rounded-full border border-transparent border-t-brand animate-spin ${className}`}
    style={{ width: size, height: size }}
  />
);

export default Spinner;
