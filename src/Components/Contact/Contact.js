import React from "react";
import { HeaderThree } from "../Index/style";
import { ContactButton, ContactInput, FlexInputs, Form, NameMailInputs, TxtArea } from "./style";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="contact">
            <div className="contact-address">
              <HeaderThree>drop me a line</HeaderThree>
            </div>
            <div className="contact-field">
              <Form>
                <FlexInputs>
                  <NameMailInputs
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                  <NameMailInputs
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </FlexInputs>
                <div className="subject">
                  <ContactInput
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="txtArea">
                  <TxtArea
                    name="sms"
                    id="sms"
                    placeholder="Your message"
                  ></TxtArea>
                </div>
                <ContactButton>send message</ContactButton>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
