import React, { Component } from 'react'
import './whatsapp.css'
import CallLogo from './tele.png'

export default class WhatsApp extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=+919488343729&text=Hello%21%21%21%20%20%20VVR." class="float" target="_blank" rel="noreferrer">
                      <img class="my-float" src="https://img.icons8.com/color/48/000000/whatsapp--v3.png" alt="whatapp" />
                    </a>
                </div>
                <div>
                    <a href="tel:+919488343729" class="float call-icon-img" target="_blank" rel="noreferrer">
                        <img class="my-float" src={CallLogo} alt="call" />
                    </a>
                </div>
            </div>
        )
    }
}
