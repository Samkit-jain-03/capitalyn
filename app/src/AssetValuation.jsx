import { useState } from "react";
import "./AssetValuation.css";

export default function AssetValuation() {
  const [formData, setFormData] = useState({
    assetType: "",
    assetWeight: "",
    assetCondition: "",
    assetValue: "",
    assetDesc: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { assetType, assetWeight, assetCondition, assetValue } = formData;

    if (!assetType || !assetWeight || !assetCondition || !assetValue) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    alert("✅ Asset valuation submitted successfully!");

    setFormData({
      assetType: "",
      assetWeight: "",
      assetCondition: "",
      assetValue: "",
      assetDesc: "",
    });
  }

  return (
    <>
      <header>
        <img src="/images/unnamed.jpg" alt="Capitalyn Logo" className="logo" />
        <div className="title">CAPITALYN</div>
        <div className="subtitle">Asset Valuation Module</div>
      </header>

      <div className="page-desc">
        <p>
          New asset can be registered here using the form below. Fill out all
          required details to add a new asset to the Capitalyn database.
        </p>
        <p>
          If you want to check on an existing asset, click the box below to go to{" "}
          <b>Reports & Analytics</b>.
        </p>
      </div>

      <div className="report-box">
        <i className="fas fa-chart-line"></i>
        <h3>Go to Reports & Analytics</h3>
      </div>

      <div className="pre-form-box">
        <p className="info-text">
          After filling in the details of the new asset, fill in the details of
          the loan given to the customer.
        </p>

        <div className="loan-box">
          <i className="fas fa-balance-scale"></i>
          <h3>Go to Loan Management</h3>
        </div>
      </div>

      <div className="form-container">
        <h2>Asset Valuation Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Asset Type</label>
            <select
              id="assetType"
              value={formData.assetType}
              onChange={handleChange}
              required
            >
              <option value="">Select Asset Type</option>
              <option>Gold</option>
              <option>Diamond</option>
              <option>Electronics</option>
              <option>Vehicle</option>
              <option>Property</option>
            </select>
          </div>

          <div className="form-group">
            <label>Weight / Quantity</label>
            <input
              type="text"
              id="assetWeight"
              value={formData.assetWeight}
              onChange={handleChange}
              placeholder="e.g., 25 grams, 2 units"
              required
            />
          </div>

          <div className="form-group">
            <label>Condition</label>
            <select
              id="assetCondition"
              value={formData.assetCondition}
              onChange={handleChange}
              required
            >
              <option value="">Select Condition</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Poor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Estimated Market Value (₹)</label>
            <input
              type="number"
              id="assetValue"
              value={formData.assetValue}
              onChange={handleChange}
              placeholder="Enter estimated value"
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Description</label>
            <textarea
              id="assetDesc"
              value={formData.assetDesc}
              onChange={handleChange}
              placeholder="Any extra details (optional)"
            ></textarea>
          </div>

          <button type="submit">Submit Valuation</button>
        </form>
      </div>
    </>
  );
}
