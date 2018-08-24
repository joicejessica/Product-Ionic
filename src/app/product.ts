export class Product{
    id: number;
    name: string;
    price: number;
    productId: number;
    version: number;
    constructor(values: Object = {}) {
        Object.assign(this, values);
   }
}