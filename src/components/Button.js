import styled from 'styled-components';

export const ButtonContainer = styled.button`
color:#03fc94;
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
background-color:#272136;
border:0.05rem solid #272136;
border-color:${props => props.cart ? "#272136" :"#272136"};
border-radius:0.5rem;
color:${props => props.cart ? "#03fc94" : "#03fc94"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "#272136" : "#272136"};
    color: #007c47;
}
:focus{
    outline:none;
}
`; 