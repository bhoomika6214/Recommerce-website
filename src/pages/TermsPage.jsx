import LegalPage from './LegalPage';
import { TERMS } from './termsData';

export default function TermsPage() {
  return (
    <LegalPage
      title={
        <>
          Terms <span>&amp; Conditions</span>
        </>
      }
      sections={TERMS}
    />
  );
}
