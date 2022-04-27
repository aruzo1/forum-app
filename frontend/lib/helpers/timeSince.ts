export default (date: string) => {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  let interval = seconds / 31536000;

  const getMsg = (unit: string) => `${Math.floor(interval)} ${unit} ago`;

  if (interval >= 1) return getMsg("years");
  interval = seconds / 2592000;
  if (interval >= 1) return getMsg("months");
  interval = seconds / 86400;
  if (interval >= 1) return getMsg("days");
  interval = seconds / 3600;
  if (interval >= 1) return getMsg("hours");
  interval = seconds / 60;
  if (interval >= 1) return getMsg("minutes");
  return getMsg("seconds");
};
