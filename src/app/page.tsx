import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import { Mail } from "lucide-react";
import Image from "next/image";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col gap-20">
        <div className="border-b border-x border-neutral-300/80">
          {/* TODO: Summary about Karan Barman */}
          <div className="flex flex-col gap-6 p-2">
            <div className="">
              <Image
                src="/karan.png"
                alt="Karan's Photo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">Hi, I&apos;m Karan</h1>
              <div className="border rounded-full border-neutral-500 p-2">
                <Mail className="size-5 text-neutral-500" />
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">
                {/* TODO: SUMMARY */}Full Stack Developer with over a year of
                experience building scalable, production-ready applications.
                Currently developing a document editor to simplify collaborative
                writing. Passionate about crafting seamless user experiences and
                robust systems using modern technologies.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {skills.map((skill) => (
                <div
                  key={skill.value}
                  className="py-1 px-2 border border-neutral-500/80 my-1 mx-2 rounded-full text-sm flex gap-1 items-center"
                >
                  <Image
                    src={`/${skill.image}`}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className="size-3"
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80">
          {/* TODO: Experience */}
        </div>
        <div className="border-b border-x border-neutral-300/80">
          {/* TODO: Education */}
        </div>
        <div className="border-b border-x border-neutral-300/80">
          {/* TODO: Projects */}
        </div>
        <div className="border-b border-x border-neutral-300/80">
          {/* TODO: GitHub */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
