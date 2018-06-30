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
    background-color: #009688;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    padding: 10px 15px;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    border: none;
    box-shadow: 0 1px 6px #888888;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
      box-shadow: 0 0 0 #888888;
    }
  }
`;

const ControlsSection = styled.div`
  margin: 0 2rem;
  p {
    display: inline;
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

  select {
    background-color: #fff;
    padding: 6px 8px;
  }
`;

export {
  ControlsComponent,
  ControlsSection,
};
