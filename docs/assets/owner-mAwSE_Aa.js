import{r as l,j as e}from"./main-BJsphIkR.js";const m={}.OWNER_AUTH_TOKEN||"sahjony-capital-owner-token-2026";async function p(s){return!s||s.trim()===""?{success:!1,message:"Authentication token is required"}:s===m?{success:!0,message:"Authentication successful",name:"Juan Gonzalez",email:"sahjonycapitalllc@outlook.com",phone:"+167****6284",company:"SAHJONY CAPITAL LLC"}:{success:!1,message:"Invalid authentication token"}}async function u(){console.log("Owner logged out successfully")}function h({onLoginSuccess:s}){const[a,r]=l.useState(""),[i,c]=l.useState(!1),[t,o]=l.useState(""),d=async()=>{if(!a.trim()){o("Please enter your owner token");return}c(!0),o("");try{const n=await p(a);n.success?s(n):o(n.message)}catch{o("Authentication failed")}finally{c(!1)}};return e.jsxs("div",{className:"owner-login-container",children:[e.jsxs("div",{className:"owner-login-card",children:[e.jsx("h2",{children:"Owner Authentication"}),e.jsx("p",{className:"owner-login-subtitle",children:"Enter your owner token to access the private dashboard"}),e.jsxs("div",{className:"owner-login-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"owner-token",children:"Owner Token"}),e.jsx("input",{id:"owner-token",type:"password",value:a,onChange:n=>r(n.target.value),placeholder:"Enter your owner token...",className:t?"error":"",onKeyPress:n=>n.key==="Enter"&&d()}),t&&e.jsx("span",{className:"error-message",children:t})]}),e.jsx("button",{onClick:d,disabled:i||!a.trim(),className:"owner-login-btn",children:i?"Authenticating...":"Access Owner Dashboard"})]}),e.jsxs("div",{className:"owner-login-info",children:[e.jsx("h3",{children:"Owner Information"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," Juan Gonzalez"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," sahjonycapitalllc@outlook.com"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phone:"})," +16783466284"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Location:"})," Houston, Texas"]})]})]}),e.jsx("style",{jsx:!0,children:`
        .owner-login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .owner-login-card {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-width: 400px;
          width: 100%;
        }

        .owner-login-card h2 {
          margin: 0 0 10px 0;
          color: #333;
          font-size: 24px;
          font-weight: 600;
        }

        .owner-login-subtitle {
          color: #666;
          margin-bottom: 30px;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #333;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e1e5e9;
          border-radius: 6px;
          font-size: 16px;
          transition: border-color 0.2s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-group input.error {
          border-color: #e74c3c;
        }

        .error-message {
          color: #e74c3c;
          font-size: 14px;
          margin-top: 5px;
          display: block;
        }

        .owner-login-btn {
          width: 100%;
          background: #667eea;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .owner-login-btn:hover:not(:disabled) {
          background: #5a6fd8;
        }

        .owner-login-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .owner-login-info {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e1e5e9;
        }

        .owner-login-info h3 {
          margin: 0 0 15px 0;
          color: #333;
          font-size: 18px;
        }

        .owner-login-info p {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }
      `})]})}function x({ownerData:s,onLogout:a}){const r=async()=>{await u(),a()};return e.jsxs("div",{className:"owner-dashboard-container",children:[e.jsxs("div",{className:"owner-dashboard-header",children:[e.jsx("h1",{children:"Owner Dashboard"}),e.jsx("button",{onClick:r,className:"logout-btn",children:"Logout"})]}),e.jsxs("div",{className:"owner-dashboard-content",children:[e.jsxs("div",{className:"owner-info-card",children:[e.jsx("h2",{children:"Owner Information"}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"label",children:"Name:"}),e.jsx("span",{className:"value",children:s.name||"Juan Gonzalez"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"label",children:"Email:"}),e.jsx("span",{className:"value",children:s.email||"sahjonycapitalllc@outlook.com"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"label",children:"Phone:"}),e.jsx("span",{className:"value",children:s.phone||"+167****6284"})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{className:"label",children:"Company:"}),e.jsx("span",{className:"value",children:"SAHJONY CAPITAL LLC"})]})]})]}),e.jsxs("div",{className:"platform-status-card",children:[e.jsx("h2",{children:"Platform Status"}),e.jsxs("div",{className:"status-grid",children:[e.jsxs("div",{className:"status-item",children:[e.jsx("span",{className:"status-label",children:"Deployment Status:"}),e.jsx("span",{className:"status-value status-active",children:"✅ Active"})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("span",{className:"status-label",children:"Bland.ai Balance:"}),e.jsx("span",{className:"status-value",children:"$55.16"})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("span",{className:"status-label",children:"AI Model:"}),e.jsx("span",{className:"status-value",children:"DeepSeek V3.1 Terminus"})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("span",{className:"status-label",children:"Environment:"}),e.jsx("span",{className:"status-value",children:"Production"})]})]})]}),e.jsxs("div",{className:"business-metrics-card",children:[e.jsx("h2",{children:"Business Metrics"}),e.jsxs("div",{className:"metrics-grid",children:[e.jsxs("div",{className:"metric-item",children:[e.jsx("span",{className:"metric-value",children:"0"}),e.jsx("span",{className:"metric-label",children:"Total Leads"})]}),e.jsxs("div",{className:"metric-item",children:[e.jsx("span",{className:"metric-value",children:"0"}),e.jsx("span",{className:"metric-label",children:"Offers Sent"})]}),e.jsxs("div",{className:"metric-item",children:[e.jsx("span",{className:"metric-value",children:"0"}),e.jsx("span",{className:"metric-label",children:"Contracts"})]}),e.jsxs("div",{className:"metric-item",children:[e.jsx("span",{className:"metric-value",children:"$0"}),e.jsx("span",{className:"metric-label",children:"Projected Profit"})]})]})]})]}),e.jsx("style",{jsx:!0,children:`
        .owner-dashboard-container {
          min-height: 100vh;
          background: #f5f7fa;
          padding: 20px;
        }

        .owner-dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .owner-dashboard-header h1 {
          margin: 0;
          color: #333;
          font-size: 28px;
          font-weight: 600;
        }

        .logout-btn {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .logout-btn:hover {
          background: #c0392b;
        }

        .owner-dashboard-content {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .owner-info-card,
        .platform-status-card,
        .business-metrics-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .owner-info-card h2,
        .platform-status-card h2,
        .business-metrics-card h2 {
          margin: 0 0 20px 0;
          color: #333;
          font-size: 20px;
          font-weight: 600;
        }

        .info-grid {
          display: grid;
          gap: 15px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .label {
          color: #666;
          font-weight: 500;
        }

        .value {
          color: #333;
          font-weight: 600;
        }

        .status-grid {
          display: grid;
          gap: 15px;
        }

        .status-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }

        .status-label {
          color: #666;
        }

        .status-value {
          color: #333;
          font-weight: 600;
        }

        .status-active {
          color: #27ae60;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .metric-item {
          text-align: center;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .metric-value {
          display: block;
          font-size: 24px;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 5px;
        }

        .metric-label {
          color: #666;
          font-size: 14px;
        }
      `})]})}function f(){const[s,a]=l.useState(!1),[r,i]=l.useState(null),c=o=>{a(!0),i(o)},t=()=>{a(!1),i(null)};return s&&r?e.jsx(x,{ownerData:r,onLogout:t}):e.jsx(h,{onLoginSuccess:c})}export{f as component};
