import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import {User,AppConfig} from './types'
import React,{JSX, useState} from 'react';

function App(): JSX.Element {
  const [user, setUser] =  useState<User | null >(null);
  const [config] = useState<AppConfig>({
    apiUrl: 'https://api.myapp.com',
    version:'1.0.0'
  });

  const handleLogout = (): void =>{
    setUser(null);
  }
  
  const handleLogin = ():void =>{
    setUser({
      id: '123',
      name: 'GuestUser',
      email: 'balukondamuri@gmail.com'
    });
  };

  return (
    <div className='app-container'>
      <Header user = {user} onLogout= {handleLogout}/>
      <main className='app-main'>
        <div className='content-container'>
        {!user ? (
          <div>
            <p>Welcome to my application!</p>
            <button onClick={handleLogin}>Login</button>
            </div>
        ):(
          <p> Welcome back, {user.name}! Your account ID is {user.id}.</p>
        )}
        </div>
      </main>
      <Footer config={config}/>
    </div>
  )
}

export default App;
