import React from 'react'
import { MdDelete } from "react-icons/md";

const SingleTodo = ({name,age,grade,email,admdate,id,remove}) => {
    return (
      <>
          <div className="col-md-4">
              
  
              <div className="card my-2 justify-content-between   p-4 rounded border-2" style={{
                background:'#E6E6E3'
              }}>
                  <div className="text">
                        
                        <h5><b>Name:</b>{name}</h5>
                        <h6><b>Age:</b>{age}</h6>
  
                        <h6><b>Class:</b>{grade}</h6> 
                        <h6><b>Email:</b>{email}</h6>  
                        <h6><b>Joining Date:</b>{admdate}</h6>  
                       
                  
                  </div>
                  <div className="icon text-center">
                     <MdDelete onClick={()=>remove(id)} size={30} color='red' cursor='pointer' />
                  </div>
              </div>
              
  
          </div>
      </>
    )
  }
  export default SingleTodo