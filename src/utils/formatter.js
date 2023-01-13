export const useFormatter = () => ({
  formatPrice: (price) => {
    return price.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    });
  },
  formatQuantity: (quantity, mindigits) => {
    if (quantity.toString().length >= mindigits) {
      return quantity.toString();
    }
    const remain = mindigits - quantity.toString().length;
    return `${'0'.repeat(remain)}${quantity}`;
  },
  formatDate: (date) => {
    let currentDate = new Date(`${date} 00:00:00`);
    return new Intl.DateTimeFormat('pt-BR').format(currentDate);
  },
  formatTimeThroghMinutes: (totalMin) => {
    let hours = Math.floor(totalMin / 60);
    let minutes = Math.floor(totalMin % 60);
    return `${hours}h ${minutes}min`;
  }
});
