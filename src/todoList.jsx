import React, { useState } from "react";

export default function ToDoList(){

    const [activity,setActivity] = useState("");
    const [listData,setListData] =useState([])
    function addActivity(){

    
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            setActivity(" ");
            return updatedList
        })
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elm,index)=>{
            return index !== i;
        })
        setListData(updatedListData);
    }
    function removeAll(){
        setListData([])
    }
    return(
        <div className="w-[60%] ml-[20%] mt-2 pb-2 text-white text-center bg-[rgb(7,2,71)]">
            <div className="w-full text-4xl px-3 py-6 text-white">TODO LIST</div>
            <div className="flex gap-2">
                <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=> setActivity(e.target.value)} className="block w-[80%] ml-5 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 "/>
                <button onClick={addActivity} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900">ADD</button>
            </div>
            <p className=" mt-4 pb-4 ">List Of Activity</p>
            {listData!=[] && listData.map((data,i ) =>{
                return(
                    <div key={i} className="flex gap-2">
                        <div className="block w-[80%] ml-5 mb-2 pb-1 bg-blue-200 text-left text-black rounded-xs px-3 outline-1 -outline-offset-1 outline-blue-200">{data}</div>
                        <div><button onClick={()=>removeActivity(i)} className="rounded-md bg-green-600 px-2 py-2 mb-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900">Remove</button></div>
                    </div>
                )
            })} 
            {listData.length >= 1 && 
            <button onClick={()=>removeAll()} className="rounded-md bg-green-600 px-2 py-2 mb-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900">Remove All</button>}
                   
        </div>

    )
}