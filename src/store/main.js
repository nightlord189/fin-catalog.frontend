/* eslint-disable no-mixed-operators */
import { makeAutoObservable } from 'mobx';

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
    rate: 10,
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
    if (data.capitalization) {
      let result = data.amount;
      for (let i = 0; i < data.term; i += 1) {
        result += result * data.rate / 100.0;
      }
      return result;
    }
    let result = 0;
    for (let i = 0; i < data.term; i += 12) {
      result += data.amount * data.rate / 100.0;
      // console.log(data.amount * data.rate / 100.0);
    }
    console.log(result);
    return result + data.amount;
  }
}

export default new MainStore();
