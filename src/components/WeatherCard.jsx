import Logo from "@/components/Logo.jsx";

const weatherCard = ({temp, weatherId, weather, weatherTime}) => {
    return (
        <div className={"p-4 flex items-center w-full"}>
            <p className={"text-sm text-wrap text-center opacity-50 w-1/5"}>{weatherTime}</p>
            <div className={"grow flex items-center px-2"}>
                <Logo id={weatherId} className={"w-6 h-6 mr-2"} />
                <h1 className={"text-sm font-bold"}>{weather}</h1>
            </div>
            <h1 className={"text-sm font-bold w-1/5"} >{temp ?? 0}°</h1>
        </div>
    )
}

export default weatherCard