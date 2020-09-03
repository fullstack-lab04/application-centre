import React from 'react';
import {
    Fieldset,
    Formpanel,
    TextField,
    ContainerField,
    Button,
    Container,
    Toolbar,
    ExtFieldset,
    ExtLabel,
    ExtPanel,
    //TextField
} from '@sencha/ext-react-modern';

declare var Ext: any;
export const Mdc: React.FC = () => {
    const mdcContainer = {
        phone: {
            layout: 'fit'
        },
        "!phone": {
            layout: 'fit',
            padding: 0
        }
    };
    const borderStyle = { border: '1px solid black',  borderRadius: '4px' };
    const source = "CHS";
    const convDate = "02/09/2013";
    const age = "77";
    const sourceHtmlValue = "<b><label style='padding-right: 8px;' for='source'>Age at Conviction</label></b>" +
        "<input id='source' type='text' style='width:50px;background-color:#eee;height: 34px;padding:4px 8px;border: 1px solid #ccc;' value=".concat(source).concat(">");

    const convDateHtmlValue = "<b><label style='padding-right: 8px;' for='convDate'>Conviction date</label></b>" +
        "<input id='convDate' type='text' style='background-color:#eee;height: 34px;padding:4px 8px;border: 1px solid #ccc;' value=".concat(convDate).concat(">");

    const ageHtmlValue = "<b><label style='padding-right: 8px;padding-top: 100px;' >Age at Conviction</label></b>" +
        "<span style='width:50px;background-color:#eee;height: 34px;padding:4px 8px;display: inline-block;margin-top:5px;'>".concat(age).concat("</span>");

    const courtTypeLable = "<b><label style='</label></b>";

    return (
        <React.Fragment>
            <ExtPanel ui="instructions" layout={{ type: 'vbox', pack: 'start' }}>
                <Container
                    platformConfig={mdcContainer}>
                    <ExtFieldset
                        padding={10}
                        style={borderStyle}
                        border={true}
                        margin={'0 0 5 0'}
                    >
                        <ExtLabel
                            html="<b>CHS ID</b><br>S543868/77X"
                            style={{
                                textAlign: 'left',
                                fontWeight: 'bold',
                                fontSize: '14px',
                            }}
                        />
                    </ExtFieldset>
                </Container>
                <Container
                    platformConfig={mdcContainer}
                    style={borderStyle}
                    border={true}>
                    <Container
                        platformConfig={mdcContainer}>
                        <ExtFieldset
                            padding={10}
                            style={borderStyle}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={sourceHtmlValue}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                }}
                            />
                        </ExtFieldset>
                        <ExtFieldset
                            padding={10}
                            style={borderStyle}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={convDateHtmlValue}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                }}
                            />
                        </ExtFieldset>
                        <ExtFieldset
                            padding={10}
                            style={borderStyle}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={ageHtmlValue}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                }}
                            />
                        </ExtFieldset>
                    </Container>
                    
                </Container>
                <Container
                    platformConfig={mdcContainer}
                    style={borderStyle}
                    border={true}>
                    <Container
                        platformConfig={mdcContainer}>
                        <ExtFieldset
                            padding={10}
                            style={{}}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={'Court type & Location'}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    paddingRight: '8px',
                                }}
                            />
                            <TextField
                                value="Glasgow High Court"
                                style={{color: '#636363',
                                fontWeight: 'bold', 
                                fontSize: '24px',
                                border: '1px solid #ccc'
                                }}
                                labelAlign="left"
                            />
                        </ExtFieldset>
                        <ExtFieldset
                            padding={10}
                            style={{}}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={'Inditable'}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    paddingRight: '8px',
                                }}
                            />
                            <TextField
                                value="Glasgow High Court"
                                style={{color: '#636363',
                                fontWeight: 'bold', 
                                fontSize: '24px',
                                border: '1px solid #ccc'
                                }}
                            />
                        </ExtFieldset>
                        <ExtFieldset
                            padding={10}
                            style={{}}
                            border={false}
                            margin={'0 0 5 0'}
                        >
                            <ExtLabel
                                html={'Caution'}
                                style={{
                                    textAlign: 'left',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    paddingRight: '8px',
                                }}
                            />
                            <TextField
                                value="Glasgow High Court"
                                style={{color: '#636363',
                                fontWeight: 'bold', 
                                fontSize: '24px',
                                border: '1px solid #ccc'
                                }}
                            />
                        </ExtFieldset>
                    </Container>
                    
                </Container>


            </ExtPanel>

        </React.Fragment>
    );
}