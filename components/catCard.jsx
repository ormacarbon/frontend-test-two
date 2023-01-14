import Image from "next/image";

export default function CatCard(props) {
  const {url} = props;
  return (
    <div>
      {console.log(url)}
      <Image src={url} alt="A cat" width="500" height="600" />
    </div>
  );
}