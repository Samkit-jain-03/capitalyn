import { useEffect } from "react";
import "./CustomerManagement.css";

export default function CustomerManagement() {
  useEffect(() => {
    const form = document.getElementById("customerForm");

    const handleSubmit = (e) => {
      e.preventDefault();

      const name = document.getElementById("custName").value.trim();
      const email = document.getElementById("custEmail").value.trim();
      const phone = document.getElementById("custPhone").value.trim();
      const address = document.getElementById("custAddress").value.trim();
      const asset = document.getElementById("custAsset").value.trim();
      const loan = document.getElementById("custLoan").value.trim();

      if (!name || !email || !phone || !address || !asset || !loan) {
        alert("⚠️ Please fill out all fields!");
        return;
      }

      alert("✅ Form submitted successfully!");
      form.reset();
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      <header>
        <img
          src="images/unnamed.jpg"
          alt="Capitalyn Logo"
          className="logo"
        />
        <div className="title">CAPITALYN</div>
        <div className="subtitle">Customer Management Module</div>
      </header>

      <div className="page-desc">
        <p>
          New customers can be registered here using the form below. Fill out all
          required details to add a new customer to the Capitalyn database.
        </p>
        <p>
          If you want to check on an existing customer, click the box below to go
          to <b>Reports & Analytics</b>.
        </p>
      </div>

      <div
        className="report-box"
        onClick={() => (window.location.href = "#reports")}
      >
        <i className="fas fa-chart-line"></i>
        <h3>Go to Reports & Analytics</h3>
      </div>

      <div className="pre-form-box">
        <p className="info-text">
          After filling in the details of the new customer, fill in the details
          of the asset pledged by the customer.
        </p>

        <div
          className="asset-box"
          onClick={() => (window.location.href = "#assets")}
        >
          <i className="fas fa-balance-scale"></i>
          <h3>Go to Asset Valuation</h3>
        </div>
      </div>

      <div className="form-container">
        <h2>Customer Registration</h2>

        <form id="customerForm">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" id="custName" placeholder="Enter full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" id="custEmail" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" id="custPhone" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" id="custAddress" placeholder="Enter address" />
          </div>

          <div className="form-group">
            <label>Asset Type</label>
            <select id="custAsset">
              <option value="">Select Asset</option>
              <option>Gold</option>
              <option>Electronics</option>
              <option>Vehicles</option>
              <option>Property</option>
            </select>
          </div>

          <div className="form-group">
            <label>Loan Amount (₹)</label>
            <input type="text" id="custLoan" placeholder="Enter loan amount" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
