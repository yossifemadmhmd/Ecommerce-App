export interface IProduct {
quantity: any;
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating?: {
    rate: number;
    count: number;
  };
}
