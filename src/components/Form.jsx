import { useState } from 'react';
import './Form.css'


const Form = ()=>
{
    const userData = {
        userName: '',
        emailAddress: '',
        password: '',
        retypedPassword: ''
    }

    const{userName, emailAddress, password, retypedPassword} = userData;
    
    const[data, setUserData] = useState(userData)
    const[userFlag, setUserFlag] = useState(true);
    const[signUpvalid, setSignUpValid] = useState(false);
    const[loginValid, setLoginValid] = useState(false);
    const handleSignUp = (e)=>
    {
        e.preventDefault();
        if(!data.userName || !data.emailAddress || !data.password || !data.retypedPassword)
        {
            signUpvalid(true);
            alert('Account created');
        }
        else{
            setAllData(false);
            alert('All field required*')
        }
    }

    const handleLogin = (e)=>
    {
        e.preventDefault();
        if(!data.emailAddress || !data.password){
            setLoginValid(true);
        }
        else{
            setLoginValid(false);
            alert('Login successful !');
        }
    }

    return(
        <>
        <div className="maincontainer">
            <form action="form" className="form-container">
                {userFlag?(
                    <ul>
                        <li><input type='email' placeholder='Email address' value={data.emailAddress} onChange={(e)=>setUserData(e.target.value)}/></li>
                        <li>{loginValid?(
                            <span>Email address required*</span>
                        ):('')}</li>
                        <li><input type='password' placeholder='Password' value={data.password} onChange={(e)=>setUserData(e.target.value)}/></li>
                        <li>{loginValid?(
                            <span>Enter password</span>
                        ):('')}</li>
                        <li>Don't have an account? <span className='createaccount' onClick={()=>setUserFlag(!userFlag)}>create account</span></li>
                        <li><button type='submit' onClick={()=>handleLogin(e)}>Sign In</button></li>
                    </ul>
                ):(
                    <ul>
                    <li><input type='text' placeholder='Username' value={data.userName} onChange={(e)=>setUserData(e.target.value)}/></li>
                    <li>{signUpvalid?(
                            <span>Email address required*</span>
                        ):('')}
                    </li>
                    <li><input type='email' placeholder='Email address' value={data.emailAddress} onChange={(e)=>setUserData(e.target.value)}/></li>
                    <li>{signUpvalid?(
                            <span>Email address required*</span>
                        ):('')}
                    </li>
                    <li><input type='password' placeholder='Enter Password' value={data.password} onChange={(e)=>setUserData(e.target.value)}/></li>
                    <li>{signUpvalid?(
                            <span>Email address required*</span>
                        ):('')}
                    </li>
                    <li><input type='password' placeholder='Retype Password ' value={data.retypedPassword} onChange={(e)=>setUserData(e.target.value)}/></li>
                    <li>{signUpvalid?(
                            <span>Email address required*</span>
                        ):('')}
                    </li>
                    <li><button type='submit' onClick={()=>handleSignUp(e)}>Sign Up</button></li>
                </ul>
                )}

            </form>
        </div>
        
        </>
    )
}



export {Form};

