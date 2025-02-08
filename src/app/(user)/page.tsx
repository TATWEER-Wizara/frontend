import { Montserrat } from "next/font/google";

const ms = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function Home() {
    return (
        <>
            <div className={"w-screen h-screen  flex items-center justify-center " + ms.className}></div>
        </>
    );
}
