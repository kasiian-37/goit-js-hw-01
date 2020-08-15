const countryName = 'КитаЙ';
const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    case 'Китай':
      price = 100;
      break;
    case 'Австралия':
      price = 170;
      break;
    case 'Индия':
      price = 80;
      break;
    case 'Ямайка':
      price = 120;
      break;
    default:
      price = 0;
    // Write code under this line
  }
}
if (price === 0) {
  message = NO_DELIVERY;
} else if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
