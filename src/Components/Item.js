
import React, { useState } from 'react';
import work from './work.jpg'
import './Item.css'
const Item= () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    itemTitle: '',
    link: '',
    iconUrl: '',
    tagName: '',
    category: '',
    description: '',
  });

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data (e.g., send it to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="row">
        {/* Left side with form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="itemTitle">Item Title:</label>
              <input
                type="text"
                className="form-control"
                id="itemTitle"
                name="itemTitle"
                value={formData.itemTitle}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Link:</label>
              <input
                type="text"
                className="form-control"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="iconUrl">Icon URL:</label>
              <input
                type="text"
                className="form-control"
                id="iconUrl"
                name="iconUrl"
                value={formData.iconUrl}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tagName">Tag Name:</label>
              <input
                type="text"
                className="form-control"
                id="tagName"
                name="tagName"
                value={formData.tagName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        {/* Right side with an image */}
        <div className="col-md-6 imagedesign">
          <img
            src={work}
            alt="Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
