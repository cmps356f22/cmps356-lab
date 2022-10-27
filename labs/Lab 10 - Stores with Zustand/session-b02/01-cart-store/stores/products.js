import { faker } from "@faker-js/faker";

faker.seed(0);

const categories = ["all", "cat", "dog", "lizard", "bird"];
const products = Array.from(Array(50)).map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.image.animals(600, 200, true),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(1, 100),
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
}));

export const productStore = (set, get) => ({
  products,
  categories,
});
