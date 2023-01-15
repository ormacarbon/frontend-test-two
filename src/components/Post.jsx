import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { HeadingLine } from './HeadingLine' ;
import { CalendarBlank, CaretDoubleLeft, CaretDoubleRight, Circle } from 'phosphor-react';

const PostStyles = styled.div`
  padding-top: 3.875rem; 
  text-align: center;

  h1 {
    padding-top: 3rem;
    font-style: normal;
    font-weight: 100;
  }

  p {
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  span {
    padding-left: 1rem;
  }

  @media only screen and (max-width: 768px) {

   img {
    max-width: 70vw;
    height: auto;
   }

  }

`
const PostDescription = styled.div`

  margin-top: 2rem;

  a {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 1rem;
  }

  span {
    color: var(--red);
    margin-right: 0.25rem;
  }

  span:nth-child(1) {
    color: var(--blueflickr);
  }
`
const LinkSection = styled.div`
  padding-bottom: 4rem;

  a{
    margin: 0 1rem;
  }
`
const flickrLink = "https://www.flickr.com/photos/182095888@N06/"
let currentPost, nextPost, prevPost;

export function Post(props) {

  const photosArray = props.photos.photo;
  const postId = props.postId;
 
  if (photosArray !== undefined) {
    currentPost = photosArray.filter(function(item){
     return postId.indexOf(item.id) > -1;
   })
    prevPost = photosArray[photosArray.indexOf(currentPost[0])-1]
    nextPost = photosArray[photosArray.indexOf(currentPost[0])+1]
 }

 return(
    <PostStyles>
      { currentPost !== undefined && currentPost.length > 0 ? 
        <div>
          <h1>{currentPost[0].title}</h1>
          <HeadingLine />
          <p>{format(new Date(currentPost[0].datetaken), 'dd-MMM-yyyy')}</p>
          <Link href={currentPost[0].url_c}>
            <Image 
              width={currentPost[0].width_c}
              height={currentPost[0].height_c}
              src={currentPost[0].url_c}
              alt={currentPost[0].title}
            />
          </Link>
          <PostDescription>
            <p>{currentPost[0].description._content.replace(/&quot;/g, '\"')}</p>
            <a 
              href={flickrLink + currentPost[0].id} 
              target="_blank" 
              rel="noreferrer"
            >
              <p>
                <span>
                  <Circle size={10} weight="fill" color='#0063DC'/>
                  <Circle size={10} weight="fill" color='#ff0084'/>
                </span>
                Full Post Here
              </p>
            </a>
          </PostDescription>
          <LinkSection>
            {prevPost !== undefined ? 
              <>
                <Link href={prevPost.id}><CaretDoubleLeft size={16} weight="bold" /><span></span>Previous Post</Link> 
              </>
              : null 
            }
            <span></span>
            {nextPost !== undefined ? 
            <>
              <Link href={nextPost.id}>Next Post<span></span><CaretDoubleRight size={16} weight="bold" /> </Link>
            </>
            : null 
            }
          </LinkSection>
        </div> : "Loading Posts..."}
    </PostStyles>
 )
}