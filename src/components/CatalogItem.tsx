import { useCallback } from "react";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();
  
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <h2>{product.title}</h2>
      <span>{product.price}</span>

      <button onClick={handleAddProductToCart} type="button">
        Buy
      </button>
    </article>
  );
};

export default CatalogItem;
