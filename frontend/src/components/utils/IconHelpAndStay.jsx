import Image from "next/image";
import icon from "../../../public/icon.png"
import Link from "next/link";


export default function IconHelpAndStay() {
    return (
        <>
            <Link href={"/"}>
                <Image className="w-40 relative top-[-0.4rem]" alt="" src={icon}></Image>
            </Link>
        </>
    )
}