export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    items: ICartItem[]
}