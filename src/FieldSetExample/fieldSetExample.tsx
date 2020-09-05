



import React from 'react';
import { ExtContainer, 
    ExtFieldset, ExtTextfield, 
    ExtFormpanel } from '@sencha/ext-react-modern';


export const FieldSetExample: React.FC = () => {
    return (
        <ExtContainer layout="center">
            <ExtFormpanel shadow>
                <ExtFieldset
                   title="About You"
                   instructions="Tell us about yourself."
                   width={300}
                >
                    <ExtTextfield label="First Name" labelAlign="placeholder" style={{border: '1px solid #000'}}/>
                    <ExtTextfield label="Last Name" labelAlign="placeholder"/>
                </ExtFieldset>
            </ExtFormpanel>
        </ExtContainer>
    );
};
