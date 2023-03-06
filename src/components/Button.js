import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid #272136;
border-color:${props => props.cart ? "#ffbb00" :"#ffbb00"};
border-radius:0.5rem;
color:${props => props.cart ? "#ffbb00" : "#ffbb00"};
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props => props.cart ? "#272136" : "#272136"};
    color:var(--mainBlue);
}
:focus{
    outline:none;
}
`; 