import React from 'react';
import {Link} from 'react-router-dom';
export const NavHome: React.FC = () => {
    return(
        <div>
            <ul>
                <li><Link to="/ext-form">ext-form</Link></li>
                <li><Link to="/ext-formik">ext-formik</Link></li>
                <li><Link to="/html-formik">html-formik</Link></li>
                <li><Link to="/fieldSetIssue">FieldSet Issue</Link></li>
                <li><Link to="/searchResults">Search Results</Link></li>
                <li><Link to="/fieldsetExample">Fieldset Example</Link></li>
                <li><Link to="/formFunctionality">FormFunctionality</Link></li>
            </ul>
        </div>
    );
}