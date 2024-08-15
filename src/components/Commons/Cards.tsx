import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  image: string;
  intro?: string;
  sections?: CardSectionsProps[];
}
interface CardSectionsProps {
  heading: string;
  caption?: string;
  links?: CardLinksProps[];
}

interface CardLinksProps {
  detail: string;
  title: string;
}
export default function Cards({ title, intro, image, sections }: CardProps) {
  return (
    <div className="w-full overflow-hidden flex flex-col space-y-2 rounded-lg hover:bg-lightSecondary hover:shadow-lg group duration-300 transition-all ease-in-out">
      <div className="py-2 space-y-1.5 p-2">
        <strong className="font-bold text-base">{title}</strong>
        {intro && (
          <p className="text-sm line-clamp-2">{ intro }</p>
        )}
      </div>
      <div className="w-full h-52">
        <Image
          src={image}
          alt={title}
          width={700}
          height={450}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2 p-2">
        {sections &&
          sections.map((section, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <strong className="font-bold text-sm">{section.heading}</strong>
              {section.caption && (
                <p className="text-pretty text-xs">{section.caption}</p>
              )}
              {section.links &&
                section.links.map((link, index) => (
                  <li className="w-full border-b border-b-dark py-1.5 flex flex-col items-start space-y-1.5" key={index}>
                    <strong className="block text-xs">{link.title}</strong>
                    <span className="block text-xs">{link.detail}</span>
                  </li>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
