import React from 'react';
import styled from 'styled-components';

const MyLi = styled.li`
color: green;
font-size: 30px;
list-style-type: none; // 점3개 사라짐
`;

const MyUl = styled.ul`
    display: flex;
    color: green;
font-size: 30px;
list-style-type: none; // 점3개 사라짐
`;

function Header() {
    return (
        <div>
            <MyUl>
                <MyLi>홈</MyLi>
                <MyLi>글쓰기</MyLi>
                <MyLi>로그아웃</MyLi>
            </MyUl>
        </div>
    );
}

export default Header;