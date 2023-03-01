export const calculateDuration = (start, end) => {
  return Math.ceil(Math.ceil(new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
}