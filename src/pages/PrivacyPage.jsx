import LegalPage from './LegalPage';
import { PRIVACY_INTRO, PRIVACY } from './privacyData';

export default function PrivacyPage() {
  return (
    <LegalPage
      title={
        <>
          Privacy <span>Policy</span>
        </>
      }
      intro={PRIVACY_INTRO}
      sections={PRIVACY}
    />
  );
}
