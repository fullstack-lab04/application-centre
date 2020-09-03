import * as React from 'react';
import {
  ExtContainer,
  ExtFieldset,
  ExtTextfield,
  ExtLabel,
  ExtFormpanel
} from '@sencha/ext-react-modern';
//import { ButtonGroup } from '../ButtonGroup';

export const Omdc: React.FC<any> = (props) => {
  const onCancelButtonClick = (button: any, event: any) => {
    console.log(button, event);
  };
  const onSubmitButtonClick = (button: any, event: any) => {
    console.log(button, event);
  };

  return (
    <ExtContainer layout="center">
      <ExtFormpanel shadow>
        <ExtFieldset>
          <ExtTextfield style={{
            border: '1px solid blue'
          }} required />
        </ExtFieldset>
        <ExtFieldset>
          <ExtTextfield style={{
            border: '1px solid blue'
          }} required />
        </ExtFieldset>
        <ExtFieldset>
          <ExtTextfield style={{
            border: '1px solid blue'
          }} required />
        </ExtFieldset>
        <ExtFieldset>
          <ExtTextfield style={{
            border: '1px solid blue'
          }} required />
        </ExtFieldset>
      </ExtFormpanel>
    </ExtContainer>
  );
};