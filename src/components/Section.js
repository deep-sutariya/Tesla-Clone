import React from 'react'
import "./section.css";
import Fade from 'react-reveal/Fade';

function Section({ title, descripition, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <div className='wrap' style={{ backgroundImage: `url(${backgroundImg})` }}>

            <div className='ItemText'>
                <Fade top>
                    <h1>{title}</h1>
                </Fade>
                <Fade bottom>
                    <p>{descripition}</p>
                </Fade>
            </div>

            <div>

                <div className='btn_grp'>
                    {/* <Fade left>
                        <div className='left_btn'>
                            {leftBtnText}
                        </div>
                    </Fade> */}
                    {rightBtnText===undefined ? <Fade bottom><div className='left_btn'>{leftBtnText}</div></Fade> : <Fade left><div className='left_btn'>{leftBtnText}</div></Fade>}
                    <Fade right>
                        {rightBtnText && <div className='right_btn'>{rightBtnText}</div>}
                        {/* if rightbtn exixt then show it othewise skip */}
                    </Fade>
                </div>

                {title === 'Model 3' ? <div className='downarrow'><img src='https://cdn-icons-png.flaticon.com/512/25/25623.png'></img></div> : <img></img>}

            </div>
        </div >
    )
}

export default Section;