import React from 'react'
import { HeaderThree } from '../Index/style';
import { Progress, SkillsDetails, SkillsParagraph, SkillsPercentage, SkillsSpan } from './style';

export default function Skills() {
  return (
    <>
    
      <SkillsDetails>
        <div className="skills-address">
          <HeaderThree>some skills</HeaderThree>
          <SkillsParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            pariatur magni dolorum ad mollitia obcaecati ab iusto!
          </SkillsParagraph>
        </div>
        <SkillsPercentage>
          <h3>html</h3>
          <Progress>
            <SkillsSpan width="85%"></SkillsSpan>
          </Progress>
          <h3>css</h3>
          <Progress>
            <SkillsSpan width="80%"></SkillsSpan>
          </Progress>
          <h3>bootstrap</h3>
          <Progress>
            <SkillsSpan width="95%"></SkillsSpan>
          </Progress>
          <h3>js</h3>
          <Progress>
            <SkillsSpan width="70%"></SkillsSpan>
          </Progress>
        </SkillsPercentage>
      </SkillsDetails>
    </>
  );
}
