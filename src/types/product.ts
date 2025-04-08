export type Product = {
    id: number,
    name: string,
    price: number,
}

export type CartItem = Product & {quantity: number}

export interface CartState {
    items: CartItem[],
}
