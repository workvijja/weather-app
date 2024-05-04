import Header from "@/modules/Forecast/components/Header";
import Hero from "@/modules/Forecast/components/Hero.jsx";
import Body from "@/modules/Forecast/components/Body.jsx";

const index = () => {
    return (
        <div className={"w-full h-full grid grid-cols-1 sm:grid-cols-2 grid-rows-8 gap-4"}>
            <div className={"row-span-1 col-span-1 sm:col-span-2"}>
                <Header/>
            </div>
            <div className={"col-span-1 row-span-4 sm:row-span-7"}>
                <Hero/>
            </div>
            <div className={"col-span-1 row-span-3 sm:row-span-7"}>
                <Body/>
            </div>
        </div>
    )
}

export default index