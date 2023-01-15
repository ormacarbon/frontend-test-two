import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: string) {
  const newDate = format(new Date(`${date}T21:00:00`), 'dd MMM yyyy', {
    locale: ptBR
  })

  return newDate
}
