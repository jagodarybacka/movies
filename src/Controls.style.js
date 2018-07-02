import styled from 'styled-components';

const ControlsComponent = styled.form`
  background-color: #fff;
  display: inline-flex;
  position: relative;
  justify-content: space-around;
  padding: 1rem 2rem 4rem 1rem;
  margin: 1rem;
  box-shadow: 0 1px 6px #888888;
  border-radius: 5px;

  button {
    background-color: #9e9e9e;
    padding: 6px 8px;
    margin: 3px 5px;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &.reset {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      background-color: #009688;
      padding: 10px 15px;
      text-transform: uppercase;
      font-weight: 500;
      box-shadow: 0 1px 6px #888888;
      border-radius: 5px;
    }
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
      background-color: #858484;
    }
    &.reset:active {
      box-shadow: 0 0 0 #888888;
      background-color: #007b6f;
    }
  }
`;

const ControlsSection = styled.div`
  margin: 0 2rem;
  width: 40%;

  .sort p {
    display: inline;
  }

  p {
    margin-right: 10px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  
  li {
    margin: 10px 0;
  }
`;

export {
  ControlsComponent,
  ControlsSection,
};
