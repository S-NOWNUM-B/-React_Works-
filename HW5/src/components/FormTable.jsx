import React from 'react';
import { Formik, Form, Field } from 'formik';

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

    const validate = (values) => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'Full name is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!values.phone) {
            errors.phone = 'Phone number is required';
        }

        if (!values.course) {
            errors.course = 'Please select a course';
        }

        if (!values.gender) {
            errors.gender = 'Please select a gender';
        }

        if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Please select a date of birth';
        }

        if (!values.city) {
            errors.city = 'Please select a city';
        }

        if (!values.country) {
            errors.country = 'Please select a country';
        }

        if (!values.zipCode || !/^\d+$/.test(values.zipCode)) {
            errors.zipCode = 'Please enter a valid zip code';
        }

        return errors;
    };

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Форма для работы</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
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
                            <label className="section-label">Выберите курс</label>
                            <div className="radio-group">
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course A" />
                                    Курс A
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course B" />
                                    Курс B
                                </label>
                                <label className="radio-option">
                                    <Field type="radio" name="course" value="Course C" />
                                    Курс C
                                </label>
                            </div>
                            {errors.course && touched.course && (
                                <div className="error-message">{errors.course}</div>
                            )}
                        </div>

                        <div className="form-row">
                            <div className="form-group half-width">
                                <label className="section-label">Дата рождения</label>
                                <Field
                                    type="date"
                                    name="dateOfBirth"
                                    className={`form-input ${errors.dateOfBirth && touched.dateOfBirth ? 'error' : ''}`}
                                    plaxeholder="dd/MM/yyyy"
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
                            <label className="section-label">Образование</label>
                            <Field as="select" name="education" className="form-select">
                                <option value="School">Школа</option>
                                <option value="College">Колледж</option>
                                <option value="University">Университет</option>
                            </Field>
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
                                    <option value="Country">Country</option>
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