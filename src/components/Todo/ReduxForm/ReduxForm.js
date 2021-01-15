import React from "react";
import {Field, reduxForm} from "redux-form";

// reduxForm
const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-group mb-3">
                <Field
                    name="message"
                    component="input"
                    type="text"
                    className="form-control"
                    placeholder="Write something"
                    required/>
                <div className="input-group-append">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
}

// Redux Form
export const ReduxForm = reduxForm({
    form: 'PostForm'
})(PostForm);