import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import { MdJavascript } from "react-icons/md";
import { FaCss3, FaGithub, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import mandala from "@/assets/images/mandala.jpeg";
import Link from "next/link";

const toolboxItems = [
  {
    title: "HTML",
    iconType: FaHtml5,
  },
  {
    title: "CSS",
    iconType: FaCss3,
  },
  {
    title: "JavaScript",
    iconType: MdJavascript,
  },
  {
    title: "GIT/GITHUB",
    iconType: FaGithub,
  },
  {
    title: "REACT",
    iconType: FaReact,
  },
  {
    title: "MONGODB",
    iconType: DiMongodb,
  },
  {
    title: "NODEJS",
    iconType: FaNode,
  },
  {
    title: "NEXTJS",
    iconType: RiNextjsFill,
  },
  {
    title: "TAILWINDCSS",
    iconType: RiTailwindCssFill,
  },
  {
    title: "TYPESCRIPT",
    iconType: SiTypescript,
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about me, who I am, what I do and what inspires me!"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Beyond the Code"
                description={
                  <>
                    I also draw pretty stuff when I'm not stuck on semicolons.
                    <Link
                      href="https://www.instagram.com/colours.of.infinity/"
                      className="text-pink-100/60 hover:text-pink-500 text-sm inline-block"
                    >
                      @colours.of.infinity
                    </Link>
                  </>
                }
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={mandala} alt="Mandala Image" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
