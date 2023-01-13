export function handlePageChange(action: 'prev' | 'next', moviePage: number, callBackFunction: Function) {
  action === 'prev' ? callBackFunction(moviePage - 1) : callBackFunction(moviePage + 1)
  window.scrollTo(0, 0)
}