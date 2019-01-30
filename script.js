"use strict";

let money = prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");

// let itemExpenses;
// let itemExpenses2;
// let costExpenses;
// let costExpenses2;



let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let costExpenses = prompt("Во сколько обойдется?");

let itemExpenses2 = prompt("Введите обязательную статью расходов в этом месяце");
let costExpenses2 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [itemExpenses]: costExpenses,
        [itemExpenses2]: costExpenses2
    },
    optionalExpenses: {},
    income: "",
    savings: false
}

alert(money / 30);
