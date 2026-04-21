import PageShell from "../components/shared/PageShell";
import SkillGroupCard from "../components/shared/SkillGroupCard";
import { skillGroups } from "../data/site";

function SkillsPage() {
  return (
    <PageShell
      eyebrow="My Skills"
      title="my skills are learned in +3 years learning by my self."
      description="down here you will see my skills"
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} {...group} />
        ))}
      </div>
    </PageShell>
  );
}

export default SkillsPage;
