import Image from "next/image";

import { jobs } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import AboutSidebar from "./sidebar";

const PortfolioPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      {/* hero */}
      <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
        <div className="order-2 duration-700 animate-in slide-in-from-top-full lg:order-none">
          <h1 className="mb-8 basis-1/2 text-3xl font-black tracking-tight sm:text-5xl lg:leading-tight">
            I&apos;m {siteConfig.author.name}. I live in La Paz Bolivia, where I
            build the future.
          </h1>

          <p className="sm:text-1.5xl text-base leading-relaxed text-foreground/90">
            I&apos;m, a Software Engineer focused on frontend, backend and
            mobile development. Passionate about continuous learning. 😁
          </p>
          {/* socials */}
          <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4 duration-700 animate-in slide-in-from-bottom-full">
            {Object.values(siteConfig.links).map(
              ({ title, href, icon: Icon }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    rel="noreferer noopener"
                    target="_blank"
                    className="group flex items-center border-b border-border"
                  >
                    <Icon
                      className="size-4 shrink-0 text-foreground/60 duration-300 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                    &nbsp;
                    {title}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <AboutSidebar />
      </section>

      {/* work */}
      <section className="duration-700 animate-in slide-in-from-bottom-full">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {jobs.map((data, i) => (
            <div
              key={i}
              className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-20 before:h-[calc(100%-70px)] before:w-px before:bg-muted lg:gap-x-6"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="relative grid min-h-[80px] min-w-[80px] place-items-center text-clip rounded-md border border-border bg-secondary/50 p-2"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.title} logo`}
                  width={50}
                  height={50}
                />
              </a>

              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.title}</h3>

                <p>{data.jobTitle}</p>

                <time className="mt-2 text-sm uppercase tracking-widest text-foreground/40">
                  {data.startDate} -{" "}
                  {data.endDate ? (
                    data.endDate
                  ) : (
                    <span className="text-green-600 dark:text-green-300">
                      Present
                    </span>
                  )}
                </time>
                <p className="my-4 tracking-tight text-foreground/60 hover:text-foreground/75">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
