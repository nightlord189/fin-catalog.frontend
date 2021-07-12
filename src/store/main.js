/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable no-mixed-operators */
import { makeAutoObservable } from 'mobx';
import Decimal from 'decimal.js';

class MainStore {
  deposits = [
    {
      id: 1,
      bank: 'Банк1',
      name: 'Супер-депозит 1',
      rate: 15.8,
      currency: 'USD',
      minAmount: 20,
      replenishment: true,
      partialWithdrawal: true,
      gesv: 16.0,
      term: 12,
    },
    {
      id: 2,
      bank: 'Банк1',
      name: 'Супер-депозит 2',
      rate: 16.2,
      currency: 'USD',
      minAmount: 100,
      replenishment: false,
      partialWithdrawal: false,
      gesv: 16.6,
      term: 12,
    },
  ];

  calculator = {
    rate: 9.6,
    term: 12,
    amount: 1000,
    capitalization: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setDeposits = (list) => {
    this.deposits = list;
  }

  setCalculator = (calc) => {
    this.calculator = calc;
  }

  get depositResult() {
    const data = this.calculator;
    const amountDecimal = new Decimal(data.amount);
    const rateDecimal = (new Decimal(data.rate)).dividedBy(new Decimal(100.0)).dividedBy(12);
    if (data.capitalization) {
      let result = new Decimal(data.amount);
      for (let i = 0; i < data.term; i += 1) {
        result = result.plus(result.mul(rateDecimal));
      }
      return result;
    } else {
      let result = new Decimal(0);
      for (let i = 0; i < data.term; i += 1) {
        result = result.plus(amountDecimal.mul(rateDecimal));
      }
      return amountDecimal.plus(result);
    }
  }

  get rewardPercentage() {
    return ((this.depositResult.toFixed(2) - this.calculator.amount.toFixed(2)) / this.depositResult.toFixed(2) * 100.0).toFixed(0);
  }

  get basePercentage() {
    return 100 - this.rewardPercentage;
  }
}

export default new MainStore();
