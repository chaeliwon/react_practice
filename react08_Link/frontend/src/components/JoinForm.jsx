import React, { useRef } from 'react';
import api from '../api';

const JoinForm = () => {
    const idRef = useRef(null);
    const passwordRef = useRef(null);
    const nicknameRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            id: idRef.current.value,
            password: passwordRef.current.value,
            nickname: nicknameRef.current.value
        };


        let res = await api.post("/join", { data: formData });
        console.log(res.data);

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="아이디를 입력하세요"
                    ref={idRef}
                /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    ref={passwordRef}
                /><br />
                <input
                    type="text"
                    name="nickname"
                    placeholder="닉네임을 입력하세요"
                    ref={nicknameRef}
                /><br />
                <input type="submit" value="회원가입" /><br />
            </form>
        </div>
    );
};

export default JoinForm;
