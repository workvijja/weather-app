import Location from "@/components/Location";
import {Button} from "@/components/ui/button.jsx";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";

const header = () => {
    const nav = useNavigate()

    const handleClick = () => nav("/")

    return (
        <div className={"w-full h-full grid grid-cols-5 place-content-center"}>
            <Button variant={"outline"} onClick={handleClick} className={"justify-self-start"}><ArrowLeft className={"w-4 h-4"} /></Button>
            <div className={"col-span-3 justify-self-center"}>
                <Location/>
            </div>
        </div>
    )
}

export default header