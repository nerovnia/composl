export class CompanyModel {
  _id: string;
  name: string;
  or: string;
  edrpou: string;
  iban: string;
  services: {
    [key: string]: string;
  };
}
