import React from 'react';
import {Link} from 'react-router-dom';
export const NavHome: React.FC = () => {
    return(
        <div>
            <ul>
                <li><Link to="/ext-form">ext-form</Link></li>
                <li><Link to="/ext-formik">ext-formik</Link></li>
                <li><Link to="/html-formik">html-formik</Link></li>
            </ul>
        </div>
    );
}