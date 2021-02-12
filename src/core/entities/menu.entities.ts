import { User } from "./user.entities";

export interface Food {
  foodId?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
  category?: string;
}

export interface OrderFood {
  orderFoodId?: number;
  total?: number;
  data: Food;
}

export interface Order {
  orderId: number;
  user: User;
  items: OrderFood[];
  completed?: boolean;
}

export interface HistoryOrder {
  orderId?: number;
  totalPrice?: number;
  user: User;
}
