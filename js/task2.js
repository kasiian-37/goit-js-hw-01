const invoice = 100;
const stock = 100;

const message =
  invoice <= stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';
// if (invoice < stock) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
// if (invoice === stock) {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }
// if (invoice > stock) {
//   message = 'На складе недостаточно товаров!';
// }

console.log(message);
