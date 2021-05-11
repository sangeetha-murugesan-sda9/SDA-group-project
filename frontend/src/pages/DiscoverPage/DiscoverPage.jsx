import React from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";


export default function DiscoverPage({users}) {

    // Constants
    const currentUserEmail = AuthApi.getCurrentUser();

    return (
        <div className="general-container">
            <header>
                <SlidingMenu />
                <div className="nav-container">
                    <NavBar onLogout={() => Auth.logout()} />
                </div>
            </header>

            <main>
                <div className="homepage-content">
                    <div className="homepage-submit-container"></div>
                    <div>
                        <h2>Discover more styles ...</h2>

                        <div className="card-small-container">
                            <React.Fragment>
                                {users.filter(function (item) {
                                    return item.email !== currentUserEmail;
                                })
                                    .map((item) => (
                                        <React.Fragment key={item.id}>
                                            <Card
                                                item={item}
                                                score={false}
                                                votes={true}
                                                meta={true}
                                            />
                                        </React.Fragment>
                                    ))}
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}