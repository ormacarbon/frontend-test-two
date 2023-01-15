export default function DogCard(props) {
  const {title, text} = props;
  return (
    <div>
      <h5>
        {title}
      </h5>
      <p>
        {text}
      </p>
    </div>
  );
}