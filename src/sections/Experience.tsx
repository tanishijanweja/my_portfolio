import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "CallHQ.ai",
    url: "https://callhq.ai/",
    period: "March 2026 – Present",
    type: "Internship",
    highlights: [
      "Building and maintaining web features for the CallHQ platform",
      "Collaborating with the team on frontend tasks",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <SectionHeader
          eyebrow="Where I've Worked"
          title="Experience"
          description="Key roles and responsibilities that strengthened my skills."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-8">
          {experiences.map((exp) => (
            <Card
              key={`${exp.role}-${exp.company}`}
              className="px-8 pt-8 pb-8 md:pt-10 md:px-10 lg:pt-12 lg:px-16"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="inline-flex text-pink-400 gap-2 font-bold uppercase tracking-widest text-sm">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {exp.company}
                    </a>
                    <span>&bull;</span>
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="font-sans text-2xl mt-2 md:text-3xl text-black dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-black/50 dark:text-white/40 mt-1">
                    {exp.period}
                  </p>
                  <hr className="border-t-2 border-black/10 dark:border-white/5 mt-4" />
                  <ul className="flex flex-col gap-3 mt-4">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm md:text-base text-black/60 dark:text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
