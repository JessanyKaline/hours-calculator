import React from "react";



export default function Hours() { 
  const [entryTime, setEntryTime] = React.useState("");
  const [departureTime, setDepartureTime] = React.useState("");
  //let   [horas, setHoras] = React.useState("");
  

  function parse(horario) {
    
    let [hora, minuto] = horario.split(":").map((v) => parseInt(v));
    if (!minuto) {
      minuto = 0;
    }
    return minuto + hora * 60;
  }

  function duracao(entrada1, saida1) {
   
    return parse(saida1) - parse(entrada1);
  }

 

  let jornada = duracao(entryTime, departureTime);
 
  

  let diff = Math.abs(jornada);
  
  if (diff !== 0) {
    let horas = (Math.floor(diff / 60));
    let minutos = (diff - horas * 60);
     if(horas<10){
      horas='0' + horas
     };
     if (minutos<10){
      minutos= '0' + minutos
     };
  

    //console.log(`${horas} horas e ${minutos} minutos`);

    return (
      <>
        
          

          <tr>
            <input type="date" />
            <input
              type="time"
              value={entryTime}
              onChange={(e) => setEntryTime(e.target.value)}
            />
            <input
              type="time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            />
            
           
               
            
            <div  type="time" value= {horas} className="result" >
               {horas}: {minutos}
            </div>
          </tr>
       </>
        
        
    );
  }
}
