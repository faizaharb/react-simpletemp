import React from 'react'
import { HeaderThree } from '../Index/style';
import { ItemsFlex, ProfileSec } from './style';


export default function Profile() {
  return (
    <>
      <ProfileSec>
        <div className="profile-address">
          <HeaderThree>my profile</HeaderThree>
        </div>
        <div className="profile-content">
          <ul>
            <ItemsFlex>
              <strong>name </strong>
              <p> : faiza hassan</p>
            </ItemsFlex>
            <ItemsFlex>
              <strong>birthday </strong>
              <p> : 1992</p>
            </ItemsFlex>
            <ItemsFlex>
              <strong>address </strong>
              <p> : egypt</p>
            </ItemsFlex>
            <ItemsFlex>
              <strong>phone </strong>
              <p> : 02-333-666-21</p>
            </ItemsFlex>
            <ItemsFlex>
              <strong>email </strong>
              <p> : faiza@gmail.com</p>
            </ItemsFlex>
            <ItemsFlex>
              <strong>website </strong>
              <p> : www.faiza.com</p>
            </ItemsFlex>
          </ul>
        </div>
      </ProfileSec>
    </>
  );
}
