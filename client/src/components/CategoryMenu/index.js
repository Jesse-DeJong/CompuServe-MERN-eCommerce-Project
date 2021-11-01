import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../state/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../state/actions';
import { QUERY_CATEGORIES } from '../../gql/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return ( <>
    <div>
      <h2>Filter by Category:</h2>
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        {categories.map((item, index) => ( <>
  <label 
  className="btn btn-outline-dark" 
  htmlFor={item._id}>
    {item.name}</label>
  <input 
  key={item._id}
  onClick={() => {handleClick(item._id);}}
  type="checkbox" 
  className="btn-check" 
  id={item._id} 
  autoComplete="off"
  style={{}}
  ></input>
        </> ))}
        

</div>

    </div>
    </>
  );
}

export default CategoryMenu;
