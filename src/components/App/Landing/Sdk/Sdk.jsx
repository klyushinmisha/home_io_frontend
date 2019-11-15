import React from 'react';

import './Sdk.scss';
import Fader from '../../../Utils/Fader/Fader.jsx';
import GradientButton from '../../../Utils/GradientButton/GradientButton.jsx';
import brackets from '../../../../assets/images/landing/curly-brackets.svg';
import Image from "../../../Utils/Image/Image";


export default function Sdk() {
    return <Fader.In>
        <div className="container sdk">
            <div className="row">
                <div className="col">
                    <div className="row brand mt-5">Воспользоваться нашим <br/> FaaS SDK</div>
                </div>
            </div>
            <div className="row">
                <div className="col script">

                    <div className="brackets">

                        <Image src={brackets}/>

                    </div>
                    <div className="code">
                        АЫФафыаФАФ
                        ЫФЫАфыафАфа
                        фыафафыа
                        фаыфафафы              аыфафыа
                    </div>
                </div>
                <div className="col sdk_button">
                    <GradientButton
                        col1='#C58AF3'
                        col2='#717AE9 '>SDK</GradientButton>
                </div>
            </div>
        </div>
    </Fader.In>
}