import React from "react";
import { AppConfig } from "../../types";

interface FooterProps{
config: AppConfig;
}

const Footer: React.FC<FooterProps>= ({config})=>{
    return (
        <footer className="app-footer" data-testid="footer">
        <p>© 2025 My Application | Version: {config.version}</p>
        </footer>
    )
}

export default Footer;