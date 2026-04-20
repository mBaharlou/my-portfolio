import PageShell from "../components/shared/PageShell";
import ProjectCard from "../components/shared/ProjectCard";
import { projectCards } from "../data/site";

function WorksPage() {
  return (
    <PageShell
      eyebrow="My Works"
      title="my favorites jobs i did."
      description="i will add them next time you visit."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </PageShell>
  );
}

export default WorksPage;
