import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MyNavLink from "../../components/MyNavLink"
import Message from './Message';
import News from './News';

const Home = () => {
    return (
        <div>
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to='/home/news' >News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message' >Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Message}></Route>
                        <Redirect to="/home/news"></Redirect>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Home;
