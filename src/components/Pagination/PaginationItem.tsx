import { PaginationItemProps } from 'interfaces/props'
import { Button, CurrentPageButton } from './styles'

export const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) => {
  if (isCurrent) {
    return <CurrentPageButton type="button">{number}</CurrentPageButton>
  }

  return (
    <Button type="button" onClick={() => onPageChange(number)}>
      {number}
    </Button>
  )
}
