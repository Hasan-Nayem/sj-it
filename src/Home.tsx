import { Hero } from './components/Hero';
import { ProjectSlider } from './components/ProjectSlider';
import { Mission } from './components/Mission';
import { AboutExperience } from './components/AboutExperience';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { TeamAndCapabilities } from './components/TeamAndCapabilities';
import { ContactAndFooter } from './components/ContactAndFooter';

export default function Home() {
  return (
    <main>
      <div id="product"><Hero /></div>
      <div id="solution"><ProjectSlider /></div>
      <Mission />
      <div id="about"><AboutExperience /></div>
      <div id="service"><Services /></div>
      <WhyChoose />
      <div id="outsourcing"><TeamAndCapabilities /></div>
      <div id="contact"><ContactAndFooter /></div>
    </main>
  );
}
