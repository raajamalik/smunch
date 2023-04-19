export interface BaseType {
  id: number | undefined;
  createdDt: string | undefined;
  updatedDt: string | undefined;
}

export interface Address extends BaseType {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface User extends BaseType {
    firstName?: string;
    lastName?: string;
    email?: string;
    password: string;
    avatar?: string;
    addresses: Address[];
    reviews?: ReviewType[];
}

export interface ReviewType extends BaseType {
    title: string;
    content: string;
    rating: number;
  }
  
  export interface OrderItemType {
    id: number;
    product: string;
    productId: number;
    price: number;
    quantity: number;
    purchaseDate: string;
    review?: ReviewType | null;
    restaurantId: number;
  }