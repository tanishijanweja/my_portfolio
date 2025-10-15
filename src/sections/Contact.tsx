import { Card } from "@/components/Card";
import { ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <Card className="py-8 px-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-black bg-white inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max justify-center cursor-pointer outline-2 hover:outline-pink-400">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
