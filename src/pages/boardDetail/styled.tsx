import styled from 'styled-components';

export const Container = styled.main`
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const AnswerSection = styled.section`
  width: 100vw;
  min-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8F9FA;
  padding: 4rem 0;
`;

export const AnswerBox = styled.div`
  width: 800px;
  padding: 2rem;
  background-color: #FFFF;
  border: 1px solid ${({ theme }) => theme.palette.borderGray};
  box-shadow: 4px 4px 10px ${({ theme }) => theme.palette.borderGray};
  margin-bottom: 4rem;
`;
export const Author = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.black};

  &:hover {
    color: ${({ theme }) => theme.palette.lightViolet}
  }
`;
export const DateField = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.palette.gray};
`;
export const InfoHeadBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const ProfileBox = styled.div`
  color: ${({ theme }) => theme.palette.lightViolet};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Profile = styled(Author)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  
  &:hover {
    color: ${({ theme }) => theme.palette.lightViolet}
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const SubInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`;
export const LikeBox = styled.button<{ clicked:boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #FFFF;
  color: ${({ clicked, theme }) => (clicked ? '#ED4956' : theme.palette.gray)};
  border: 1px solid ${({ clicked, theme }) => (clicked ? '#ED4956' : theme.palette.borderGray)};
  border-radius: 10px;
  padding: 0.5rem 1rem ;
`;

export const CreateDate = styled(DateField)`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.gray};
`;
export const LikeCount = styled.span`
  font-size: 14px;
  vertical-align: middle;
`;
export const Main = styled.div`
  width: 100%;
  padding: 2rem 1rem;
`;

export const InfoHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGray};
`;

export const ArticleContainer = styled.div`
  width: 800px;
  padding: 4rem 2rem;

`;

export const ArticleIconBox = styled.div`
  margin-left: -10px;
  color: ${({ theme }) => theme.palette.lightViolet};
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.black};
  border-bottom: none;
  padding: 0;
  
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ArticleSection = styled.section`
  width: 100vw;
  min-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGray};
`;

export const EmptyField = styled.p`
width: 100%;
text-align: center;
margin-top: 23rem;
margin-bottom: 18rem;
color: ${({ theme }) => theme.palette.black};
opacity: 0.5;
font-size: 4rem;
font-weight: 700;
`;

export const AdoptedBox = styled.div`
  cursor: pointer;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 60rem;
`;

export const Tag = styled.div`
  font-size: 1.2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  border-radius: 2rem;
  padding: 0 1.2rem;
  background: ${({ theme }) => theme.palette.lightViolet};
  color: white;
  margin-right: 0.75rem;
`;

export const Carrot = styled.span`

color: ${({ theme }) => theme.palette.black};
`;

export const CarrotBox = styled.div`
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
  color: orange;
`;

export const ViewBox = styled.div`
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.palette.black};
`;

export const View = styled.span`
`;
