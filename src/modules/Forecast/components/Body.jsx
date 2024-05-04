import ForecastList from "@/modules/Forecast/components/ForecastList.jsx";

const body = () => {
    return (
        <div className={"border shadow-sm rounded-lg p-4 w-full h-full grid grid-cols-1 grid-rows-8 gap-4"}>
            <div className={"col-span-1 row-span-1 flex items-center justify-between gap-4"}>
                <h1 className={"text-md font-bold"}>Forecast</h1>
            </div>
            <div className={"col-span-1 row-span-7"}>
                <ForecastList/>
            </div>
        </div>
    )
}

export default body