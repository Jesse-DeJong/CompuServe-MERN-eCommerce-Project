import React, { useEffect } from 'react';
import { useStoreContext } from '../../state/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ARTICLES } from '../../gql/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import ArticleCard from './articleCard';
import { UPDATE_ALL_ARTICLES } from '../../state/actions';
import { useMediaQuery } from 'react-responsive'

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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
      })

    return (
        <div className="px-1 py-1">
            <div>
                <h2>Dive Deeper...</h2>
                <p>We'd recommend reading some of these articles if you'd like a better understanding of some of the features and technologies available today to help decide which are worth the investment cost for you.</p>
            </div>
            {state.articles.length ? (
                <div className="container d-flex flex-wrap justify-content-center">{state.articles.map((article, index) => (
                <ArticleCard
                    key={index}
                    date={article.writtenDate}
                    author={article.author}
                    heading={article.heading}
                    synopsis={article.synopsis}
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

export default Articles;