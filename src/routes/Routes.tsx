import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExtForm } from '../extForm';
import { ExtFormik } from '../extFormik';
import { HtmlFormik } from '../htmlFormik';
import { NavHome } from '../navHome/NavHome';
import {FieldSetIssue} from '../fieldSetIssue/FieldSetIssue'
import { Container } from '@sencha/ext-react-modern';
export const Routes: React.FC = () => {
    return (
        <Container fullscreen layout="fit" viewport="true">
            <Switch>
                <Route path="/" component={NavHome} exact />
                <Route path="/html-formik" component={HtmlFormik} />
                <Route path="/ext-form" component={ExtForm} />
                <Route path="/ext-formik" component={ExtFormik} />
                <Route path="/fieldSetIssue" component={FieldSetIssue} />
            </Switch>
        </Container>
    );
}