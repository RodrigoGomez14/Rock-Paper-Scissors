import styled, {keyframes,css} from 'styled-components'

const fadeInKeyframes = keyframes`
    from{
        opacity:0;
        transform: scale(0)
    }
    to{
        opacity:1;
        transform: scale(1)
    }
`

const fadeIn = css`
    animation: 1s ${fadeInKeyframes} ease 
`

export const FeedBack = styled.div`
    ${fadeIn};
    position:absolute;
    top:50%;
    bottom:0;
    left:0;
    right:0
`
export const Button = styled.div`
    border: 1px solid white;
    border-radius:50%;
    transition: .5s;
    cursor:pointer;
    &.active{
        color:blue
    }
    &.active-ia{
        color:red
    }
    &:hover{
        background-color:grey
    }
`