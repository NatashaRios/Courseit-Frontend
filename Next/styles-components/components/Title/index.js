import {TitleStyles} from './style';

export default function Title({content, color}){
  return(
    <TitleStyles color={color}>{content}</TitleStyles>
  )
}