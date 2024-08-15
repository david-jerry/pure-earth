/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL
  ? `https://${process.env.BASE_URL}`
  : "http://localhost:3000";

export const ConsultancyEmail = (data: {
  msg: string;
  name: string;
  email: string;
  mineral: string[];
  quantity: number;
}) => (
  <Html>
    <Head />
    <Preview>Consultancy Request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              {/* <Img
                style={headerBlue}
                src={`${baseUrl}/about/hero.jpg`}
                width="360"
                height="28"
                alt="Pure Earth Logo"
              /> */}
              <Img
                style={sectionLogo}
                src={`${baseUrl}/logo/favicon.jpeg`}
                width="75"
                height="75"
                alt="Pure Earth Logo"
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>MINERAL ENQUIRY</Text>
          <Text style={paragraph}>Hello Pure Earth,</Text>
          <Text style={paragraph}>My name is {data.name},</Text>
          <Text style={paragraph}>{data.msg}</Text>
          <Text style={paragraph}>I am interested in these minerals:</Text>
          <Text style={paragraph}>
            <Hr style={hr} />
            {data.mineral.map((min, index) => (
              <>
                <Text key={index} style={heading}>
                  {min}
                </Text>
                <Hr style={hr} />
              </>
            ))}
          </Text>
        </Section>
        <Section style={paragraphList}>
          <Text style={paragraph}>
            Please feel free to contact me on this email:{" "}
            <Link href={data.email} style={link}>
              {data.email}
            </Link>
          </Text>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={paragraph}>{data.name}</Text>
        </Section>

        {/* <Section style={containerContact}>
          <Row>
            <Text style={paragraph}>Connect with us</Text>
          </Row>
          <Row
            align="left"
            style={{
              width: "84px",
              float: "left",
            }}
          >
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://notifications.google.com">
                <Img
                  width="28"
                  height="28"
                  src={`${baseUrl}/logo/logo.png`}
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://notifications.google.com">
                <Img
                  width="28"
                  height="28"
                  src={`${baseUrl}/logo/logo.png`}
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://notifications.google.com">
                <Img
                  width="28"
                  height="28"
                  src={`${baseUrl}/static/google-play-academy.png`}
                />
              </Link>
            </Column>
          </Row>
          <Row>
            <Img
              style={footer}
              width="540"
              height="48"
              src={`${baseUrl}/logo/logo.png`}
            />
          </Row>
        </Section> */}

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © 2024 Pure Earth Nigeria.
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            You have received this mandatory email service to inform you about
            current job request from Pure Earth
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ConsultancyEmail;
const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  paddingLeft: 20,
  marginRight: "auto",
};

const headerBlue = {
  marginTop: "-1px",
  width: "100%",
  height: 70,
  backgroundFit: "cover",
  backgroundPosition: "center",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#65a30d",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3d3c29",
};

const link = {
  ...paragraph,
  color: "#65a30d",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const footer = {
  maxWidth: "100%",
};
