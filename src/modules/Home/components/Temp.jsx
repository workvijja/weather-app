const temp = ({temp, desc}) => {

    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-7xl font-bold"}>{temp ?? 0}°C</h1>
            <p className={"text-xl opacity-50"}>{desc}</p>
        </div>
    )
}

export default temp