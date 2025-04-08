import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from './cartSlice'

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>Carrinho vazio</p>}
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} (x{item.quantity}) - R$ {(item.price * item.quantity).toFixed(2)}
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
      {cart.length > 0 && <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>}
    </div>
  )
}
