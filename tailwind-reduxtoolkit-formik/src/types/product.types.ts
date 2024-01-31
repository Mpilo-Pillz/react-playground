export interface Product {
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

export interface Review {
  name: string;
  rating: string;
  comment: string;
}

export interface ProductState {
  products: Product[];
}
