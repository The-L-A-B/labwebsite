import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Input from "../input";

const NewsletterFormThree = () => {
    return (
        <form>
            <Row>
                <Col xs={12}>
                    <div className="input-box">
                        <Input
                            id={'newsletter_form_3'}
                            name={'newsletter_form_3'}
                            type={'text'}
                            placeholder={'Your Name'}
                        />
                        <button className="fa fa-user-circle-o"/>
                    </div>
                    <div className="input-box mt--30">
                        <Input
                            id={'newsletter_form_4'}
                            name={'newsletter_form_4'}
                            type={'email'}
                            placeholder={'Your e-mail'}
                        />
                        <button className="fa fa-envelope"/>
                    </div>
                </Col>
            </Row>
        </form>
    );
};

export default NewsletterFormThree;
