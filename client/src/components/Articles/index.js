import React, { useEffect } from 'react';
import { useStoreContext } from '../../state/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ARTICLES } from '../../gql/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import ArticleCard from './articleCard';
import { UPDATE_ALL_ARTICLES } from '../../state/actions';

function Articles() {
    const [state, dispatch] = useStoreContext();
  
    const { loading, error, data } = useQuery(QUERY_ALL_ARTICLES);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_ALL_ARTICLES,
                articles: data.articles
            });
            data.articles.forEach((article) => {
                idbPromise('articles', 'put', article);
            });
        } else if (!loading) {
            idbPromise('articles', 'get').then((articles) => {
                dispatch({
                    type: UPDATE_ALL_ARTICLES,
                    articles: articles
                });
            });
        }
    }, [data, loading, dispatch]);

    return (
        <div className="card px-1 py-1">
        <h2>Articles</h2>
            {state.articles.length ? (
                <div>{state.articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    date={article.writtenDate}
                    author={article.author}
                    heading={article.heading}
                    body={article.body}
                    />
                ))}
            </div>
            ) : (
                <h3>You haven't added any articles yet!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
      );
    }


//     const { currentCategory } = state;
  
//     const { loading, data } = useQuery(QUERY_ALL_ARTICLES);
  
//     useEffect(() => {
//       if (data) {
//         dispatch({
//           type: QUERY_ALL_ARTICLES,
//           products: data.products,
//         });
//         data.products.forEach((product) => {
//           idbPromise('products', 'put', product);
//         });
//       } else if (!loading) {
//         idbPromise('products', 'get').then((products) => {
//           dispatch({
//             type: UPDATE_PRODUCTS,
//             products: products,
//           });
//         });
//       }
//     }, [data, loading, dispatch]);
  
//     function filterProducts() {
//       if (!currentCategory) {
//         return state.products;
//       }
  
//       return state.products.filter(
//         (product) => product.category._id === currentCategory
//       );
//     }
  
//     return (
//       <div className="my-2">
//         <h2>Our Products:</h2>
//         {state.products.length ? (
//           <div className="flex-row">
//             {filterProducts().map((product) => (
//               <ProductItem
//                 key={product._id}
//                 _id={product._id}
//                 image={product.image}
//                 name={product.name}
//                 price={product.price}
//                 quantity={product.quantity}
//               />
//             ))}
//           </div>
//         ) : (
//           <h3>You haven't added any products yet!</h3>
//         )}
//         {loading ? <img src={spinner} alt="loading" /> : null}
//       </div>
//     );
//   }

export default Articles;