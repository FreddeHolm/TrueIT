import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// VIDOE : https://www.youtube.com/watch?v=ugCN_gynFYw
// WEBSITE FROM FIGMA: https://youtu.be/ugCN_gynFYw?si=slPEVy4Sj5SnwPOf&t=1459

const Page = () => (
  <div  className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative"> {/* Dessa divar är till för att få det coola bakgrundsljusen korrekt */}
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
