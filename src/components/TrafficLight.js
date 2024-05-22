import React,{useState,useEffect} from 'react';
 
const TrafficLight = () =>{
    const [light, setLight] = useState('red');

    useEffect(() => {
        let timer;
        switch (light){
            case 'red':
                timer = setTimeout(() => setLight('yellow'),1000);
                break;
                case 'yellow':
                timer = setTimeout(() => setLight('green'),2000);
                break;
                case 'green':
                timer = setTimeout(() => setLight('red'),2000);
                break;
                default:
                break;
        }
        return () => clearTimeout(timer);
    }, [light])

    return(
        <div style={{textAlign: 'center', marginTop:'50px'}}>
            <div style={{backgroundColor: light === 'red' ? 'red': 'gray',height:'100px', width:'100px', margin:'10px auto'}}></div>
            <div style={{backgroundColor: light === 'yellow' ? 'yellow':'gray', height:'100px', width:'100px', margin: '10px auto'}}></div>
            <div style={{backgroundColor: light === 'green' ? 'green':'gray',height:'100px',width:'100px', margin:'10px auto'}}></div>
        </div>
    )
}

export default TrafficLight;