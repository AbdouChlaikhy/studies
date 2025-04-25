import {useEffect,useState} from 'react'
const Test = () => {
    let [counter,setCounter] = useState(0) ;

    
    // const increment = () => {
    //     setCounter(counter + 1)
    // } ;
    // const decrement = () => {
    //     setCounter(counter - 1)
    // } ;


    // ComponentDidMount
    useEffect(() => {
        console.log('component did mount')
    },[])
    // ComponentDidUpdate
    useEffect(() =>{
        console.log(`component is updated  to : ${counter}`);
    },[counter]) ;

    // componentWillMount
    useEffect(() => {
        return () => console.log('component did unmount') 
    },[])
    return ( 
        <div className="container">
            <br />
            <div className="monter">{counter}</div><br />
            <button onClick={setCounter(counter + 1)}> increment </button> 
            <button oncliCk={setCounter(counter - 1)}> decrement </button>
        </div>
     );
}
 
export default Test;