import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About/About';
import { ExtForm } from '../extForm';
import { ExtFormik } from '../extFormik';
import Home from '../Home/Home';
import { HtmlFormik } from '../htmlFormik';
import { NavHome } from '../navHome/NavHome';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={NavHome} exact />
            <Route path="/html-formik" component={HtmlFormik} />
            <Route path="/ext-form" component={ExtForm} />
            <Route path="/ext-formik" component={ExtFormik} />
        </Switch>
    );
}