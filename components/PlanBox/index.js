import PlanIcon from "../../assets/plan-icon";
import {
  PlanContainer,
  PlanIconContainer,
  Title,
  Overview,
  PriceContainer,
  Price,
  Paragraph,
  Button,
} from "./styles";

const PlanBox = (props) => {
  return (
    <PlanContainer>
      <PlanIconContainer>
        {props.icon.map((a) => (
          <PlanIcon key={a} />
        ))}
      </PlanIconContainer>
      <Title>{props.title}</Title>
      <Overview>
        <span>+ {props.overview} News</span>
        <br />
        Per Mounth
      </Overview>
      <PriceContainer>
        <span>USD $</span>
        <Price>{props.price}</Price>
        <span>/mo</span>
      </PriceContainer>
      {props.text ? <Paragraph>{props.text}</Paragraph> : ""}
      <Button>Get Now</Button>
    </PlanContainer>
  );
};

export default PlanBox;
