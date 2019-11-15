import React from 'react';

import './StartUsing.scss';
import Fader from '../../../Utils/Fader/Fader.jsx';
import GradientButton from '../../../Utils/GradientButton/GradientButton.jsx';
import Play from '../../../../assets/images/landing/play.png';
import Image from "../../../Utils/Image/Image";


export default function StartUsing() {
    return <Fader.In>
        <div className="container start-using">
            <div className="row">
                <div className="col">
                    <div className="row brand mt-5">Начать пользоваться</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Image src={Play}/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="row brand-description">
                            asfasfasfasf asfasfasfasfasf <br/>
                            asfasfasfasf asfasfasfasfasf <br/>
                            asfasfasfasf asfasfasfasfasf <br/>
                            asfasfasfasf asfasfasfasfasf <br/>
                            asfasfasfasf asfasfasfasfasf
                        </div>
                        <div className="row sdk_button">
                            <GradientButton
                                col1='#98F7CC'
                                col2='#B2FB8D'>Get started for free</GradientButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fader.In>
}