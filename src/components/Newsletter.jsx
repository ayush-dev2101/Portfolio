// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";
// import Brevo from "./BrevoForm"; // Brevo iframe component

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState("");

//   // Clear the email after successful submission
//   useEffect(() => {
//     if (status === "success") setEmail("");
//   }, [status]);

//   // Handle form submission like your reference
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email && email.includes("@")) {
//       onValidated({ EMAIL: email });
//     }
//   };

//   return (
//     <Col lg={12}>
//       <div className="newsletter-bx wow slideInUp">
//         <Row>
//           {/* Left Column: Header & Alerts */}
//           <Col lg={12} md={6} xl={5}>
//             <h3>
//               Subscribe to our Newsletter
//               <br /> & Never miss latest updates
//             </h3>

//             {status === "sending" && <Alert>Sending...</Alert>}
//             {status === "error" && <Alert variant="danger">{message}</Alert>}
//             {status === "success" && <Alert variant="success">{message}</Alert>}
//           </Col>

//           {/* Right Column: Brevo iframe inside form wrapper */}
//           <Col md={6} xl={7}>
//             <form onSubmit={handleSubmit}>
//               <div className="new-email-bx">
//                 {/* OnChange updates the email state, iframe handles subscription */}
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                   required
//                   style={{ marginBottom: "10px" }}
//                 />

//                 {/* Submit button */}
//                 <button type="submit">Submit</button>

//                 {/* Embed Brevo iframe for actual subscription */}
//                 <Brevo />
//               </div>
//             </form>
//           </Col>
//         </Row>
//       </div>
//     </Col>
//   );
// };
