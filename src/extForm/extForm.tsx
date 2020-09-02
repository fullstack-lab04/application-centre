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

declare var Ext: any;
export const ExtForm: React.FC = () => {
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
            <Fieldset title="Ext form" defaults={{ labelAlign: "placeholder" }}>
                <Emailfield label="Email" placeholder="me@sencha.com" disabled={disabled} />
                <Passwordfield label="Password" required revealable disabled={disabled} />
            </Fieldset>


            <Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
                <Button text='Reset' margin="0 10 0 0" handler={() => console.log('Reset')} />
                <Button text="Submit" handler={e => submitHandler(e)} />
            </Toolbar>
        </Formpanel>
    </Container>);


}