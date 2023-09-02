import {SignInUp} from "../../components/signInUp/SignInUp";
import {useParams} from "react-router-dom";

const SignInUpPage = () => {
    const {type} = useParams();

    return <>
        { type === 'in' || type === 'up' ? <SignInUp /> : <WrongURL /> }
    </>
}

export default SignInUpPage;

const WrongURL = () => {
    return (
        <h1>The Page Not Found</h1>
    )
}