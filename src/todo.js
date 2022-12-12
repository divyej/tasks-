import {useState,useEffect} from 'react'

function getlocalstorage(){
    const stored= localStorage.getItem("PARESJ")
    if(!stored){
        return [] 
    }
        return JSON.parse(stored)
    }




function Todo(){
    const [inputData,setinputData]=useState("");
    const [items,setitems]=useState(getlocalstorage());
    const additems= () => {
        if(!inputData){
            return 
        }
     setitems([...items,inputData])
     console.log(inputData)
     setinputData('')
     
    }
    
    const deleteElem=(id)=>{
       const updated= items.filter((elem,isd) =>{
              return isd!==id;
       })
       setitems(updated)
    }
    const Remove = ()=>{
        return setitems([]);
    }
    useEffect(() => {
        localStorage.setItem('PARESJ', JSON.stringify(items));
      }, [items]);
     
    return (
        <div className = "main-div">
            <div className="child">
                <figure>
                    
                    <figcaption>What to do...</figcaption>
                </figure>
                <div className="add">
                    <input type="text"  placeholder='type here...'
                    value= {inputData}
                    onChange={
                        (e) => setinputData(e.target.value)
                    }
                />
                <button onClick={additems}>add</button> 
                </div>
                <div className= "show">
                    {
                    items.map((elements,index)=>{
                        return(
                        <div className="each" key={index}>
                            <h4 >{ elements }</h4>
                            <button onClick={() => deleteElem(index)}>DELETE</button>
                            </div >
                        )
                    })
                    }
                </div>
                    <div className='show'>
                    <button className='remove' onClick={Remove}>remove all</button>
                </div>          
          </div>
        </div>
    )
}
export default Todo;












































