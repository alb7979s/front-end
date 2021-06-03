import React from 'react';
import styled from 'styled-components';

//es6에 추가된 tagged template literals 문법 사용(``안에 값을 매개변수로 받아서 실행하는 함수가 있다고 생각)
const BoxCommon = styled.div`
    height: 50px;
    background-color: aqua;
`;
const BoxBig = styled(BoxCommon)`
    width: 500px;
`;
const BoxSmall = styled(BoxCommon)`
    width: 200px;
`;

export default function Box({ size }) {
    if (size === 'big') {
        return <BoxBig>큰 박스</BoxBig>
    } else {
        return <BoxSmall>작은 박스</BoxSmall>
    }
}