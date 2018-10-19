import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.rediectToLogin = this.rediectToLogin.bind(this);
    }

    rediectToLogin() {
        console.log(this.props)
        this.props.history.push('/user/login');
    }

    render() {
        return (
            <div style={{
                maxWidth: '89rem',
                height: '100%',
                overflow: 'hidden',
                color: 'white',
                margin: '0 auto',
            }}
            >
                <div key="homelogo" style={{ float: 'left', height: '100%', fontSize: '2rem' }}>
                    Hnode
                </div>
                <div key="signin" style={{ float: 'right', height: '100%', marginLeft: '1rem' }}>
                   <Button type="primary" ghost onClick={this.rediectToLogin}>登陆</Button>
                </div>
                <div key="topic" style={{ float: 'right', height: '100%' }}>
                    <Button ghost>发表话题</Button>
                    <Link to="/user/login">发表话题</Link>
                </div>
            </div>
    )
  }
}
export default TopBar;
