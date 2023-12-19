
import React, { useState } from 'react';
import work from './work.jpg'
import './Item.css'
import axios from 'axios';
import Navbar from './Navbar';
const Item= () => {
  // State to store form input values
  
 const[title,settitle] = useState('')
 const[icon_url,seticon_url] = useState('')
 const[link,setlink] = useState('')
 const[description,setdescription] = useState('')
 const[category,setcategory] = useState('')
 const[tag,settag] = useState('')
 const[id,setid] = useState('0')

  let count=0;
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
      count=count+1
      setid(count)
    try {
      const response = await axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json',{
        
            title: title,
            icon_url: icon_url,
            link: link,
            description: description,
            category:category,
            tag: tag,
            id:id
        
    });
      if (response.status === 200) {
        console.log('Resource added successfully');
        
      } else {
        console.error('Failed to add resource');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div >
        <Navbar/>
      
      <div className="row container-fluid ">
        {/* Left side with form */}
        <div className="col-md-6 p-3 ">

        <a href='/' className='text-secondary p-4 m-4'>Users</a>
        <h2>Item Details</h2>
          <form onSubmit={handleSubmit} >
            <div className="form-group"> 
              <p className='name-label'>Image Title</p>
              <input
                type="text"
                className="form-control input-width"
                id="itemTitle"
                name="title"
                onChange={e => { settitle(e.targetvalue)}}  required

              />
            </div>
            <div className="form-group">
              <label htmlFor="link" className='name-label'>Link:</label>
              <input
                type="text"
                className="form-control input-width"
                id="link"
                name="link"
                 required
                onChange={e => { setlink(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="iconUrl" className='name-label'>Icon URL:</label>
              <input
                type="text"
                className="form-control input-width"
                id="iconUrl"
                name="icon_url"
                required
                onChange={e =>{ seticon_url(e.target.value)}}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="tagName" className='name-label'>Tag Name:</label>
              <select name="tag" className='form-control input-width'  onChange={e => { settag(e.target.value)}}>
                <option value="user">User</option>
                <option value="request">request</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category" className='name-label'>Category:</label>
              <input
                type="text"
                className="form-control input-width"
                id="category"
                name="category"
                required
                onChange={e =>{ setcategory(e.target.value)}}
              />
            </div>
            <div className="form-group ">
              <label htmlFor="description" className='name-label'>Description:</label>
              <textarea
                className="form-control input-width"
                id="description"
                name="description"
                rows="3"
                onChange={e =>{setdescription(e.target.value)}} required
              ></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Right side with an image */}
        <div className="col-md-6 imagedesign">
         
        </div>
      </div>
    </div>
  );
};

export default Item;
