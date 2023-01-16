import Image from 'next/image';
import styled from 'styled-components';
import { format } from 'date-fns';
import Link from 'next/link';

const ItemsStyles = styled.div`
  
  align-items: flex-start;
  display: grid;
  gap: 3.5rem;
  grid-template-columns: auto auto auto;
  padding: 4rem 0 2rem 0;
  overflow: hidden;

h4 {
  font-weight: 300;
  padding-top: 2rem;
}

p {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-style: normal;
  padding-top: 0.65rem;
}

@media only screen and (max-width: 768px) {

  grid-template-columns: auto;
}

`
const ItemFrame = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0px;

`

export function BlogItems(props) {

  const postsToShow = props.postsToRender;

    return(
        <div>
          <ItemsStyles>
          { postsToShow !== undefined && postsToShow.length > 0 ? postsToShow.map(post => {
              return (  
              <ItemFrame
                key={post.url_c}
              >
                <Link
                  href={{pathname: post.id + "-" + props.theme}}>
                    <div>
                      <Image
                        key={post.url_c}
                        src={post.url_c}
                        alt="Blog Logo"
                        width={props.imgWidth}
                        height={props.imgHeight}
                      />
                    </div>
                    <h4>{post.title}</h4>
                    <p>{format(new Date(post.datetaken), 'dd-MMM-yyyy')}</p>
                  </Link>
              </ItemFrame>
          )}) : "Loading Posts..."}
          </ItemsStyles>
        </div>
      )}