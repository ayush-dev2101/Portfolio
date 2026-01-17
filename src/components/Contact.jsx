import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState(null);

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();

      if (!response.ok || result.code !== 200) {
        throw new Error("Request failed");
      }

      setFormDetails(formInitialDetails);
      setStatus({
        success: true,
        message: "Message sent successfully!",
      });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact" />
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />

                  <button type="submit" disabled={buttonText === "Sending..."}>
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {status && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
