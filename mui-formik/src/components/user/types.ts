type region = "Lowveld" | "Highveld" | "Middleveld" | "Hhohho";

export interface Address {
  streetNumber: string;
  streetName: string;
  postalCode: number;
  region: region;
}
