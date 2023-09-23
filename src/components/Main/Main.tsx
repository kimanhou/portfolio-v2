import React, { useState } from "react";
import Others from "./Others/Others";
import SecondaryNavigation from "./SecondaryNavigation/SecondaryNavigation";
import { Work } from "./Work/Work";
import "./Main.scss";
import DownloadButton from "./DownloadButton";
import Resizable from "./Resizable/Resizable";
import SecondaryTitle from "./SecondaryTitle/SecondaryTitle";

export enum MainTabEnum {
    WORK = "Work",
    OTHERS = "Education & others",
}

const Main: React.FC = (props) => {
    const [activeTab, setActiveTab] = useState<MainTabEnum>(MainTabEnum.WORK);
    const isResizable = true;

    return (
        <section id="main">
            <div className="c-container c-container--top">
                {!isResizable && (
                    <>
                        <SecondaryNavigation
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        {activeTab.toLocaleLowerCase() === "work" && <Work />}
                        {activeTab.toLocaleLowerCase() !== "work" && <Others />}
                        <a href="./CV.pdf" download="KimAnhNguyen - CV">
                            <DownloadButton />
                        </a>
                    </>
                )}

                {isResizable && (
                    <>
                        <Resizable
                            left={
                                <>
                                    <SecondaryTitle title="Work" />
                                    <Work />
                                </>
                            }
                            right={
                                <>
                                    <SecondaryTitle title="Education" />
                                    <Others />
                                </>
                            }
                        />
                        <a
                            href="./CV.pdf"
                            download="KimAnhNguyen - CV"
                            id="main-download-button"
                        >
                            <DownloadButton />
                        </a>
                    </>
                )}
            </div>
        </section>
    );
};

export default Main;
