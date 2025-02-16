import { Globe } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
}

interface CardTempProps {
  imageUrl: string;
  namePr: string;
  duration: string;
  desc: string;
  skills: Skill[];
}

const CardTemp = ({
  imageUrl,
  namePr,
  duration,
  desc,
  skills,
}: CardTempProps) => {
  return (
    <Card>
      <div className=" relative w-full aspect-video">
        <Image
          src={imageUrl}
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
          <span>{namePr}</span>
        </h3>
        <div className="text-xs flex items-center justify-between">
          <p>{duration}</p>
        </div>
      </div>
      <p className="px-2 overflow-hidden text-xs text-gray-500 dark:text-gray-300">
        {desc}
      </p>
      <div className="p-2 pt-3 overflow-hidden flex items-center flex-wrap gap-1">
        {skills.map((skill, i) => (
          <Button key={i} size={"sm"} variant={"outline"}>
            {skill.name}
          </Button>
        ))}
      </div>
      <div className="p-6 pt-0 flex items-center gap-2 px-2 pb-2 overflow-hidden">
        <Button size={"sm"}>
          <Globe />
          Website
        </Button>
      </div>
    </Card>
  );
};

export default CardTemp;
