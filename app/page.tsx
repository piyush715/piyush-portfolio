import Image from "next/image";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import {
  about,
  experience,
  navItems,
  profile,
  projects,
  skills,
} from "@/lib/content";

const wrap = "mx-auto w-full max-w-[96rem] px-6 lg:px-12";
const rail = "grid gap-8 lg:grid-cols-[13rem_1fr] lg:gap-12";
const railLabel = "text-sm text-dim lg:pt-4";
const h2 =
  "font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.02em]";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-baseline gap-2 border-b border-line-strong pb-1 text-lg text-fg transition-colors duration-300 hover:border-fg"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
      <span aria-hidden="true" className="text-sm text-dim transition-colors group-hover:text-fg">
        ↗
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav items={navItems} />

      <main id="main">
        {/* HERO */}
        <section id="home" aria-label="Introduction" className="relative isolate overflow-hidden">
          <div
            className={`${wrap} relative flex min-h-svh flex-col pb-12 pt-28 lg:h-svh lg:min-h-[48rem] lg:pb-14`}
          >
            {/* Portrait */}
            <div className="hero-portrait relative order-2 mx-auto mt-8 aspect-[3/4] w-[80%] max-w-sm lg:absolute lg:bottom-0 lg:right-12 lg:order-none lg:mx-0 lg:mt-0 lg:h-[88%] lg:w-auto lg:max-w-none">
              <Image
                src="/images/profile.png"
                alt="Portrait of Piyush Kotkar"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover grayscale contrast-[1.08] brightness-[0.8]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ink to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-ink to-transparent lg:hidden" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-ink via-ink/60 to-transparent" />
            </div>

            {/* Role, message, actions */}
            <div className="relative z-10 order-3 mt-10 max-w-md lg:order-1 lg:mt-6 lg:max-w-lg">
              <p className="hero-soft text-sm text-mute">{profile.title}</p>
              <p className="hero-soft mt-5 text-xl leading-snug text-fg sm:text-2xl">
                {profile.message}
              </p>
              <div className="hero-soft hero-soft-2 mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-white"
                >
                  Contact me
                </a>
                <a
                  href="#projects"
                  className="rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium transition-colors duration-300 hover:bg-white/5"
                >
                  View projects
                </a>
              </div>
              <p className="hero-soft hero-soft-2 mt-8 flex items-center gap-2.5 text-sm text-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-fg" aria-hidden="true" />
                Open to opportunities
              </p>
            </div>

            {/* Name */}
            <h1 className="relative z-10 order-1 font-display text-[26vw] leading-[0.84] tracking-[-0.035em] sm:text-[22vw] lg:order-2 lg:mt-auto lg:text-[clamp(7rem,14.2vw,15rem)] lg:leading-[0.9]">
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] lg:inline-block lg:mr-[0.22em]">
                <span className="hero-line block">Piyush</span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em] lg:inline-block">
                <span className="hero-line hero-line-2 block">Kotkar</span>
              </span>
            </h1>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-line">
          <div className={`${wrap} py-24 sm:py-32`}>
            <div className={rail}>
              <Reveal>
                <p className={railLabel}>About</p>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className={`${h2} max-w-5xl`}>{about.statement}</h2>
                </Reveal>
                <div className="mt-12 max-w-2xl space-y-6 text-base leading-8 text-mute sm:text-lg">
                  {about.paragraphs.map((p, i) => (
                    <Reveal key={i} delay={i * 80}>
                      <p>{p}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-t border-line">
          <div className={`${wrap} py-24 sm:py-32`}>
            <div className={rail}>
              <Reveal>
                <p className={railLabel}>Skills</p>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className={h2}>Technologies I work with.</h2>
                </Reveal>
                <dl className="mt-14 border-t border-line">
                  {Object.entries(skills).map(([category, items], i) => (
                    <Reveal key={category} delay={i * 40}>
                      <div className="grid gap-3 border-b border-line py-7 md:grid-cols-[14rem_1fr] md:gap-10">
                        <dt className="text-sm text-dim md:pt-1.5">{category}</dt>
                        <dd className="text-xl leading-snug text-fg sm:text-2xl">
                          {items.join(", ")}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-t border-line">
          <div className={`${wrap} py-24 sm:py-32`}>
            <div className={rail}>
              <Reveal>
                <p className={railLabel}>Projects</p>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className={h2}>Things I’ve built.</h2>
                </Reveal>
                <ul className="mt-14 border-t border-line">
                  {projects.map((project) => (
                    <li key={project.title}>
                      <Reveal>
                        <article className="group grid gap-4 border-b border-line py-10 transition-colors duration-500 hover:border-line-strong md:grid-cols-[14rem_1fr] md:gap-10 md:py-12">
                          <p className="text-sm text-dim md:pt-3">
                            {project.category}
                          </p>
                          <div>
                            <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.015em] transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
                              {project.title}
                            </h3>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
                              {project.description}
                            </p>
                          </div>
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-t border-line">
          <div className={`${wrap} py-24 sm:py-32`}>
            <div className={rail}>
              <Reveal>
                <p className={railLabel}>Experience</p>
              </Reveal>
              <div>
                <Reveal>
                  <h2 className={h2}>Where I’ve worked.</h2>
                </Reveal>
                <ol className="mt-14 border-t border-line">
                  {experience.map((job) => (
                    <li key={job.company}>
                      <Reveal>
                        <div className="grid gap-4 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-10 md:py-12">
                          <p className="text-sm text-dim md:pt-2">{job.date}</p>
                          <div>
                            <h3 className="font-display text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
                              {job.role}
                            </h3>
                            <p className="mt-2 text-base text-fg">{job.company}</p>
                            <p className="mt-5 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
                              {job.description}
                            </p>
                            <p className="mt-5 text-sm text-dim">
                              {job.tech.join(", ")}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-line">
          <div className={`${wrap} py-28 sm:py-40`}>
            <Reveal>
              <h2 className="max-w-5xl font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.98] tracking-[-0.03em]">
                Let’s build something <span className="text-mute">meaningful.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <a
                  href={`mailto:${profile.email}`}
                  className="w-fit break-all border-b border-line-strong pb-2 text-2xl text-fg transition-colors duration-300 hover:border-fg sm:text-4xl"
                >
                  {profile.email}
                </a>
                <div className="flex flex-wrap gap-x-9 gap-y-4">
                  <ExternalLink href={profile.github}>GitHub</ExternalLink>
                  <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                  <ExternalLink href={profile.resume}>Resume</ExternalLink>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div
          className={`${wrap} flex flex-col justify-between gap-2 py-8 text-sm text-dim sm:flex-row`}
        >
          <span>© 2026 {profile.name}</span>
          <span>{profile.title}</span>
        </div>
      </footer>
    </>
  );
}
