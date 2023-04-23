export type region = "Lowveld" | "Highveld" | "Middleveld" | "Hhohho";

export interface IAddress {
  streetNumber: string;
  streetName: string;
  postalCode: string;
  region: region;
}
