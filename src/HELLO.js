import React from'react';
import './HELLO.css'

function HELLO({firstName}){
    return <div>
        <h5 class="foods">Favourite drinks of {firstName}.</h5>
        <ol class="foods">
            <li>RedBull</li>
            <li>Cofee</li>
            <li>Tea</li>
        </ol>
        <h5 class="drinks">Favourie foods of {firstName}.</h5>
        <ul class="drinks">
            <li>qorma</li>
            <li>pizza</li>
            <li>mutton steam</li>
        </ul>
    </div>
}
export default HELLO;