import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — X Studio Portfolio` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.name} — X Studio Portfolio` },
          { property: "og:description", content: loaderData.project.description },
          { property: "og:image", content: loaderData.project.img },
        ]
      : [{ title: "Project — X Studio Portfolio" }],
  }),
  component: ProjectPage,
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main className="grid min-h-[60vh] place-items-center px-4">
          <div className="text-center">
            <h1 className="font-display text-5xl">Project not found</h1>
            <p className="mt-3 text-foreground/70">No project matches "{slug}".</p>
            <Link to="/portfolio" className="mt-6 inline-block rounded-full bg-foreground px-5 py-3 text-sm text-background">Back to portfolio</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  },
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center bg-background text-foreground">
      <p>Something went wrong: {error.message}</p>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <section className="px-4 pt-16 pb-10 md:pt-24">
          <div className="mx-auto max-w-7xl">
            <Link to="/portfolio" className="text-sm text-foreground/60 hover:text-foreground">← All projects</Link>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]">{project.name}</h1>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1.5">{t}</span>
                ))}
                <span className="rounded-full border border-border px-3 py-1.5">{project.year}</span>
                <span className="rounded-full border border-border bg-foreground px-3 py-1.5 text-background">{project.category}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl">
            <img src={project.img} alt={project.name} className="aspect-[16/9] w-full object-cover" />
          </div>
        </section>

        <section className="px-4 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl leading-tight">About the project</h2>
              <p className="mt-6 text-foreground/75 md:text-lg">{project.description}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="text-xs uppercase tracking-widest text-foreground/50">Results</div>
                <ul className="mt-4 space-y-3">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] text-accent-foreground">✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-foreground p-10 text-background md:p-16">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Want a project <em className="text-background/60">like this?</em>
            </h2>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-6 pr-2 text-sm font-medium text-accent-foreground hover:bg-lime-deep"
            >
              Start a Similar Project
              <span className="grid size-9 place-items-center rounded-full bg-foreground/10 transition group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <h3 className="font-display text-3xl">More work</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {others.map((p) => (
                <Link key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden rounded-3xl bg-secondary">
                    <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.06]" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-xl">{p.name}</span>
                    <span className="text-xs text-foreground/60">{p.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}