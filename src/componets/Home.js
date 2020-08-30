import React, { Component } from 'react'
import { Button, Jumbotron } from 'reactstrap';
import Slides from './Slides';

export default class Home extends Component {
    render() {
        return (
            <div>
               <Slides/>
               <Jumbotron>
                <h1>ยินดีต้อนรับสู่เว็บไซต์</h1>
                <p>จัดทำโดย นายพงศ์ปณต สมัครการ</p>
                <Button>เข้าสู่ระบบ</Button>
                </Jumbotron>
            </div>
        )
    }
}
