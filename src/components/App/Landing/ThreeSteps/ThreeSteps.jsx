import React from 'react';

import './ThreeSteps.scss';
import Fader from '../../../Utils/Fader/Fader.jsx';
import Image from "../../../Utils/Image/Image";

import wires from '../../../../assets/images/landing/wires.svg';
import chem from '../../../../assets/images/landing/chem.png';


const ThreeSteps = React.forwardRef((props, ref) => {
    return <Fader.In>
        <div className='container three-steps-filler' ref={ref}></div>
        <div className="three-steps">
            <div className="background-wires">
                <Image src={wires}/>
            </div>
            <div className="container brand">
                <div className="row text-center">
                    <div className="col">Свой IoT за 3 простых шага</div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="row step">1. Создать обработчик на Python с помощью FaaS SDK</div>
                        <div className="row step">2. Создать клиент для своего IoT устройства
                        или воспользоваться готовым (только для Raspberry Pi)</div>
                        <div className="row step">3. Начать пользоваться своим умным домом</div>
                    </div>
                    <div className="col">
                        <Image src={chem}/>
                    </div>
                </div>
            </div>
        </div>
    </Fader.In>
});

export default ThreeSteps;