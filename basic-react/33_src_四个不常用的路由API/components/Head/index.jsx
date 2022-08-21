import React from 'react';
import { useNavigate } from 'react-router-dom';

const Help = () => {
    /* 编程式路由 */
    const navigate = useNavigate()
    
    function go()
    {
        navigate(1)
    }
    function back()
    {
        navigate(-1)
    }
    return (
        <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={go}>前进</button>
                    <button onClick={back}>后退</button>
                </div>
            </div>
        </div>
    );
}

export default Help;
