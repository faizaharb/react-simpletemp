import React from 'react'
import { SocialDiv, SocialIcon, SocialSec } from './style';

export default function Social() {
  return (
    <>
      <SocialSec>
        <SocialDiv bgColor="#3B5998">
          <SocialIcon>
            <i className="fa-brands fa-facebook-f"></i>
          </SocialIcon>
          <span>
            <strong>follow me on</strong>
            <br />
            social facebook
          </span>
        </SocialDiv>
        <SocialDiv bgColor="#498CBF">
          <SocialIcon>
            <i className="fa-brands fa-twitter"></i>
          </SocialIcon>
          <span>
            <strong>follow me on</strong>
            <br />
            social facebook
          </span>
        </SocialDiv>
        <SocialDiv bgColor="#CC2127">
          <SocialIcon>
            <i className="fa-brands fa-pinterest"></i>
          </SocialIcon>
          <span>
            <strong>follow me on</strong>
            <br />
            social facebook
          </span>
        </SocialDiv>
      </SocialSec>
    </>
  );
}
