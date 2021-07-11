import { makeAutoObservable } from 'mobx';

class MainStore {
  deposits = [
    {
      id: 1,
      name: 'Супер-депозит',
      rate: 12.8,
      currency: 'KZT',
      minAmount: 1000,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setDeposits = (list) => {
    this.deposits = list;
  }

  addDeposit = (depo) => {
    this.deposits.push(depo);
  }
}

export default new MainStore();
