import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    experience: "",   
  });

  console.log(formData);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.phone || !formData.position || !formData.experience) {
      alert(" Please fill out all the details ");
      return;
    }

    alert(
      ` JOB APPLICATION DETAILS:\n\nFull Name: ${formData.fullname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition Applied: ${formData.position}\nYears of Experience: ${formData.experience}`
    );
  };

  // Clear
  const handleClear = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow p-4" style={{ maxWidth: "600px", margin: "auto" }}>
          <h2 className="text-center mb-4 text-primary">Job Application Form</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Position Applied For</label>
              <input
                type="text"
                className="form-control"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                placeholder="Enter job position"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Years of Experience</label>
              <input
                type="number"
                min="0"
                className="form-control"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Enter number of years"
              />
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success w-50 me-2">
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="btn btn-secondary w-50"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
