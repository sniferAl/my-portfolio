type SkillsListProps = {
  skills: string[];
};

export const SkillsList = ({ skills }: SkillsListProps) => (
  <div className="flex flex-wrap gap-2">
    {skills.map((skill) => (
      <span
        key={skill}
        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
      >
        {skill}
      </span>
    ))}
  </div>
);
