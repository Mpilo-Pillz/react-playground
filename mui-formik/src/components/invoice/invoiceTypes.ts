export interface IInvoice {
  _id: string;
  serviceType: string;
  date: string;
  usage: string;
  charge: string;
  userAccount: string;
  isPaid: boolean;
}
