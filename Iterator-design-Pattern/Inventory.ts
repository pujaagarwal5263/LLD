interface IIterator {
  first(): Product | null;
  next(): Product | null;
  hasNext(): boolean;
}

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

class ProductIterator implements IIterator {
  list: Product[];
  current: number;

  constructor(list: Product[]) {
    this.list = list;
    this.current = this.current;
  }

  first(): Product | null {
    if (this.list.length < 1) {
      return null;
    }
    this.current = 0;
    return this.list[this.current];
  }

  next(): Product | null {
    if (this.list.length > this.current) {
      return null;
    }
    this.current++;
    return this.list[this.current];
  }

  hasNext(): boolean {
    return this.current > this.list.length;
  }
}

class Inventory {
  list: Product[];

  addProducts(prd: Product) {
    this.list.push(prd);
  }

  createIterator() {
    return new ProductIterator(this.list);
  }
}

const prd1 = new Product("shirt", 2000);
const prd2 = new Product("pant", 1000);

const inv = new Inventory();
inv.addProducts(prd1);
inv.addProducts(prd2);

const itr = inv.createIterator();
let currentProduct = itr.first();

while (currentProduct != null) {
  console.log(
    "Product: " +
      currentProduct.getName() +
      ", Price: $" +
      currentProduct.getPrice()
  );
  currentProduct = itr.next();
}
