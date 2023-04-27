import React, {useEffect, useState} from 'react';
import './registrationWindow.css'
import {Link} from "react-router-dom";


const Facial = () => {

    const [aboutUs,setAboutUs] = useState<boolean>(false)

    return (
        <div className={'facialPage'}>
            <div className={'facialPageHeader'}>
                <button
                    onClick={()=>{
                        aboutUs?setAboutUs(false):
                        setAboutUs(true)}}
                    className={'facialPageHeaderButton'}
                >
                    About us
                </button>
                <div className={'facialPageHeaderLoginAndRegistration'}>
                    <button className={'facialPageHeaderButton'}>
                        <Link className={'link'} to={'/sign_up'}>Sign up</Link>
                    </button>
                </div>
            </div>
            <div className={'facialPagePromo'}>
                <div className={'facialPagePromoAndPromoAddition'}>
                    <div className={'facialPagePromo_PromoDiv'}>
                        <h1 className={'facialPagePromo_Promo'}>
                            Daily & Leading Available
                        </h1>
                    </div>
                    <div className={'facialPagePromo_PromoAddition'}>
                        <h3>
                            Why should you choose DLA
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus explicabo illum laboriosam totam. Accusamus aperiam, eaque eveniet molestiae molestias nostrum numquam possimus quos sapiente sed tempore ut? Adipisci architecto corporis cupiditate deserunt dolorum eaque enim eos, error et harum hic impedit iste maiores natus, nihil nisi non officiis quasi quo quod ratione rerum similique soluta tempora ut, vitae voluptas voluptate? Accusantium animi aperiam at atque consequatur corporis cupiditate debitis dignissimos dolorem eius eos fugiat illo inventore itaque laboriosam magni maxime nam nobis numquam obcaecati odit optio perferendis possimus quasi quisquam, quo, quod ratione reprehenderit soluta tempora vel, veniam vitae voluptatem!
                        </p>
                    </div>
                </div>
            </div>
            <div className={'facialPageFooter'}>
                <div className={'facialPageCreateAccount'}>
                    <p className={'facialPagePromo_PromoAddition'}>
                        Only safe and verified messages
                    </p>
                    <input className={'facialPageCreateAccountLogPas'}/>
                    <input className={'facialPageCreateAccountLogPas'}/>
                    <div className={'facialPageCreateAccountButAndAdd'}>
                        <button className={'facialPageCreateAccountButton'} >
                            Sign in
                        </button>
                        <button className={'facialPageCreateAccountAddition'}>Forgot your password?</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Facial;