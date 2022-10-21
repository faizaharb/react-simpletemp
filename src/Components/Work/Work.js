import React from 'react'
import { HeaderThree } from '../Index/style';
import { Card, CardContent, HeaderFour, Icon, WorkDetails } from './stye';

export default function Work() {
  return (
    <>
      <div className="container">
        <div className="work-address">
          <HeaderThree>my work</HeaderThree>
        </div>
        <WorkDetails>
          <Card>
            <Icon>
              <i className="fa-solid fa-link"></i>
            </Icon>
            <HeaderFour>UX projects</HeaderFour>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, officiis facilis. Voluptatem labore veritatis nihil
              reprehenderit molestias.
            </CardContent>
          </Card>
          <Card>
            <Icon>
              <i className="fa-solid fa-bolt-lightning"></i>
            </Icon>
            <HeaderFour>web projects</HeaderFour>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, officiis facilis. Voluptatem labore veritatis nihil
              reprehenderit molestias.
            </CardContent>
          </Card>
          <Card>
            <Icon>
              <i className="fa-solid fa-gauge-high"></i>
            </Icon>
            <HeaderFour>andriod projects</HeaderFour>
            <CardContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, officiis facilis. Voluptatem labore veritatis nihil
              reprehenderit molestias.
            </CardContent>
          </Card>
        </WorkDetails>
      </div>
    </>
  );
}
