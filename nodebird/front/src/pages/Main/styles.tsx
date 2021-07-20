import styled from '@emotion/styled';

export const Header = styled.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${props => props.theme.pageColor.thrid};
`;

interface PageProps {
  className?: string
  id: string
}

export const Page = styled.div<PageProps>`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
  color: #fff;
  overflow: hidden; 
  // position: absolute;
  background: ${props => props.id === "p1" ? 'darkslateblue':
                         props.id === "p2" ? 'tomato':
                         props.id === "p3" ? 'gold':
                         props.id === "p4" ? 'deeppink':
                         props.id === "p5" ? 'rebeccapurple':'white'};
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  display: flex;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;