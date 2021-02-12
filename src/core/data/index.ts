import { Auth, Food, UserAuthenticated } from "../entities";

export const foodsMockData: Food[] = [
  {
    foodId : 1,
    description: "Food description available today",
    price: 8,
    title: "Ensaladas",
    image:
      "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
    category: "lunch",
  },
  {
    foodId : 2,
    description: "Food description available today",
    price: 5,
    title: "Gaseosa",
    image:
      "https://cdn.pixabay.com/photo/2019/11/23/19/11/glasses-of-mint-4647914__340.jpg",
    category: "lunch",
  },
  {
    foodId : 3,
    description: "Food description available today",
    price: 6.33,
    title: "Hamburguesa",
    image:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg",
    category: "breakfast",
  },
  {
    foodId : 4,
    description: "Food description available today",
    price: 15.4,
    title: "Papas fritas",
    image:
      "https://media.istockphoto.com/photos/beer-snacks-potato-chips-picture-id1166384151?b=1&k=6&m=1166384151&s=170667a&w=0&h=4yY9gTAsr024hQ663rQqWgWUgXCujIjv3LzyGyCvmq8=",
    category: "lunch",
  },
  {
    foodId : 5,
    description: "Food description available today",
    price: 5.2,
    title: "Jugo natural",
    image:
      "https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822__340.jpg",
    category: "breakfast",
  },
  {
    foodId : 6,
    description: "Food description available today",
    price: 10.2,
    title: "Café con leche",
    image:
      "https://media.istockphoto.com/photos/cup-of-coffee-latte-isolated-on-white-background-with-clipping-path-picture-id1211524213?b=1&k=6&m=1211524213&s=170667a&w=0&h=1KkO0p9yVEcB62_t912flgn-SLhdc8e4oZwmSQYeSdY=",
    category: "breakfast",
  },
  {
    foodId : 7,
    description: "Food description available today",
    price: 9,
    title: "Sandwich de jamón",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/16/32/toast-1363232__340.jpg",
    category: "breakfast",
  },
];

export const authMockData: Auth = {
  email: "admin@gmail.com",
  password: "admin",
};

export const userAuthenticatedMockData : UserAuthenticated = {
  name : "Admin",
  token : "afh397h293hg823g02j920j9010f8301fj3f3ff1f2",
  userId : 1,
  logged: true
}