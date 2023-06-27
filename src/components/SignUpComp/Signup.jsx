import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupPrompt from './SignupPrompt';
import { CSSTransition } from 'react-transition-group';
import SignupTopBar from './SignupTopBar';


const Signup = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleCardSwitch = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <div>
    <SignupTopBar/>
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 rounded-md shadow-xl bg-white">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-bold text-black">
            {isLoginVisible ? 'Login' : 'Signup'}
          </h2>
          <button
            className="text-sm text-black underline focus:outline-none"
            onClick={handleCardSwitch}
          >
            {isLoginVisible ? 'Click here to signup!' : 'I already have an account'}
          </button>
        </div>
        <div className="p-4">
            <div>
                <CSSTransition in={isLoginVisible} timeout={300} classNames="fade" unmountOnExit>
                <div>
                    {isLoginVisible && (
                    <LoginForm handleCardSwitch={handleCardSwitch} />
                    )}
                </div>
                </CSSTransition>
                <CSSTransition in={!isLoginVisible} timeout={300} classNames="fade" unmountOnExit>
                <div>
                    {!isLoginVisible && (
                    <SignupPrompt handleCardSwitch={handleCardSwitch} />
                    )}
                </div>
                </CSSTransition>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;