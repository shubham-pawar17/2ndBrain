import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({ title, link, type }: CardProps) {

    return <div>
        <div className="p-8 mt-8 bg-white rounded-xl border-gray-300 max-w-96 min-h-48 min-w-72 border">
            <div className="flex justify-between">
                <div className="flex items-center text-lg">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon size="sm" />
                    </div>{title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank"><ShareIcon size="sm" /></a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon size="sm" />
                    </div>
                </div>
            </div>
            <div className="pt-4 " >
                {type === "youtube" && <iframe className="w-full" src={link.includes("youtu.be")
                    ? `https://www.youtube.com/embed/${link.split("youtu.be/")[1].split("?")[0]}`
                    : link.replace("watch?v=", "embed/")}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                }
                {type === "twitter" &&
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                }
            </div>
        </div>
    </div>
}