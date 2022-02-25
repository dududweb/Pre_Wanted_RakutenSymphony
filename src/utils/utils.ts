export const transformingDate = (timestamp: number) => {
  const currentDate = new Date();
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const day = date.getDay();
  // const day = String(date.getDate().padStart(2, "0"));
  return `${day}`;
};

interface calcDateDiffProps {
  type: string;
}
