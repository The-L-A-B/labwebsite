import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Button from "../../components/button";

const ButtonsContainer = () => {
    return (
        <div className="brook-button-area ptb--120 bg_color--1 ptb-md--80 ptb-sm--60">
            <Container>
                <Row className={'align-items-start'}>
                    <Col xs={12}>
                        <div className="button-group">
                            <h5 className="heading heading-h5 mb-3">Button sizes</h5>
                            <Button
                                type={'link'}
                                btnText={'Extra small size'}
                                btnLink={'/'}
                                size={'xs'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'button'}
                                btnText={'Small size'}
                                size={'sm'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Standard size'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Large size'}
                                btnLink={'/'}
                                size={'lg'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />
                        </div>

                        <div className="button-group pt--80">
                            <h5 className="heading heading-h5 mb-3">Button styles Background</h5>
                            <Button
                                type={'link'}
                                btnText={'Primary button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'button'}
                                btnText={'Secondary button'}
                                size={'sd'}
                                color={'secondary'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'White button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'white'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Pink button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'pink'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Gradient button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'gradient-pink'}
                                btnStyle={'rounded'}
                            />
                        </div>

                        <div className="button-group pt--80">
                            <h5 className="heading heading-h5 mb-3">Button styles Outline</h5>
                            <Button
                                type={'link'}
                                btnText={'Primary button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme-border'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'button'}
                                btnText={'Secondary button'}
                                size={'sd'}
                                color={'secondary-border'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'White button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'white-border'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Pink button'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'pink-border'}
                                btnStyle={'rounded'}
                            />
                        </div>

                        <div className="button-group pt--80">
                            <h5 className="heading heading-h5 mb-3">Other Buttons</h5>
                            <Button
                                type={'link'}
                                btnText={'With Shadow'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'button'}
                                btnText={'No Shadow'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rounded with-no-shadow'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Rectangle'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rectangle'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Rounded'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'rounded'}
                            />

                            <Button
                                type={'link'}
                                btnText={'Bullet'}
                                btnLink={'/'}
                                size={'sd'}
                                color={'theme'}
                                btnStyle={'bullet'}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ButtonsContainer;
