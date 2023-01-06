export enum Month {
  January = 'Січень',
  February = 'Лютий',
  March = 'Березень',
  April = 'Квітень',
  May = 'Травень',
  June = 'Червень',
  July = 'Липень',
  August = 'Серпень',
  September = 'Вересень',
  October = 'Жовтень',
  November = 'Листопад',
  December = 'Грудень',
}

export class AccountingModel {
  _id: string;
  year: number;
  month: Month;
  company: string;
  service: string;
  pokReal: string;
  pokPered: string;
  pay: boolean;
  payService: string;
  orderCreated: Date;
  orderPayed: Date;
}
