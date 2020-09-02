import React from 'react';
 import { Formik } from 'formik';
 
 export const HtmlFormik = () => (
   <div>
     <h1>Html Formik</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       
       onSubmit={(values, { setSubmitting }) => {
           console.log(JSON.stringify(values, null, 2));
           setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );