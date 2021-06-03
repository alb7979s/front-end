import React from 'react';
import Style from './Button.module.css';   //객체형식으로 받음
import cn from 'classnames';

export default function Button({ size }) {
    /*
    if (size === 'big') {
        // return <div><button className={`${Style.button} ${Style.big}`}>큰 버튼</button></div>;
        // classNames 패키지 다운받아서 좀 더 간편하게 가능, 아래처럼
        return <button className={cn(Style.Button, Style.big)}>큰 버튼</button>
    } else {
        // return <button className={`${Style.button} ${Style.small}`}>작은 버튼</button>;
        return <button className={cn(Style.Button, Style.small)}>작은 버튼</button>
    }
    */
    
    //classnames이용해서 이런식으로 조건부 렌더링도 가능
    const isBig = size === 'big';
    return (
        <button
            className={cn(Style.Button, {
                [Style.big]: isBig,             //객체 입력할 때 키를 css명으로 하고, 값을 boolean으로 했을 때 값이 true이면 왼쪽 키 속성명 사용 됨
                [Style.small]: !isBig,
            })}
        >
            {isBig ? '큰 버튼' : '작은 버튼'}
        </button>
    );
}