import MaxWidthWrapper from "@/components/shared/maxWidthWrapper";
import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { skills } from "@/data/skills";
import Link from "next/link";
import ProjectsSvg from "@/data/projects";
import Check from "@/data/icons/check";

import { cn } from "@/lib/utils";
import { skills1 } from "@/data/skills1";
import { technologies } from "@/data/technologies";
import "./globals.css";
import MyGitHubActivity from "@/components/mygitactivity";
import { skills3 } from "@/data/skills3";
import CardTemp from "@/components/shared/card";
import { skills4 } from "@/data/skills4";

export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col gap-0">
        <div className="border-b border-x border-neutral-300/80 py-10 relative">
          {/* TODO: Summary about Karan Barman */}
          <Image
            src={"/koko.png"}
            width={100}
            height={100}
            alt="image"
            unoptimized
            className="absolute inset-0 -z-10 h-1/4 w-full object-cover object-center"
          />

          <div className="flex flex-col gap-6  py-2 px-4">
            <div className="">
              <Image
                src="/pro1.jpg"
                alt="Karan's Photo"
                width={100}
                height={100}
                className="rounded-full aspect-square bg-cover object-cover shadow-sm border-neutral-500 border-2"
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
                {/* TODO: SUMMARY */}Full Stack Developer with over two
                year&apos; of experience building scalable, production-ready
                applications. Currently developing a document editor to simplify
                collaborative writing. Passionate about crafting seamless user
                experiences and robust systems using modern technologies.
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
                    className={cn(
                      "size-3",
                      (skill.value === "react" && "animate-spin-slow") ||
                        (skill.value === "redux" && "animate-spin-slow")
                    )}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80 py-10 ">
          {/* TODO: Experience */}
          <div className="flex flex-col gap-6 py-2 px-4">
            <div>
              <h1 className="text-2xl font-medium">Experience</h1>
            </div>
            {/* Graduate Icon Container */}
            <div className="flex gap-2">
              <div className="rounded-full w-11 h-9 border p-1 bg-gray-100 dark:bg-gray-500 flex items-center justify-center">
                <Image
                  src={"/eipl.png"}
                  alt="hat"
                  width={8}
                  height={8}
                  className="block scale-150"
                  unoptimized
                />
              </div>

              <div className="flex flex-col">
                <div className=" flex gap-1 items-center">
                  <h2 className="text-[#555]">
                    Efficient Illumination Private Limited karan barman
                  </h2>
                  <Check />
                </div>
                <div>
                  <p className="text-[#333] text-lg">
                    Data Analyst | Backend & Frontend Engineer
                  </p>
                  <p className="text-[#777] text-sm font-medium mb-2">
                    July 2025 – Present • Full–Time • on–site
                  </p>
                  <ul>
                    <li className="text-[#777] text-sm font-medium">
                      1. Built a web app to collect and manage on-field data for
                      street-light installation and removal.
                    </li>
                    <li className="text-[#777] text-sm font-medium">
                      2. Automated reporting pipelines for authorities like
                      Jaipur Municipal Corporation and JVVNL, improving payment
                      processing efficiency.
                    </li>
                    <li className="text-[#777] text-sm font-medium">
                      3. Conducted a 10-year data analysis to optimize power
                      consumption, increasing savings from 77% to 89% and
                      contributing ₹97 crore in company profit.
                    </li>
                    <li className="text-[#777] text-sm font-medium">
                      4. Created PowerPoint presentations and Excel dashboards
                      for the Public Lighting Payment Project, aiding project
                      tracking and reporting for a ₹567 crore initiative.
                    </li>
                    <li className="text-[#777] text-sm font-medium">
                      5. Collaborated with Schnell on their automated lighting
                      system, integrating all Jaipur streetlights through CCMS
                      servers for centralized monitoring and control.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="flex gap-2">
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
              <div className="flex flex-col">
                <div className=" flex gap-1 items-center">
                  <h2 className="text-[#555]">Grocient</h2>
                  <Check />
                </div>
                <div>
                  <p className="text-[#333] text-lg">Fullstack Developer</p>
                  <p className="text-[#777] text-sm font-medium">
                    Mar 2024 - Sept 2024 (6 m) • Internship • Remote
                  </p>
                </div>
              </div>
            </div> */}
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
                  src={"/BITS_Pilani-Logo.svg"}
                  alt="hat"
                  width={30}
                  height={30}
                  className="block"
                />
              </div>
              {/* Education Details */}
              <div className="flex flex-col">
                <div className="text-lg font-medium">
                  <h2>Birla Institute of Technology & Science, Pilani</h2>
                </div>
                <div>
                  <p className="text-[#666]">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-[#888]">2026 - 2030</p>
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
                  <p className="text-[#666]">Higher Secondary, Science</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CardTemp
                title="microservices-inventory-order"
                description="A simple microservices-based inventory and order management system built using Node.js, RabbitMQ."
                duration="21 Mar - Present"
                imageUrl="/fin.png"
                skills={skills4}
                webLink="https://github.com/snorlaxkaran/microservices-inventory/tree/main"
              />
              <CardTemp
                title="Finance SaaS Platform"
                description="Finance SaaS Platform with ability to track your income and expenses, categorize transactions."
                duration="21 Mar - Present"
                imageUrl="/fin.png"
                skills={skills1}
                webLink="/#"
              />
              <CardTemp
                title="Youtube"
                description="Hello, I was just learning about Drizzle and Google Cloud, so I thought of making a blog website."
                duration="18 Mar - 20 Mar"
                imageUrl="/download.png"
                skills={skills1}
                webLink="https://youtube-tau-three.vercel.app/"
              />
              <CardTemp
                title="Medium-Blog"
                duration="16 Mar - 18 Mar"
                description="Hello, I was just learning about Hono and Cloudflare, so I thought of making a blog website."
                skills={skills3}
                imageUrl="/image.png"
                webLink="https://medium-blog-dum8.vercel.app/signup"
              />
              <CardTemp
                imageUrl="/udemy-2.png"
                title="Learning management system"
                description="Hello, I was just learning about Next.js and Prisma, so I thought of making an LMS website."
                duration="15 Feb - 01 Mar"
                skills={skills1}
                webLink="https://udemy-lms-clone.vercel.app/"
              />
            </div>
          </div>
        </div>
        {/* TODO: GitHub */}
        <div className="border-b border-x border-neutral-300/80 py-10">
          <div className="flex flex-col gap-6 py-2 px-4">
            <div className="flex items-center gap-2 text-lg sm:text-xl">
              <h1 className="text-2xl font-medium">
                Technologies I&apos;ve Worked With
              </h1>
            </div>
            <div className="flex gap-3 flex-wrap">
              {technologies.map((tech) => (
                <div
                  key={tech.value}
                  className="py-1 px-2 border border-neutral-500/80 rounded-full text-sm flex gap-1 items-center text-slate-700"
                >
                  <Image
                    src={`/svgs/${tech.image}.svg`}
                    alt={tech.name}
                    width={100}
                    height={100}
                    className={cn(
                      "size-3",
                      tech.value === "react" && "animate-spin-slow"
                    )}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-b border-x border-neutral-300/80 py-10">
          <div className="p-6">
            <div className="flex items-center mb-7 gap-2">
              <FaGithub className="h-7 w-7" />
              <p className="text-xl font-medium">GitHub</p>
            </div>
            <MyGitHubActivity />
          </div>
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-6 max-w-lg mx-auto text-center p-6">
            <p className="text-3xl">Get in Touch</p>
            <p className="text-[16px] text-muted-foreground">
              Want to chat? Just shoot me a DM with a direct question on{" "}
              <Link
                href={"https://x.com/snorlax_karan"}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 p-2"
              >
                Twitter
              </Link>
              and I&apos;ll respond.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
