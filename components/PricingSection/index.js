import { Section, PlansContainer } from "./styles";
import { Title } from "../../styles/global";
import PlanBox from "../../components/PlanBox/index";

const PricingSection = () => {
  return (
    <Section>
      <Title align="center">Plans to Get More News</Title>
      <PlansContainer>
        <PlanBox icon={[1]} title="Basic" overview="10,000" price={10} />
        <PlanBox
          icon={[1, 2]}
          title="Master"
          overview="120,000"
          price={14}
          text="And Get 2 Accounts"
        />
      </PlansContainer>
    </Section>
  );
};

export default PricingSection;
