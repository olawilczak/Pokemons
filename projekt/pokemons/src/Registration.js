import {useFormik} from "formik";
import { basicSchema } from "./schemas";

const Registration = (()=>{

    const onSubmit = async (values, actions) => {
        await new Promise((resolve)=> setTimeout(resolve, 1000));
        actions.resetForm(); 
        }
        
        const RegistrationFormula = ()=>{
        const {values, handleBlur, handleChange, handleSubmit} = useFormik({
            initialValues: {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            validationSchema: basicSchema
        });
            return (
            <div>
             <button className="button"> Rejestracja
              <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="name">Name</label>
                <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="name"
                placeholder="Enter your name"
                onBlur={handleBlur}
                
                />
        
                <label htmlFor="email">Email</label>
                <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                
                />
        
        <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
               
                />
        <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                
                />
              </form>
              </button>
              </div>
            );
        }

});


export default Registration;