import { ProfileCard } from "../components/seccions/abaout/ProfileCard";
import { SkillsList } from "../components/seccions/abaout/SkillList";

export const AboutContainer = () => {
  const profile = {
    name: "Royer Alonzo Palian",
    bio: "Frontend Developer especializado en React y TypeScript.",
    avatarUrl: "/royer.jpg",
  };

  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

  return (
    <section className="max-w-4xl mx-auto space-y-8 px-4 py-10">
      <ProfileCard {...profile} />
      <div>
        <h2 className="text-xl font-bold mb-2">Habilidades</h2>
        <SkillsList skills={skills} />
      </div>
    </section>
  );
};
