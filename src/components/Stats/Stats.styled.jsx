import styled from '@emotion/styled';
export const StatsList = styled.ul`
    margin:0px;
    width:inherit;
    display:flex; 
    justify-content: stretch ;
    align-items: center;
`;
export const Item = styled.li`
background-color:rgb(152, 179, 36);
border-radius: 5px;
 outline: 1px solid black;
  flex-basis: calc((100% - 2 *1px) / 2);
 display:flex;
 flex-direction:column;
 justify-content: center ;
 align-items: center;
 padding-top:5px;
`;
export const Label = styled.span`
padding-bottom:5px;
`;
export const Quantity = styled.span`
   font-weight: 700;
   font-size: 20px;
   padding-bottom:5px;
`;