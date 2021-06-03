import React from 'react';
import styled from 'styled-components';

// 이렇게 동적으로 처리도 가능
const BoxCommon = styled.button`
    width: ${props => (props.isBig ? 250 : 100)}px;
    height: 20px;
    background-color: yellowgreen;
`;

export default function Button({ size }) {
    const isBig = size === 'big';
    const label = isBig ? '큰 버튼' : '작은 버튼';
    return <BoxCommon isBig={isBig}>{label}</BoxCommon>;
}
