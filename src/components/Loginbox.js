import { useRef, useState, useEffect } from 'react'

const Loginbox = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState();
    const [pwd, setPwd] = useState();
    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(()=>{
        setErrMeg('');
    },[user,pwd]);

  return (
    <div className='login'>
        <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h3>Log In</h3>
        <form>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' ref={userRef} onChange={(e)=> setUser(e.target.value)} />
        </form>
       
    </div>
  )
}

export default Loginbox