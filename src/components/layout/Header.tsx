import React from "react";
import {User} from '../../types'


interface HeaderProps {
    user: User | null;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({user, onLogout})=>{
    return (
        <header className="app-header" data-testid="header">
            <h1> My Application </h1>
            {user && (
                <div>
                    <span>Welcome, {user.name}  </span>
                    <button onClick={onLogout} data-testid="logout-button">Logout</button>
                </div>
            )}
        </header>
    );

};
export default Header;