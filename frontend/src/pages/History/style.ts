import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
interface TitleProps {
  color?: string
}

export const TitleHistory = styled.h1<TitleProps>`
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({color}) => color || "#b2222"};
  text-align: center;
  padding: 1rem;
`

export const HistoryContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;


  background-color: #fff;
  border-radius: 8px;
  box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.75);
`



export const TextContainer = styled.div`
  max-width: 100%;
  text-align: justify;
  padding: 1.5rem;

  @media screen and (max-width: 768px){
    font-size: .8rem;
    padding: .5rem;
  }
`
