import styled from '@emotion/styled';

export const DetailedInformation = styled.div`
  margin-top: 200px;
  height: 600px;
  & .container {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    & .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      align-items: flex-start;
      & h2 {
        font-size: 28px;
      }
      & p {
        font-family: "Helvetica Neue";
        font-size: 16;
        line-height: 28px;
        font-weight: 400;
        width: 800px;
      }
    }
  }
`;