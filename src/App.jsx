import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';

<HashRouter>
  <App />
</HashRouter>

function App() {
  const [formData, setFormData] = useState({
    company: '',
    slogan: '',
    name: '',
    position: '',
    phone: '',
    website: '',
    address: '',
    email: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <h2>ID Card Generator</h2>
        <form>
          <label>Company Name</label>
          <input name="company" onChange={handleChange} />

          <label>Company Slogan</label>
          <input name="slogan" onChange={handleChange} />

          <label>Name</label>
          <input name="name" onChange={handleChange} />

          <label>Job Position</label>
          <input name="position" onChange={handleChange} />

          <label>Phone</label>
          <input name="phone" onChange={handleChange} />

          <label>Email</label>
          <input name="email" onChange={handleChange} />

          <label>Website</label>
          <input name="website" onChange={handleChange} />

          <label>Address</label>
          <input name="address" onChange={handleChange} />

          <label>Photo</label>
          <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        </form>
      </div>

      <div className="idcard-preview">
        <div className="id-card">
          <div className="company">{formData.company || 'COMPANY NAME'}</div>
          <div className="slogan">{formData.slogan || 'COMPANY SLOGAN'}</div>

          <div className="photo">
            {formData.photo && <img src={formData.photo} alt="user" />}
          </div>

          <div className="name">{formData.name || 'Your Name'}</div>
          <div className="position">{formData.position || 'Job Position'}</div>

          <div className="info-block">
            <p>📞 {formData.phone}</p>
            <p>✉️ {formData.email}</p>
            <p>🌐 {formData.website}</p>
            <p>📍 {formData.address}</p>
          </div>

          <div className="bottom-bar">
            <p>{formData.website || 'www.companyname.com'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
