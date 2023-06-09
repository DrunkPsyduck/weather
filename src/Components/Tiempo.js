

const Tiempo = ({ data, localtime }) => {
  function renderDay(){
    return (
      <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 rounded-lg overflow-hidden shadow-lg bg-sky-400 ">
      <h1 className="text-2xl font-bold">
        Previsión del tiempo en {data.location.name}
      </h1>
      <div className="flex place-content-center">
        <img src={data.current.condition.icon} alt="icon" width="64" height="64"/>
      </div>

      <h2 className="font-bold">{data.current.condition.text}</h2>
      <h3>{data.current.temp_c} ºC</h3>
      <h3>{data.location.localtime}</h3>
      <h3>Sensación térmica: {data.current.feelslike_c} ºC</h3>
      <h3>Viento: {data.current.wind_kph} Km/h</h3>
      <h4>Humedad: {data.current.humidity}%</h4>
    </div>
    )
  } 
  
  function renderNight(){
    
    return (
      <div key="{00}" className="p-10 m-10 grid grid-cols-1 gap-4 rounded-lg overflow-hidden shadow-lg bg-indigo-700 text-sky-50">
      <h1 className="text-2xl font-bold">
        Previsión del tiempo en {data.location.name}
      </h1>
      <div className="flex place-content-center">
        <img src={data.current.condition.icon} alt="icon" width="120" height="120"/>
      </div>

      <h2 className="font-bold">{data.current.condition.text}</h2>
      <h3>{data.current.temp_c} ºC</h3>
      <h3>{data.location.localtime}</h3>
      <h3>Sensación térmica: {data.current.feelslike_c} ºC</h3>
      <h3>Viento: {data.current.wind_kph} Km/h</h3>
    </div>
    )
  } 

  return (
    <div className="pb-10">
      {data.location !== undefined && (
        <div>
          {localtime < 2100 && localtime > 800 ? renderDay() : renderNight()}
          {/* <div>
          <h3 className="text-2xl Font-bold"> Próximas horas</h3>
          {data.forecast.forecastday[0].hour.map((item, i) =>{
            return (
              <div key={i}>
                <div className="">
                  <div className="">
                    <img
                      src={item.condition.icon}
                      alt="icon"
                      width="64"
                      height="64"
                    />
                    <h3 className="font-bold">{item.heatindex_c}</h3>
                  </div>
                </div>
              </div>
            );
          })}
          </div> */}
          <div >
            <h3 className="text-2xl Font-bold"> Próximos días</h3>
            <div className="lg:grid grid-cols-3 grid-row-2">
              {data.forecast.forecastday.map((item, i) => {
                return (
                  <div key={i} className="">
                    <div className="rounded overflow-hidden shadow-lg p-12 m-4 bg-sky-400  rounded-lg">
                      <div className="flex place-content-center">
                        <img
                          src={item.day.condition.icon}
                          alt="icon"
                          width="64"
                          height="64"
                        />
                      </div>
                      <div className="pt-4">
                        <h3 className="font-bold">{item.day.condition.text}</h3>
                        <h3>{item.day.maxtemp_c} ºC Máxima</h3>
                        <h3>{item.day.mintemp_c} ºC Minima</h3>
                        <h3>Vientos de {item.day.maxwind_kph} K/h</h3>
                        <h3>Incidencia UV: {item.day.uv}</h3>
                      </div>
                      <div className="px-6 p-4">
                        <h3>{item.day.maxtemp_c} ºC</h3>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tiempo;
