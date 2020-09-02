import React from 'react';
import {
    Fieldset,
    Formpanel,
    Emailfield,
    Passwordfield,
    Button,
    Container,
    Toolbar,
} from '@sencha/ext-react-modern';
import { Formik, Field, Form } from 'formik';

declare var Ext: any;
export const ExtFormik: React.FC = () => {
    const submitHandler = (event) => {
        console.log('Submit Button click!', event);
    }

    const disabled: boolean = false;
    return (<Container
        platformConfig={{
            phone: {
                layout: 'fit'
            },
            "!phone": {
                layout: 'center',
                padding: 10
            }
        }}
    >

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={ values => {
                console.log(JSON.stringify(values, null, 2));
            }}
        >
         <Form>
            <Formpanel
                shadow
                padding="20"
                platformConfig={{
                    "!phone": {
                        maxHeight: 500,
                        width: 500
                    }
                }}
            >
                <Fieldset title="Ext formik" defaults={{ labelAlign: "placeholder" }}>
                    <Emailfield id="email" label="Email" placeholder="me@sencha.com" disabled={disabled} />
                    <Passwordfield id="password" label="Password" required revealable disabled={disabled} />
                </Fieldset>


                <Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
                    <Button text='Reset' margin="0 10 0 0" handler={() => console.log('Reset')} />
                    <Button text="Submit" type="submit" />
                </Toolbar>
            </Formpanel>
            </Form>
        </Formik>
    </Container>);


}