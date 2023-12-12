import React, { useEffect, useState } from 'react'
import SingleTodo from './SingleTodo';

const ComplexTodo = () => {
    const [data,setData] = useState({
        name:'',age:'',grade:'',email:'',admdate:''
    });

    const [deleted,setDeleted]=useState(false)

    const [dataList, setDataList] = useState([]);

    const {name,age,grade,email,admdate} = data;
    
    //console.log('deleted')

    useEffect(()=>{

          setTimeout(()=>{
          setDeleted(false)
      },3000)
  },[deleted])

        const removeItem = (index) => {
          // Create a new array without the item at the specified index
          const updatedList = [...dataList.slice(0, index), ...dataList.slice(index + 1)];
          setDataList(updatedList);
          setDeleted(true)
          console.log(deleted)
        };
    

    
    const handleClick = (e) => {
        e.preventDefault();
        setDataList([...dataList, data]);
        setData({ name:'',age:'',grade:'',email:'',admdate:'' });
       
    }

    // handle the input change

    const handleChange = (e) => {
      

            setData({ ...data, [e.target.name] : e.target.value });
        }
    
  return (
    <>
   
                
     <div className="container col-lg-5 mx-auto shadow p-4" style={{
      background:'#E6E6E3'
     }}>
            <h1 className="display-4">
                Student Data
            </h1>
            <form>
                <label htmlFor="">Name</label>
                <input name='name' value={name}  onChange={handleChange}  className='form-control' type="text" placeholder='Enter your Name...' />
                <label htmlFor="">Age</label>
                <input name='age' value={age}   onChange={handleChange} className='form-control' type="number" placeholder='Enter your Age...' />
                <label htmlFor="">Class</label>
                <input name='grade' value={grade}   onChange={handleChange} className='form-control' type="text" placeholder='Enter your Class...' />
                <label htmlFor="">Email</label>
                <input name='email' value={email}   onChange={handleChange} className='form-control' type="email" placeholder='Enter your Email...' />
          
                <label htmlFor="">Date of Admision</label>
                <input name='admdate' value={admdate}  onChange={handleChange}  className='form-control' type="date" placeholder='Enter date of joining..' />
                <button onClick={handleClick} className='btn btn-dark my-2 w-100'>
                    Add todo
                </button>
            </form>
        </div>
        { 
        deleted &&  <h3 className='text-danger'>Student Deleted successfully!</h3>
      }
       

      <div className=" col-lg-12 row ">
            {dataList.map((data, index)=>{
                return <SingleTodo key={index} id={index} {...data} remove = {removeItem} />
            })}
        </div>
      
       
    </>
  )
}

export default ComplexTodo