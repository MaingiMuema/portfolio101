import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import Practice from "@/components/home/Practice";
import ExperienceSection from "@/components/home/ExperienceSection";
import Profile from "@/components/home/Profile";
import ConceptLab from "@/components/home/ConceptLab";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Practice />
      <ExperienceSection />
      <Profile />
      <ConceptLab />
      <Contact />
    </>
  );
}
