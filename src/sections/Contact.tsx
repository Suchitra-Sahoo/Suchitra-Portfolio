import { Card } from "@/components/Card";
import { ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <Card className="py-8 px-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-sans text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a
                href="https://mail.google.com/mail/u/0/?to=suchitrasahoo874@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black  bg-white inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max justify-center cursor-pointer outline-2 hover:outline-pink-400 outline- from-pink-300 to-pink-500"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
