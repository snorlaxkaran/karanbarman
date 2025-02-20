import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import { skills } from "@/data/skills";
import Link from "next/link";
import ProjectsSvg from "@/data/projects";
import Check from "@/data/icons/check";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
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
                unoptimized
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Hi, I&apos;m Karan</h1>
                <Link
                  href={"https://www.youtube.com/@codewithkaran17"}
                  className="flex items-center gap-x-1 text-blue-600 underline"
                >
                  <Image
                    src={"/svgs/youtube1.svg"}
                    alt="youtube"
                    width={100}
                    height={100}
                    className="size-5"
                  />{" "}
                  @codewithkaran17
                </Link>
              </div>
              <div className="flex gap-2">
                <Link href={"mailto:snorlax.karan@gmail.com"}>
                  <div className="border rounded-full border-neutral-500 p-2">
                    <Mail className="size-5 text-neutral-500" />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-[#666]">
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
        <div className="border-b border-x border-neutral-300/80 py-10 ">
          {/* TODO: Experience */}
          <div className="flex flex-col gap-6  py-2 px-4">
            <div>
              <h1 className="text-2xl font-medium">Experience</h1>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/internship1.png"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block scale-150"
                  unoptimized
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className=" flex gap-1 items-center">
                  <h2 className="text-[#555]">Internship Studio</h2>
                  <Check />
                </div>
                <div>
                  <p className="text-[#333] text-lg">Frontend Developer</p>
                  <p className="text-[#777] text-sm font-medium">
                    Feb 2025 - March 2025 (1 m) • Internship • Remote
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {/* Graduate Icon Container */}
              <div className="rounded-full w-9 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/z1.png"}
                  alt="hat"
                  width={20}
                  height={20}
                  className="block"
                  unoptimized
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className=" flex gap-1 items-center">
                  <h2 className="text-[#555]">Maa Vaishno Interiors</h2>
                  <Check />
                </div>
                <div>
                  <p className="text-[#333] text-lg">Fullstack Developer</p>
                  <p className="text-[#777] text-sm font-medium">
                    Mar 2024 - Sept 2024 (6 m) • Internship • Remote
                  </p>
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
              <Card className="relative">
                <Image
                  src={"/Udemy.jpg"}
                  alt="kok"
                  width={100}
                  height={100}
                  className="w-full"
                  unoptimized
                />
                <CardContent className="flex flex-col space-y-3 mt-6">
                  <CardTitle className="font-medium">Udemy clone</CardTitle>
                  <CardDescription className="flex flex-col space-y-3">
                    <p className="">15 Feb - Present</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex gap-1 flex-wrap">
                      {skills.map((skill) => (
                        <Button
                          key={skill.value}
                          variant={"outline"}
                          size={"sm"}
                          className="flex items-center"
                        >
                          <Image
                            src={`/svgs/${skill.image}.svg`}
                            alt={skill.name}
                            width={100}
                            height={100}
                            className="w-4 h-4"
                          />
                          {skill.name}
                        </Button>
                      ))}
                    </div>
                  </CardDescription>
                  <div>
                    <Button size={"sm"}>
                      <Globe />
                      Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="relative">
                <Image
                  src={"/google.png"}
                  alt="kok"
                  width={100}
                  height={100}
                  className="w-full"
                  unoptimized
                />
                <CardContent className="flex flex-col space-y-3 mt-6">
                  <CardTitle className="font-medium">
                    Google docs - Word docs
                  </CardTitle>
                  <CardDescription className="flex flex-col space-y-3">
                    <p className="">10 Feb - Present</p>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex gap-1 flex-wrap">
                      {skills.map((skill) => (
                        <Button
                          key={skill.value}
                          variant={"outline"}
                          size={"sm"}
                          className="flex items-center"
                        >
                          <Image
                            src={`/svgs/${skill.image}.svg`}
                            alt={skill.name}
                            width={100}
                            height={100}
                            className="w-4 h-4"
                          />
                          {skill.name}
                        </Button>
                      ))}
                    </div>
                  </CardDescription>
                  <div>
                    <Button size={"sm"}>
                      <Globe />
                      Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* TODO: GitHub */}
      </div>
    </MaxWidthWrapper>
  );
}
