import { Media } from "@/payload-types";
import { Button, Heading } from "@medusajs/ui";
import Link from "next/link";

type HeroProps = {
    hero: {
        backgroundImage: Media;
        title: string;
        subtitle: string;
        ctaButtonLink: string;
        ctaButtonText: string;
    };
};

const Hero = ({ hero }: HeroProps) => {
    // Determine the background image URL if a Media object is provided
    const backgroundImageUrl =
        hero?.backgroundImage && typeof hero.backgroundImage === "object"
            ? `url(${hero.backgroundImage.url})`
            : undefined;

    return (
        <div
            className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
            style={{
                backgroundImage: backgroundImageUrl,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
                <span>
                    <Heading
                        level="h1"
                        className="text-3xl leading-10 font-normal text-white"
                    >
                        {hero?.title}
                    </Heading>
                    <Heading
                        level="h2"
                        className="text-3xl leading-10 text-gray-300 font-normal"
                    >
                        {hero?.subtitle}
                    </Heading>
                </span>
                <Link href={hero?.ctaButtonLink}>
                    <Button variant="secondary" size="large">
                        {hero?.ctaButtonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
