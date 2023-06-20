import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #FAFAFA;
  span{
    margin-left: 750px;
  }
  img{
    margin-top: 10px;
  }
`;
export const Text = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #40bfff;
  }
`;