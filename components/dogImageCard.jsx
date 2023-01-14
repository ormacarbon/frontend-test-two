import Image from "next/image";

export default function DogImageCard(props) {
  const {url} = props;
  return (
    <div>
      {console.log(url)}
      <Image 
        src={url} 
        alt="A dog" 
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: 'auto', height: 'auto' }} />
    </div>
  );
}
