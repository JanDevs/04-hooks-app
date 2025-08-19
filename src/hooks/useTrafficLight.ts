import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}

// type TrafficLightColor = 'red' | 'yellow' | 'green';
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  
const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);
    //Countdown
    useEffect(() => {
      if( countdown === 0 ) return;
      //Se crea una constante para identificar el intervalo y así poderlo borrar
      const intervalId = setInterval(() => {
        // console.log('setInterval llamado')
        setCountdown( prev => prev -1);
      }, 1000);

      //El return es la función de limpieza del useEffect, es lo que se hace tras ejecutar el código
      return () => {
        // console.log('Cleanup effect')
        //clearInterval sirve para eliminar el intervalo y que no se stackeen ejecuciones
        clearInterval(intervalId);
      }
 
    }, [countdown]);

    //Cambio de luz

    useEffect(() => {
      if(countdown > 0) return;

      if(countdown === 0 ){
        setCountdown(5);
        if(light === 'red'){
          setLight('green');
          return;
        }
        if(light === 'yellow'){
          setLight('red');
          return;
        }
        if(light === 'green'){
          setLight('yellow');
          return;
        }
      }
    },[countdown, light]);

    return {
      //Props
        light,
        colors,
        countdown,

        //Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500'
    }

}

