// import { Globe, LucideIcon } from "lucide-react";
// import Image from "next/image";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface Skill {
//   name: string;
//   value: string;
//   icon: LucideIcon;
// }

// interface CardTempProps {
//   imageUrl: string;
//   namePr: string;
//   duration: string;
//   desc: string;
//   skills: Skill[];
// }

// const CardTemp = (
//   { imageUrl, namePr, duration, desc, skills }: CardTempProps,
//   { name, value, icon: Icon }: Skill
// ) => {
//   return (
//     <Card className="relative">
//       <Image
//         src={"/Udemy.jpg"}
//         alt="kok"
//         width={100}
//         height={100}
//         className="w-full"
//         unoptimized
//       />
//       <CardContent className="flex flex-col space-y-3 mt-6">
//         <CardTitle className="font-medium">{namePr}</CardTitle>
//         <CardDescription className="flex flex-col space-y-3">
//           <p className="">{duration}</p>
//           <p className="text-sm">{desc}</p>
//           <div className="flex gap-1 flex-wrap">
//             {skills.map((skill) => (
//               <Button
//                 key={skill.value}
//                 variant={"outline"}
//                 size={"sm"}
//                 className="flex items-center text-black"
//               >
//                 <Image
//                   src={`/svgs/${imageUrl}.svg`}
//                   alt={skill.name}
//                   width={100}
//                   height={100}
//                   className={cn(
//                     "w-4 h-4",
//                     namePr === "react" && "animate-spin-slow"
//                   )}
//                 />
//                 <skill.I
//                 {skill.name}
//               </Button>
//             ))}
//           </div>
//         </CardDescription>
//         <div>
//           <Button size={"sm"}>
//             <Globe />
//             Website
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CardTemp;
