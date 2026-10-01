import { InsuranceHero } from "../components/InsuranceHero";
import { InsuranceInfo } from "../components/InsuranceInfo";
import { InsuranceFAQ } from "../components/InsuranceFAQ";

export function InsurancePage() {
  return (
    <div>
      <InsuranceHero />
      <InsuranceInfo />
      <InsuranceFAQ />
    </div>
  );
}
