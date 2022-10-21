import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 0.7rem;
  margin: 0.5rem 0;
  border: 1px solid #5e5e5e;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
`;

export const TxtArea = styled.textarea`
  width: 100%;
  min-height:7rem;
  padding: 0.7rem;
  margin: 0.5rem 0;
  border: 1px solid #5e5e5e;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  -o-border-radius: 3px;
`;

export const NameMailInputs = styled(ContactInput)`
  width: calc(97% / 2);
  @media (max-width: 991px){
    width:100%;
  };
`;

export const FlexInputs = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px){
    display :block;
  }
`;

export const ContactButton = styled.button`
  padding: 0.7rem 5rem;
  margin: 0.5rem 0;
  font-size: 1.3rem;
  text-transform: capitalize;
  color: #fff;
  background: rgb(235, 84, 36, 0.8);
  border: 1px solid;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #eb5424;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;
