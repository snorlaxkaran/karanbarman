import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { skills } from "@/data/skills";
import Link from "next/link";
import ProjectsSvg from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col gap-0">
        <div className="border-b border-x border-neutral-300/80 py-10">
          {/* TODO: Summary about Karan Barman */}
          <div className="flex flex-col gap-6  py-2 px-4">
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
              <div className="flex gap-2">
                <Link href={"https://www.youtube.com/@codewithkaran17"}>
                  <Image
                    src={"/svgs/youtube1.svg"}
                    alt="youtube"
                    width={100}
                    height={100}
                    className="size-9"
                  />
                </Link>
                <div className="border rounded-full border-neutral-500 p-2">
                  <Mail className="size-5 text-neutral-500" />
                </div>
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
                    src={`/svgs/${skill.image}.svg`}
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
        <div className="border-b border-x border-neutral-300/80 py-10">
          {/* TODO: Experience */}
          <div className="flex flex-col gap-6  py-2 px-4">
            <div>
              <h1 className="text-2xl font-medium">Experience</h1>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/samyak.png"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block"
                  unoptimized
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className="text-lg text-[#555] ">
                  <h2>Samyak Infotech</h2>
                </div>
                <div>
                  <p className="text-[#333] text-xl">Frontend Developer</p>
                  <p className="text-[#777] text-sm">Mar 2024 - Nov 2024</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/samyak.png"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block"
                  unoptimized
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className="text-lg text-[#555] ">
                  <h2>Samyak Infotech</h2>
                </div>
                <div>
                  <p className="text-[#333] text-xl">Frontend Developer</p>
                  <p className="text-[#777] text-sm">Mar 2024 - Nov 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80 py-10">
          {/* Education Section */}
          <div className="flex flex-col gap-6 py-2 px-4">
            <div>
              <h1 className="text-2xl font-medium">Education</h1>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/svgs/graduate.svg"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block"
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className="text-lg font-medium">
                  <h2>University of Rajasthan</h2>
                </div>
                <div>
                  <p className="text-[#666]">
                    B.Sc, Physics, Chemistry & Mathematics
                  </p>
                  <p className="text-[#888]">2022 - 2025</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center text-[#666]">
                <Image
                  src={"/svgs/graduate.svg"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block"
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className="text-lg font-medium">
                  <h2>Gyan Vidhya Mandir</h2>
                </div>
                <div>
                  <p className="text-[#666]">12th, Science</p>
                  <p className="text-[#888]">2020 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80 py-10">
          {/* TODO: Projects */}

          <div className="flex flex-col gap-6 py-2 px-4">
            <div className="flex items-center gap-2 text-lg sm:text-xl">
              <ProjectsSvg />
              <h1 className="text-2xl font-medium">Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <div className=" relative w-full aspect-video">
                  <Image
                    src={"/nextjs.png"}
                    alt="project"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2 overflow-hidden">
                  <h3 className="tracking-tight text-base sm:text-lg font-medium flex items-center justify-between gap-x-2">
                    <span>Slugy</span>
                  </h3>
                  <div className="text-xs flex items-center justify-between">
                    <p>Oct 2024 - Present</p>
                  </div>
                </div>
                <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
                  Slugy is an open-source SaaS tool for fast, secure, and easy
                  link management, tracking and organization for individuals and
                  businesses.
                </p>
                <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
                  <Button size={"sm"} variant={"outline"}>
                    Next.js
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    TypeScript
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Prisma
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    PostgreSQL
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    AWS
                  </Button>
                </div>
                <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
                  <Button size={"sm"}>
                    <Globe />
                    Webiste
                  </Button>
                </div>
              </Card>
              <Card>
                <div className=" relative w-full aspect-video">
                  <Image
                    src={"/nextjs.png"}
                    alt="project"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2 overflow-hidden">
                  <h3 className="tracking-tight text-base sm:text-lg font-medium flex items-center justify-between gap-x-2">
                    <span>Slugy</span>
                  </h3>
                  <div className="text-xs flex items-center justify-between">
                    <p>Oct 2024 - Present</p>
                  </div>
                </div>
                <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
                  Slugy is an open-source SaaS tool for fast, secure, and easy
                  link management, tracking and organization for individuals and
                  businesses.
                </p>
                <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
                  <Button size={"sm"} variant={"outline"}>
                    Next.js
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    TypeScript
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Prisma
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    PostgreSQL
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    AWS
                  </Button>
                </div>
                <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
                  <Button size={"sm"}>
                    <Globe />
                    Webiste
                  </Button>
                </div>
              </Card>
              <Card>
                <div className=" relative w-full aspect-video">
                  <Image
                    src={"/nextjs.png"}
                    alt="project"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2 overflow-hidden">
                  <h3 className="tracking-tight text-base sm:text-lg font-medium flex items-center justify-between gap-x-2">
                    <span>Slugy</span>
                  </h3>
                  <div className="text-xs flex items-center justify-between">
                    <p>Oct 2024 - Present</p>
                  </div>
                </div>
                <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
                  Slugy is an open-source SaaS tool for fast, secure, and easy
                  link management, tracking and organization for individuals and
                  businesses.
                </p>
                <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
                  <Button size={"sm"} variant={"outline"}>
                    Next.js
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    TypeScript
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Prisma
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    PostgreSQL
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    AWS
                  </Button>
                </div>
                <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
                  <Button size={"sm"}>
                    <Globe />
                    Webiste
                  </Button>
                </div>
              </Card>
              <Card>
                <div className=" relative w-full aspect-video">
                  <Image
                    src={"/nextjs.png"}
                    alt="project"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2 overflow-hidden">
                  <h3 className="tracking-tight text-base sm:text-lg font-medium flex items-center justify-between gap-x-2">
                    <span>Slugy</span>
                  </h3>
                  <div className="text-xs flex items-center justify-between">
                    <p>Oct 2024 - Present</p>
                  </div>
                </div>
                <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
                  Slugy is an open-source SaaS tool for fast, secure, and easy
                  link management, tracking and organization for individuals and
                  businesses.
                </p>
                <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
                  <Button size={"sm"} variant={"outline"}>
                    Next.js
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    TypeScript
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Prisma
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    PostgreSQL
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    AWS
                  </Button>
                </div>
                <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
                  <Button size={"sm"}>
                    <Globe />
                    Webiste
                  </Button>
                </div>
              </Card>
              <Card>
                <div className=" relative w-full aspect-video">
                  <Image
                    src={"/nextjs.png"}
                    alt="project"
                    width={100}
                    height={100}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                    unoptimized
                  />
                </div>
                <div className="flex flex-col space-y-1.5 p-6 px-2 py-2 overflow-hidden">
                  <h3 className="tracking-tight text-base sm:text-lg font-medium flex items-center justify-between gap-x-2">
                    <span>Slugy</span>
                  </h3>
                  <div className="text-xs flex items-center justify-between">
                    <p>Oct 2024 - Present</p>
                  </div>
                </div>
                <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
                  Slugy is an open-source SaaS tool for fast, secure, and easy
                  link management, tracking and organization for individuals and
                  businesses.
                </p>
                <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
                  <Button size={"sm"} variant={"outline"}>
                    Next.js
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    TypeScript
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Prisma
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    PostgreSQL
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    AWS
                  </Button>
                </div>
                <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
                  <Button size={"sm"}>
                    <Globe />
                    Webiste
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80 py-10">
          {/* TODO: GitHub */}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
