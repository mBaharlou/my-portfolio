import PageShell from '../components/shared/PageShell';
import ProjectCard from '../components/shared/ProjectCard';
import { projectCards } from '../data/site';

function WorksPage() {
  return (
    <PageShell
      eyebrow="My Works"
      title="Stylish project placeholders designed to look deploy-ready today."
      description="These cards use placeholder content for now, but the page is already structured for future portfolio updates with clean, swappable data."
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
