import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BlogItems } from './BlogItems';

const FavoriteSectionStyles = styled.div`
  background-color: var(--gray-700);  
  border-top: 1px solid var(--gray-500);
  padding: 6rem 0;
  text-align: center;
  h1 {
    color: var(--reddark);
  }

  img {
    object-fit: cover;
    -o-transition: all .8s; 
    -moz-transition: all .8s; 
    -webkit-transition: all .8s; 
    -ms-transition: all .8s; 
    transition: all .8s;
  }

  img:hover {
    -o-transform: scale(1.02); 
    -moz-transform: scale(1.02); 
    -webkit-transform: scale(1.02); 
    -ms-transform: scale(1.02); 
    transform: scale(1.02); 
    overflow: hidden;
  }
`

const HeadingLine = styled.span`
  border-bottom: 1px solid var(--reddark);;  
  display: inline-block;
  margin: .75rem 0 1.75rem 0;
  width: 200px;
  
`

const Button = styled.button`
  background: ${props => (props.primary ? "var(--reddark)" : "var(--alpha-30)")};
  border: ${props => (props.primary ? "none" : "1px solid var(--gray-100)")};
  border-radius: 4px;
  color: var(--grey-100);
  cursor: pointer;
  font-size: 1rem;
  margin: 10px;
  padding: 5px 20px;
  
  :hover {
    background-color: ${props => (props.primary ? "rgba(189, 75, 75, 0.7)" : "rgba(0, 0, 0, 0.1)")};
    border: ${props => (props.primary ? "none" : "1px solid var(--gray-200)")};
    color: var(--gray-200);
    transition: 250ms ease;
  }
`;

let arrayToHoldFavs = []; // trocar para dentro de RecentSection(), mas usar useRef

export function FavoriteSection(props) {

  let posts = props.favPhotos.photo

  const postsPerRow = 3;
  const [postsToRender, setPostsToRender] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (startPost, endPost) => {
    const slicedPosts = posts.slice(startPost, endPost);
    arrayToHoldFavs.push(...slicedPosts);
  };

  useEffect(() => {
    const initialPosts = [posts[0], posts[1], posts[2]]
    setPostsToRender(initialPosts);
    arrayToHoldFavs = initialPosts;
  }, [posts]);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerRow);
    setNext(next + postsPerRow);
  };

  return(
    <FavoriteSectionStyles>
      <div className='wrapper'>
        <h1>My Favorite Posts</h1>
        <HeadingLine />
        <p> Here is a collection of my greatest moments! </p>
          {postsToRender ? 
            <BlogItems 
              key={props.id}
              id={props.id}
              imgHeight={260}
              imgWidth={260}
              recentPhotos = {props.recentPhotos}
              photoDates = { props.photoDates }
              postsToRender = {postsToRender}
            /> : "Loading posts..."
          }
        <Button 
          onClick={handleShowMorePosts}
          primary
        > 
          Load More 
        </Button> 
      </div>
    </FavoriteSectionStyles>
  )
}