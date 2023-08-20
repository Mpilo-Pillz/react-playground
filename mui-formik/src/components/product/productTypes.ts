export interface Review {
  name: string;
  rating: string;
  comment: string;
}

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  reviews: Review;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
}

export interface ProductResponse {
  page: number;
  pages: number;
  products: IProduct[];
}

export interface ISubscription {
  startDate: Date;
  monthlyFee: string;
  address: string;
  cellphone: string;
  plan: string;
  description: string;
}
