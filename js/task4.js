const orderPieces = null;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;
let balanceCredits = credits - totalPrice;
let message;

if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits >= balanceCredits) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredits} кредитов`;
} else if (credits > balanceCredits) {
  message = ACCESS_DENIED;
}

console.log(message);
