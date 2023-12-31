export type region = "Hhohho" | "Lubombo" | "Manzini" | "Shiselweni";

export interface IAddress {
  streetNumber: string;
  streetName: string;
  postalCode: string;
  region: region;
  town: string;
}

export interface LoggedInUser {
  userId: string;
  token: string;
  expirationDate: string;
}
