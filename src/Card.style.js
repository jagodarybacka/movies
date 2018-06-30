import styled from 'styled-components';

const CardComponent = styled.li`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1rem;
  width: 300px;
  margin: 1rem;
  box-shadow: 0 1px 6px #888888;
  border-radius: 5px;

  div:first-child {
    font-size: 1.5rem;
    display: block;
    width: 100%;
    font-weight: 500;
    margin-bottom: 7px;
    .label {
      display: none;
    }
  }

  div {
    margin: 0 4px;
  }

  .label {
    padding-right: 5px;
    font-weight: 300;
  }
`;

export default CardComponent;
