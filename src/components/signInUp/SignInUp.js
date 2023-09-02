import './SignInUp.css';
import logo from '../../assets/icons/padlock_512.png'
import copyright from '../../assets/icons/copyright.png'

import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

export const SignInUp = () => {
    const {type} = useParams();

    const [stateFirstName, setFirstName] = useState('');
    const [stateLastName, setLastName] = useState('');
    const [stateEmail, setEmail] = useState('');
    const [statePassword, setPassword] = useState('');
    const [stateCheckbox, setCheckbox] = useState(false);

    useEffect(() => {
        if (type === 'up') {
            clearFormSignUp();
        }

        if (type === 'in') {
            const remember = localStorage.getItem('remember');
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');

            if (remember === 'true') {
                setEmail(email);
                setPassword(password);
            } else {
                setEmail('');
                setPassword('');
            }
            setCheckbox(false);
        }
    }, [type])

    const clearFormSignUp = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setCheckbox(false);
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleCheckbox = (e) => {
        setCheckbox(e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (type === 'in') {
            const email = localStorage.getItem('email');
            const password = localStorage.getItem('password');

            if ((email && email === stateEmail) && (password && password === statePassword)) {
                if (stateCheckbox) {
                    localStorage.setItem('remember', 'true');
                }
                window.alert('Ви залогінені');
            } else {
                window.alert('Не вірно введено логін чи пароль');
            }
        }

        if (type === 'up') {
            localStorage.setItem('firstName', stateFirstName);
            localStorage.setItem('lastName', stateLastName);
            localStorage.setItem('email', stateEmail);
            localStorage.setItem('password', statePassword);

            window.alert('Ви зареєстровані');
            clearFormSignUp();
        }
    }

    return (
        <div className="container">
            <img className="logo" src={logo} alt="logo"/>
            <h1>Sign {type === 'in' ? 'in' : 'up'}</h1>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                { (type === 'up') &&
                    <div className="wrapper-inputs">
                        <input value={stateFirstName} type="text"
                               onChange={handleFirstNameChange}
                               placeholder="First Name *"
                               pattern="[a-zA-Z]{3,}"
                               required/>
                        <input value={stateLastName} type="text"
                               onChange={handleLastNameChange}
                               pattern="[a-zA-Z]{3,}"
                               placeholder="Last Name *"
                               required/>
                    </div>
                }

                <input type="text" value={stateEmail}
                       onChange={handleEmailChange}
                       placeholder="Email Address *"
                       required
                       pattern="[a-z0-9_\-]{3,}@[a-z0-9_\-]{2,}\.[a-z]{2,}$"/>
                <input type="text" value={statePassword}
                       onChange={handlePasswordChange}
                       placeholder="Password *"
                       pattern="(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
                       required/>

                { (type === 'in') &&
                    <div className="wrapper-checkbox">
                        <input className="checkbox" checked={stateCheckbox} onChange={handleCheckbox} type="checkbox"
                               placeholder="Password *"/>
                        <label>Remember me</label>
                    </div>
                }
                { (type === 'up') &&
                    <div className="wrapper-checkbox">
                        <input className="checkbox" checked={stateCheckbox} onChange={handleCheckbox} type="checkbox"
                               placeholder="Password *"/>
                        <label className="checkbox-label">I want to receive inspiration, marketing promotions and
                            updates via email.</label>
                    </div>
                }

                <button>Sign {type === 'in' ? 'in' : 'up'}</button>

                { (type === 'in') &&
                    <div className="wrapper-links">
                        <p>Forgot password?</p>
                        <Link to='/Cursor_HW20_authorization/signInUp/up'>Don't have an account? Sign up</Link>
                    </div>
                }
                { (type === 'up') &&
                    <div className="wrapper-links">
                        <p></p>
                        <Link to='/Cursor_HW20_authorization/signInUp/in'>Already have an account? Sign in</Link>
                    </div>
                }
            </form>
            <p>Copyright <img className="copyright" src={copyright} alt="Copyright"/> Your website 2023</p>
        </div>
    )
}