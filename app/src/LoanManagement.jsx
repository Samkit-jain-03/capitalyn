import "./LoanManagement.css";

export default function LoanManagement() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const amt = document.getElementById("loanAmount").value.trim();
    const type = document.getElementById("assetPledged").value.trim();
    const name = document.getElementById("customerName").value.trim();

    if (!amt || !type || !name) {
      alert("⚠️ Please fill all required fields.");
      return;
    }

    alert("✅ Loan submitted successfully!");
    document.getElementById("loanForm").reset();
  };

  return (
    <div className="loan-page">
      <header>
        <img src="/images/unnamed.jpg" alt="Capitalyn Logo" className="logo" />
        <div className="title">CAPITALYN</div>
        <div className="subtitle">Loan Management Module</div>
      </header>

      <div className="page-desc">
        <p>
          New loan given can be registered here using the form below. Fill out all
          required details to add a new loan given by the Capitalyn database.
        </p>
        <p>
          If you want to check on an existing loan record, click the box below to
          go to <b>Reports & Analytics</b>.
        </p>
      </div>

      <div className="report-box">
        <i className="fas fa-chart-line"></i>
        <h3>Go to Reports & Analytics</h3>
      </div>

      <div className="form-container">
        <h2>Loan Management Form</h2>

        <form id="loanForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Loan Amount</label>
            <input type="text" id="loanAmount" required />
          </div>

          <div className="form-group">
            <label>Asset Pledged</label>
            <select id="assetPledged" required>
              <option value="">Select Asset Type</option>
              <option>Gold</option>
              <option>Diamond</option>
              <option>Electronics</option>
              <option>Vehicle</option>
              <option>Property</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name of the customer</label>
            <input type="text" id="customerName" required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
