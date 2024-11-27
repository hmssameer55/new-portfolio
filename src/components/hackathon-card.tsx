import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  company: string;
  image?: string;
  link?: string;
}

export function HackathonCard({
  title,
  description,
  dates,
  company,
  image,
  link,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-[4.5rem] top-2 flex items-center justify-center bg-white rounded-full">
        <Link href={link ?? '/'}>
          <Avatar className="border size-16 m-auto">
            <AvatarImage src={image} alt={title} className="object-contain p-2 rounded-full" />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {company && (
          <p className="text-sm font-medium text-muted-foreground">{company}</p>
        )}
        {description && (
          <span className="text-sm text-gray-600 dark:text-slate-200 ">
            {description}
          </span>
        )}
      </div>
    </li>
  );
}
