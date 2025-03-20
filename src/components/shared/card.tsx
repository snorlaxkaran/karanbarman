import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Globe } from "lucide-react";

interface CardTemp {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  youtubeLink?: string;
  webLink?: string;
  skills: Skill[];
}

interface Skill {
  value: string;
  name: string;
  image: string;
}

const CardTemp = ({
  title,
  description,
  imageUrl,
  duration,
  skills,
  youtubeLink,
  webLink,
}: CardTemp) => {
  return (
    <div>
      <Card className="relative">
        <div className="px-7  pb-0 bg-gradient-to-t from-blue-500 to bg-blue-900">
          <div className="flex mx-auto justify-center py-5 text-white text-xl font-semibold">
            😭 {title}
          </div>
          <Image
            src={imageUrl}
            alt="kok"
            width={461}
            height={261}
            className="rounded-b-none rounded-sm object-cover w-[437px] h-[180px] bg-cover bg-top"
            unoptimized
          />
        </div>
        <CardContent className="flex flex-col space-y-3 mt-6">
          <CardTitle className="font-medium">{title}</CardTitle>
          <CardDescription className="flex flex-col space-y-3">
            <p className="">{duration}</p>
            <p className="text-sm">{description}</p>
            <div className="flex gap-1 flex-wrap">
              {skills.map((skill) => (
                <Button
                  key={skill.value}
                  variant={"outline"}
                  size={"sm"}
                  className="flex items-center text-black"
                >
                  <Image
                    src={`/svgs/${skill.image}.svg`}
                    alt={skill.name}
                    width={100}
                    height={100}
                    className={cn(
                      "w-4 h-4",
                      skill.value === "react" && "animate-spin-slow"
                    )}
                  />
                  {skill.name}
                </Button>
              ))}
            </div>
          </CardDescription>
          <div className="flex items-center gap-2">
            {webLink && (
              <Link href={webLink}>
                <Button size={"sm"}>
                  <Globe />
                  Website
                </Button>
              </Link>
            )}
            {youtubeLink && (
              <Link href={youtubeLink}>
                <Button size={"sm"} variant={"outline"}>
                  <Image
                    src={"/svgs/youtube1.svg"}
                    width={100}
                    height={100}
                    alt="youtbe"
                    className="w-5 h-5"
                  />
                  Watch me build this website
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default CardTemp;
