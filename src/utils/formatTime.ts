export function formatTime(time: number) {
  const number = time
  const hours = Math.floor(number / 60)
  const minutes = number % 60

  return `${hours}h${minutes}min`
}
