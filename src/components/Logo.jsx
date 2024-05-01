const logoUrl = (id) => `https://openweathermap.org/img/wn/${id}@4x.png`

const logo = ({id}) => <img src={logoUrl(id)} alt={"weather logo"} />

export default logo