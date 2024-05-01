import Header from "@/modules/Home/components/Header";
import Hero from "@/modules/Home/components/Hero.jsx";
import Body from "@/modules/Home/components/Body.jsx";

const index = () => {
    return (
        <div>
            {/*TODO SCROLLABLE BELOW SM*/}
            <Header/>
            <div className={"flex flex-col sm:flex-row gap-4"}>
                <div className={"w-full sm:w-1/2"}>
                    <Hero/>
                </div>
                <div className={"w-full sm:w-1/2"}>
                    <Body/>
                </div>
            </div>
        </div>
    )
}

export default index