"use strict";

let money = +prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: "",
    savings: false
}

// Вариант цикла № 1

for (let i = 0; i < 2; i++) {
    let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", " ");
    let costExpenses = prompt("Во сколько обойдется?", " ");

    if ( (typeof(itemExpenses)) === "string" && (typeof(itemExpenses)) != null && (typeof(costExpenses)) != null
        && itemExpenses != "" && costExpenses != "" && itemExpenses.length < 50) {
        appData.expenses[itemExpenses] = costExpenses;
    } else {
        
    }
}

// Вариант цикла №2

// let i = 0;
// while (i < 2) {
//     let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", " ");
//     let costExpenses = prompt("Во сколько обойдется?", " ");
//     i++;
//     if ( (typeof(itemExpenses)) === "string" && (typeof(itemExpenses)) != null && (typeof(costExpenses)) != null
//         && itemExpenses != "" && costExpenses != "" && itemExpenses.length < 50) {
//         appData.expenses[itemExpenses] = costExpenses;
//     } else {
        
//     }
// }

// Вариант цикла №2

// let i = 0;
// do {
//     let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", " ");
//     let costExpenses = prompt("Во сколько обойдется?", " ");
//     i++;
//     if ( (typeof(itemExpenses)) === "string" && (typeof(itemExpenses)) != null && (typeof(costExpenses)) != null
//         && itemExpenses != "" && costExpenses != "" && itemExpenses.length < 50) {
//         appData.expenses[itemExpenses] = costExpenses;
//     } else {
//    }
// } while (i < 2)


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
