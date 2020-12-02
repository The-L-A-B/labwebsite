import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Input from "../input";

const NewsletterFormOne = () => {
    return (
        <form>
            <Row>
                <Col xs={12}>
                    <Input
                        id={'newsletter_name'}
                        name={'newsletter_name'}
                        type={'text'}
                        placeholder={'Your name'}
                    />
                </Col>

                <Col xs={12} className="mt--30">
                    <Input
                        id={'newsletter_email'}
                        name={'newsletter_email'}
                        type={'email'}
                        placeholder={'Your e-mail'}
                    />
                </Col>

                <Col xs={12}>
                    <div className="form-desc">
                        Sign up to our newsletter for regular updates and more.
                    </div>
                </Col>

                <Col xs={12} className="mt--30">
                    <Input
                        type={'submit'}
                        placeholder={'Subscribe'}
                    />
                </Col>
            </Row>
        </form>
    );
};

export default NewsletterFormOne;
