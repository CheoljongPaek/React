import styled from '@emotion/styled';

interface PageProps {
  className?: string
  id: string
}

export const Container = styled.div`
  font-family: 'open sans', 'lato', 'helvetica', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  #t23:target .title{
    transform: scale(0.1);
    transition-delay: .25s;
  }
`;

export const LinkContainer = styled.ul`
  position: fixed;
  z-index: 1;
  margin: 0;
  padding: 40px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;

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
    display: block;
    .title {
      font-size: 38px;
      display: block;
      line-height: 2;
    }
    .disc {
      font-size: 13px;
      display: block;
    }
  }
`;