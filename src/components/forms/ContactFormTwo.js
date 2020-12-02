import React from 'react';
import {Col, Row} from "react-bootstrap";
import Input from "../input";
import Button from "../button";

const ContactFormTwo = () => {
    return (
        <div className="contact-form contact-form--5">
            <form>
                <Row>
                    <Col xs={12}>
                        <Input
                            id={'name'}
                            name={'name'}
                            type={'text'}
                            placeholder={'Name*'}
                            required={true}
                        />
                    </Col>

                    <Col xs={12} className="mt--30">
                        <Input
                            id={'email'}
                            name={'email'}
                            type={'text'}
                            placeholder={'Email*'}
                            required={true}
                        />
                    </Col>

                    <Col xs={12} className="mt--30">
                        <Input
                            id={'phone_number'}
                            name={'phone_number'}
                            type={'text'}
                            placeholder={'Phone Number'}
                            required={false}
                        />
                    </Col>

                    <Col xs={12} className="mt--30">
                        <Input
                            id={'message'}
                            name={'message'}
                            type={'textarea'}
                            placeholder={'Your Message*'}
                            required={true}
                        />
                    </Col>

                    <Col xs={12} className="mt--30 text-center">
                        <Button
                            btnText={'Send Message'}
                            type="button"
                            btnStyle={'rounded'}
                            size={'sd'}
                            color={'yellow'}
                        />
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default ContactFormTwo;
