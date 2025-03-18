import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TitleHistory = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #b22222;
  
`

export const HistoryContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.75);

  .text-history {
    font-size: 1.2rem;
  }
`

export const TextContainer = styled.div`
  max-width: 100%;
  text-align: justify;
  padding: 1.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Illustration = styled.img`
  width: 90px;
  height: auto;

`