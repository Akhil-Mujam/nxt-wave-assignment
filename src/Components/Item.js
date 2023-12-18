
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
    try {
      const response = await axios.post('https://media-content.ccbp.in/website/react-assignment/add_resource.json',{
        
            title: title,
            icon_url: icon_url,
            link: link,
            description: description,
            category:category,
            tag: tag,
            id:count
        
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
      
      <div className="row container">
        {/* Left side with form */}
        <div className="col-md-6 p-3">

        <a href='/' className='text-secondary p-4 m-4'>Users</a>
        <h2>Item Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="itemTitle">Item Title:</label>
              <input
                type="text"
                className="form-control"
                id="itemTitle"
                name="title"
               
                onChange={e => { settitle(e.targetvalue)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
               
                onChange={e => { setlink(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="iconUrl">Icon URL:</label>
              <input
                type="text"
                className="form-control"
                id="iconUrl"
                name="icon_url"
                
                onChange={e =>{ seticon_url(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tagName">Tag Name:</label>
              <input
                type="text"
                className="form-control"
                id="tagName"
                name="tag"
               
                onChange={e => { settag(e.target.value)}}

              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                
                onChange={e =>{ setcategory(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                onChange={e =>{setdescription(e.target.value)}}
              ></textarea>
            </div>
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
