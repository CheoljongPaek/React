import styled from '@emotion/styled';

interface PageProps {
  className?: string
  id: string
}

export const LinkContainer = styled.ul`
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 280px;
  width: 10%;
  padding: 0;
  text-align: center;
  & a {
    & svg {
      margin: 30px 0;
      color: #fff;
      font-size: 32px;
      display: block;
      transition: all .5s ease-out !important;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const Page = styled.div<PageProps>`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
  color: #fff;
  overflow: hidden; 
  position: absolute;
  left: ${props => props.id === "p1" ? "0" : "200%"};
  background: ${props => props.id === "p1" ? props.theme.pageColor.first:
                         props.id === "p2" ? props.theme.pageColor.second:
                         props.id === "p3" ? props.theme.pageColor.thrid:
                         props.id === "p4" ? props.theme.pageColor.fourth:
                         props.id === "p5" ? props.theme.pageColor.fifth: 'white'};
  & section {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10%;
    left: 0;
    width: 270px;
    height: ${props => props.id === "p1" ? "220px" : "170px"};
    margin: auto;
    text-align: center;
    font-size: 80px;
    line-height: 1.3;
    transform: ${props => props.id === "p1" ? "translateX(10%) !important;" : "translateX(360%)"};
    transition: all .5s cubic-bezier(.25, 1, .5, 1.25);
    color: #fff;
    font-size: 32px;
    display: block;
    .title {
      font-size: 38px;
      line-height: 2;
    }
  }
`;