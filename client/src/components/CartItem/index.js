import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useStoreContext } from "../../state/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../state/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  const styles = {
    trash: {
      height: '35px',
      fontSize: '20px'
    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt={item.name}
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div className="container-fluid d-flex">

          <div class="form-floating mb-3">
            <input 
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
              onChange={onChange}
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
            ></input>
            <label for="floatingInput">Qty:</label>
          </div>
          <FontAwesomeIcon 
            role="img"
            aria-label="trash"
            style={styles.trash}
            onClick={() => removeFromCart(item)} 
            icon={faTrashAlt}
          ></FontAwesomeIcon>

        </div>
      </div>
    </div>
  );
}

export default CartItem;