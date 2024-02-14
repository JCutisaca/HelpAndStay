import Image from "next/image";
import icon from "../../../public/icon.png"


export default function IconHelpAndStay() {
    return (
        <>
            <Image className="w-40 relative top-fixed" src={icon}></Image>
        </>
    )
}