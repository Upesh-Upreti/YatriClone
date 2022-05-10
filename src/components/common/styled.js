import styled from 'styled-components';

const StyledGrid =  styled.div`

background-color: #fff ;
display: grid;
grid-template-columns: 1fr 0.35fr;
grid-template-rows: 1fr 0.15fr;
grid-column-gap: 0px;
grid-row-gap: 0px;

height: 100vh ;

.image-window { grid-area: 1 / 1 / 2 / 2; }
.form-window { grid-area: 1 / 2 / 2 / 3; }
.status-window { grid-area: 2 / 1 / 3 / 3; }
    
`

export default StyledGrid