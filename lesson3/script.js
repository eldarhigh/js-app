"use strict";

let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?", " ");
    time = prompt("Введите дату в формате YYYY-MM-DD", " ");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", " ");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: "",
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let itemExpenses = prompt("Введите обязательную статью расходов в этом месяце", " ");
        let costExpenses = prompt("Во сколько обойдется?", " ");

        if ( (typeof(itemExpenses)) === "string" && (typeof(itemExpenses)) != null && (typeof(costExpenses)) != null
            && itemExpenses != "" && costExpenses != "" && itemExpenses.length < 50) {
            appData.expenses[itemExpenses] = costExpenses;
        } else {
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", " "),
            percent = +prompt("Под какой процент?", " ");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
    
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let optExpensesItem = prompt("Статья необязательных расходов?", " ");
        let optExpensesCost = prompt("Во сколько обойдется?", " ");

        appData.optionalExpenses[i] = optExpensesCost;

        // if ( (typeof(optExpensesItem)) === "string" && (typeof(optExpensesItem)) != null && (typeof(optExpensesCost)) != null
        //     && optExpensesItem != "" && optExpensesCost != "" && optExpensesItem.length < 50) {
        //     appData.expenses[i] = optExpensesCost;
        // } else {
        //     i--;
        // }   
    }
}

