import {AspectRatio} from "@/components/ui/aspect-ratio.jsx";

const logoUrl = (id) => `https://openweathermap.org/img/wn/${id}@4x.png`

const logo = ({id}) => (
    <div className={"w-full"}>
        <AspectRatio ratio={1}>
            <img className={"w-full h-full object-contain"} src={logoUrl(id)} alt={"weather logo"} />
        </AspectRatio>
    </div>
)

export default logo