import React from "react";
import { SocialBar } from "../Social";
import "./Footer.scss";

export const Footer: React.FC = (props) => {
    return (
        <footer>
            <svg
                className="triangle"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
                viewBox="0 0 1920 480"
                xmlSpace="preserve"
            >
                <polygon points="0,480 0,0 1920,0 "></polygon>
            </svg>
            <div className="bg">
                <div className="bg__container">
                    <div className="bg__wrapper"></div>
                    <div className="bg__main">
                        <div className="bg__container">
                            <div className="info">
                                <SocialBar />
                                <p className="info__copy">
                                    Made with &#129293; &copy; 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
