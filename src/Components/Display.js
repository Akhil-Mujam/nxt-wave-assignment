import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Display.css'
const Display = () => {

    const [data,setdata] = useState([])
 
     const url = "https://media-content.ccbp.in/website/react-assignment/resources.json"
        useEffect(() =>{
      const fetchdata = async() =>{
        const response = await axios.get(url);
        const result = response.data;
          console.log(result)
        setdata(result);
        
      }
      fetchdata();
     },[])

    
  return (
   <div className='bg-light'>

          <center >
            <button className='btn btn-outline-primary text-center sc active'>Resources</button>
            <button className='btn btn-outline-primary text-center sc'>Request</button>
            <button className='btn btn-outline-primary text-center sc'>Users</button>
          </center>

       <div className="row ">
        <div className="col-md-6 m-4">
          <input type="text" className="form-control" placeholder="search" />
        </div>
      </div>

    <div className='row '>
      
      {
        data.map((dat) =>
        
        <div className='col-md-3 m-4 '>
            <div class="card pl-0" style={{width : "25rem"}}>

              <div className='row '>
                <div class='col-md-6 change1' >
                  <img src={dat.icon_url}  width="64px" height="64px" alt="logo"/>
                </div>
                  <div class='col-md-6 text-start change1'>
                      <div class=" fs-6 text-lg">{dat.title}</div>
                      <div class="text-sm fs-6 text-secondary-600 ">{dat.tag}</div>
                  </div>
                  
              </div>
              
             <div class="card-body pl-0 text-start">
                <a href={dat.link} className='text-decoration-none '>{dat.link}</a>
                <p class="card-text fs-6 pt-2">{dat.description}</p>
             </div>
      
          </div>
       </div> 
        
        )
      }

     </div>
     </div>
  
  )
}

export default Display


