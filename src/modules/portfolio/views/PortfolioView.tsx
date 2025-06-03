import { AboutContainer } from "../containers/AboutContainer";
import { ContactContainer } from "../containers/ContactContainer";
import { ProjectsContainer } from "../containers/ProjectsContainer";

export const PortfolioView = () => {
  return (
    <main className="min-h-screen space-y-24 px-4 py-10  mx-auto">
      <AboutContainer />
      <ProjectsContainer />
      <ContactContainer />
    </main>
  );
};
