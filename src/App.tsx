export default function App() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
            background: "linear-gradient(to right, #38bdf8, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mohan Kumar
        </h1>

        <h2
          style={{
            color: "#cbd5e1",
            animation: "pulse 2s infinite",
          }}
        >
          QA Engineer • API Tester • Telecom Specialist
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "30px auto",
            lineHeight: "1.8",
            color: "#e2e8f0",
            fontSize: "18px",
          }}
        >
          10+ years of experience in Telecom Domain working with global clients
          like British Telecom, Cogeco, and MTN SA. Specialized in API Testing,
          Telecom Billing Solutions, Business Analysis, and QA Automation.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              border: "none",
              color: "white",
              padding: "14px 28px",
              borderRadius: "12px",
              fontSize: "16px",
              marginRight: "15px",
              cursor: "pointer",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            Download Resume
          </button>

          <a
            href="www.linkedin.com/in/mohan-s-a691619a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                background: "linear-gradient(to right, #0077b5, #00a0dc)",
                border: "none",
                color: "white",
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
                marginLeft: "10px",
              }}
            >
              LinkedIn Profile
            </button>
          </a>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          padding: "20px",
        }}
      >
        {/* CARD 1 */}
        <div style={cardStyle}>
          <h2 style={{ color: "#38bdf8" }}>QA Testing</h2>

          <ul style={listStyle}>
            <li>API Testing</li>
            <li>Selenium</li>
            <li>Regression Testing</li>
            <li>Integration Testing</li>
            <li>Automation Testing</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div style={cardStyle}>
          <h2 style={{ color: "#a78bfa" }}>Business Analysis</h2>

          <ul style={listStyle}>
            <li>Requirement Gathering</li>
            <li>User Stories</li>
            <li>Agile Methodology</li>
            <li>Defect Management</li>
            <li>Sprint Planning</li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div style={cardStyle}>
          <h2 style={{ color: "#22c55e" }}>Telecom Expertise</h2>

          <ul style={listStyle}>
            <li>Netcracker RM</li>
            <li>SingleView</li>
            <li>BSS/OSS</li>
            <li>Provisioning</li>
            <li>Billing Systems</li>
          </ul>
        </div>
      </div>

      {/* PROJECTS SECTION */}

      <div
        style={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#38bdf8" }}>Featured Projects</h1>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "20px",
            maxWidth: "700px",
            margin: "30px auto",
          }}
        >
          <h2>Telecom Order Management Testing</h2>

          <p style={{ lineHeight: "1.8" }}>
            Worked on telecom order provisioning, API integration testing,
            defect analysis, and end-to-end validation for telecom systems.
          </p>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          padding: "30px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ color: "#f472b6" }}>Professional Experience</h2>

          <p
            style={{
              color: "#e2e8f0",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            Experienced in telecom order management, API integration, billing
            workflows, requirement analysis, defect tracking, and end-to-end
            testing. Worked extensively in Agile environments supporting
            critical telecom transformation projects across multiple
            international clients.
          </p>
        </div>
      </div>

      {/* CONTACT  */}

      <div
        style={{
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1 style={{ color: "#22c55e" }}>Contact Me</h1>

        <p>Email: kumarmohan358@gmail.com</p>

        <p>LinkedIn: linkedin.com/in/Mohan S</p>
      </div>

      {/* FOOTER */}
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          color: "#94a3b8",
          marginTop: "50px",
        }}
      >
        © 2026 Mohan Kumar • Portfolio Website
      </div>
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "20px",
  padding: "25px",
  width: "300px",
  boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
};

const listStyle = {
  lineHeight: "2",
  color: "#e2e8f0",
};
