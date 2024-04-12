import Image from "next/image";
import photo from "@/public/cropped.jpeg"

export default function Intro() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <div>
                    <Image src={photo} alt="Cameron photo" width={192} height={192} quality={95}
                    priority={true}
                    />
                </div>
            </div>
        </section>
    )
}
