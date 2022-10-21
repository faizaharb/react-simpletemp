import styled from "styled-components";

export const SkillsDetails = styled.div`
  width: 50%;
  @media(max-width:991px){
    width: 100%;
  }
`;

export const SkillsParagraph = styled.p`
  text-align: center;
  margin: -0.5rem 0 0.9rem;
  font-size: 1.3rem;
`;
export const SkillsPercentage = styled.div`
  text-transform: uppercase;
`;

export const Progress = styled.div`
  margin: 0.4rem 0;
  height: 15px;
  background: #ebe0e0;
  color: #313131;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  position: relative;
`;

export const SkillsSpan = styled.span.attrs((props) => ({
  width: props.width,
}))`
  position: absolute;
  top: o;
  left: 0;
  height: 100%;
  background: #eb5424;
  width: ${(props) => props.width};
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
  transition: width 1s ease-in;
  -webkit-transition: width 1s ease-in;
  -moz-transition: width 1s ease-in;
  -ms-transition: width 1s ease-in;
  -o-transition: width 1s ease-in;
`;
