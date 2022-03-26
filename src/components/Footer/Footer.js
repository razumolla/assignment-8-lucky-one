import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <h1 className='ques-section'> # Question and Answer</h1>
            <div className='ques-ans'>
                <h2>How react works?</h2>
                <p> React is open-source JavaScript library. It's used for building front end for SPA. It's allow us to create components and reuse it. When we make a change in a component it's make a virtual DOM to compare with actual DOM which element is changed. Then it will update only that DOM element. React has some hooks like useState(), useEffect() which is help us to operate any operation easily.</p>
            </div>
            <div className='ques-ans'>
                <h2>How useState() works?</h2>
                <p> React has some hooks one of them is useState(). useState works with two things one is Variable and another one is function. When we use useState that time we set a variable name and a function name and set a initial value to it. When we need to update variable value we call that function and which operation can happen that set to the function then it will automatically update the variable value if anyone make any changes. Usually we use useState when we know the value can be changed or not.</p>
            </div>
        </div>
    );
};

export default Footer;