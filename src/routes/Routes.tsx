import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExtForm } from '../extForm';
import { ExtFormik } from '../extFormik';
import { HtmlFormik } from '../htmlFormik';
import { NavHome } from '../navHome/NavHome';
import {FieldSetIssue} from '../fieldSetIssue/FieldSetIssue'
import { FieldSetExample } from '../FieldSetExample';
import { FormFunctionality } from '../FormFunctionality';
export const Routes: React.FC = () => {
    return (
        
            <Switch>
                <Route path="/" component={NavHome} exact />
                <Route path="/html-formik" component={HtmlFormik} />
                <Route path="/ext-form" component={ExtForm} />
                <Route path="/ext-formik" component={ExtFormik} />
                <Route path="/fieldSetIssue" component={FieldSetIssue} />
                <Route path="/formFunctionality" component={FormFunctionality} />
                <Route path="/fieldsetExample" component={FieldSetExample}/>
            </Switch>
    );
}