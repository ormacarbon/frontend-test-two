import * as Styled from './styled';

type PaginationItemProps = {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
};

export function PaginationButton({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps): JSX.Element {
  return isCurrent ? (
    <Styled.Button isCurrent={isCurrent} type="button">
      {number}
    </Styled.Button>
  ) : (
    <Styled.Button
      type="button"
      isCurrent={isCurrent}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Styled.Button>
  );
}
