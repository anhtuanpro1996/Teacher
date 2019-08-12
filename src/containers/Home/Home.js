import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
// import 'antd/dist/antd.css';
import './home.css';
import { Button } from 'antd';
function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <div className="edumall_hi">{t('Hi EDumall')}</div>
      <div className="intro">
        <div className="intro-text">{t('Intro System')}</div>
        <Button type="danger" style={{height: "40px",background: "#df322f",marginRight: "16px"}}>
          <img  type="left" style={{filter: "brightness(0) invert(1)",paddingRight:"27.5px"}} alt="add_circle" src={"/images/add-circle.png"}></img>
          <span>{t('Create Lecture')}</span>
        </Button>
      </div>
      <div className="teach-make-lecture">
        {t('Teach Create Lecture')}
      </div>
      <div className="video-home">
        <video width="100%" height="459" controls>
          <source src="https://www.w3schools.com/html/movie.mp4"  />
                Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )

}

export default Home
