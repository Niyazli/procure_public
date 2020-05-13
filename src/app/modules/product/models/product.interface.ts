export interface IProduct {
  id: number;
  name: string;
  isActive?: boolean;
  productInfo: ProductInfo[];
}

interface ProductInfo {
  title: string;
  description: string;
}
