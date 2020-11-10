import styled from 'styled-components';

export const CardStyles = styled.div`
  border: 3px solid grey;
  border-left: 8px solid ${(props) => props.color};
  width: 20rem;
  margin: 1rem;
  height: 11.5rem;
`

export const TitlesStyles = styled.h1 `
  font-size: 1.3em;
  margin-left: 1rem;
`

export const TagStyles = styled.p`
  color: white;
  font-size: 1em;
  font-weight: bold;
  background-color: ${(props) => props.color};
  padding: 0.4rem;
  display: inline;
  margin: 0.5rem; 
  border-radius: 10px;
`

export const PriceStyles = styled.p`
  margin-left: 1rem;
`

export const ButtonStyles = styled.button`
  background-color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 10px;
  border: 1px solid grey;
  margin-left: 1rem;
`