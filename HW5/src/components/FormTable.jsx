import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import '../styles/FormTable.css';

const FormTable = () => {
    const initialValues = {
        fullName: '',
        email: '',
        password: '',
        phone: '',
        course: '',
        dateOfBirth: '',
        gender: '',
        education: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().trim().required('Full name is required'),
        email: Yup.string().trim().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        phone: Yup.string().trim().matches(/^\+?\d{7,15}$/, 'Enter a valid phone number').required('Phone number is required'),
        course: Yup.string().required('Please select a course'),
        dateOfBirth: Yup.date().typeError('Invalid date').max(new Date(), 'Date cannot be in the future').required('Please select date of birth'),
        gender: Yup.string().required('Please select gender'),
        education: Yup.string().required('Please select education'),
        address: Yup.string().trim().nullable().notRequired(),
        city: Yup.string().trim().required('Please select city'),
        state: Yup.string().trim().required("Please select state"),
        zipCode: Yup.string().matches(/^\d+$/, 'Please enter a valid zip code').required('Please enter a valid zip code'),
        country: Yup.string().required('Please select country'),
    });

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Форма для работы</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, values }) => (
                    <Form className="application-form">
                        <div className="form-group full-width">
                            <Field
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                className={`form-input ${errors.fullName && touched.fullName ? 'error' : ''}`}
                            />
                            {errors.fullName && touched.fullName && (
                                <div className="error-message">{errors.fullName}</div>
                            )}
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
                                />
                                {errors.email && touched.email && (
                                    <div className="error-message">{errors.email}</div>
                                )}
                            </div>
                            <div className="form-group half-width">
                                <Field
                                    type='tel'
                                    name="phone"
                                    placeholder="Phone"
                                    className={`form-input ${errors.phone && touched.phone ? 'error' : ''}`}
                                />
                            </div>
                            {errors.phone && touched.phone && (
                                <div className="error-message">{errors.phone}</div>
                            )}
                        </div>

                        <div className="form-group full-width">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`form-input ${errors.password && touched.password ? 'error' : ''}`}
                            />
                            {errors.password && touched.password && (
                                <div className="error-message">{errors.password}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="section-label">Which course are you applying for?</label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course A" />
                                    Course A
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course B" />
                                    Course B
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course C" />
                                    Course C
                                </label>
                            </div>
                            {errors.course && touched.course && (
                                <div className="error-message">{errors.course}</div>
                            )}
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <label className="section-label">Date of birth</label>
                                <Field
                                    type="date"
                                    name="dateOfBirth"
                                    className={`form-input ${errors.dateOfBirth && touched.dateOfBirth ? 'error' : ''}`}
                                    placeholder="dd/MM/yyyy"
                                />
                                {errors.dateOfBirth && touched.dateOfBirth && (
                                    <div className="error-message">{errors.dateOfBirth}</div>
                                )}
                            </div>
                            <div className="form-group half-width">
                                <div className="radio-group gender-group">
                                    <label className="radio-option">
                                        <Field type="radio" name="gender" value="Male" />
                                        MALE
                                    </label>
                                    <label className="radio-option">
                                        <Field type="radio" name="gender" value="Female" />
                                        FEMALE
                                    </label>
                                </div>
                                {errors.gender && touched.gender && (
                                    <div className="error-message">{errors.gender}</div>
                                )}
                            </div>
                        </div>

                        <div className="form-group full-width">
                            <label className="section-label">Education</label>
                            <Field as="select" name="education" className="form-select">
                                <option value="" disabled>Select education</option>
                                <option value="School">School</option>
                                <option value="College">College</option>
                                <option value="University">University</option>
                            </Field>
                            {errors.education && touched.education && (
                                <div className="error-message">{errors.education}</div>
                            )}
                        </div>

                        <div className="form-group full-width">
                            <Field
                                as="textarea"
                                name="address"
                                placeholder="Address"
                                className="form-textarea"
                                rows="3"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <Field
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className={`form-input ${errors.city && touched.city ? 'error' : ''}`}
                                />
                                {errors.city && touched.city && (
                                    <div className="error-message">{errors.city}</div>
                                )}
                            </div>
                            <div className="form-group half-width">
                                <Field
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <Field
                                    type="text"
                                    name="zipCode"
                                    placeholder="Zip Code"
                                    className={`form-input ${errors.zipCode && touched.zipCode ? 'error' : ''}`}
                                />
                                {errors.zipCode && touched.zipCode && (
                                    <div className="error-message">{errors.zipCode}</div>
                                )}
                            </div>
                            <div className="form-group half-width">
                                <Field as="select" name="country" className={`form-select ${errors.country && touched.country ? 'error' : ''}`}>
                                    <option value="" disabled>Select country</option>
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Russia">Russia</option>
                                </Field>
                                {errors.country && touched.country && (
                                    <div className="error-message">{errors.country}</div>
                                )}
                            </div>
                        </div>

                        <button type="submit" className="submit-button">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormTable;