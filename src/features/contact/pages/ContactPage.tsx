import { ContactHero } from '../components/ContactHero';
import { ContactInfo } from '../components/ContactInfo';
import { ContactForm } from '../components/ContactForm';

export function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}