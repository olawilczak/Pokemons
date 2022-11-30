import {useFormik} from "formik";
import { basicSchema } from "./schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm(); 
    }

const Formula = () => {

        const {
            values,
             errors,
              touched,
                handleBlur,
                 handleChange,
                  handleSubmit
                } = useFormik({
            initialValues: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });
            return (
             <div>
              <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name">Name</label>
                <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="name"
                placeholder="Enter your name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
                
                />

                {errors.name && touched.name && (
                    <p className="error">{errors.name}</p>
                )}
        
                <label htmlFor="email">Email</label>
                <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
                
                />
            {errors.email && touched.email && (
                    <p className="error">{errors.email}</p>
                    )}
        <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
               
                />
                {errors.password && touched.password && (
                    <p className="error">{errors.password}</p>
                    )}
        <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                    )}
              </form>
              <button type="submit">Submit</button>
              </div>
            );
        }

;


export default Formula;