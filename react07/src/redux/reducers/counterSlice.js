import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            console.log('증가', state.count);
            state.count += 1
        },
        decrement: (state) => {
            console.log('감소', state.count);
            state.count -= 1
        },
        incrementdou: (state, action) => {
            console.log(action.payload.num);

            state.count += action.payload.num
            /*
            action : type, payload를 묶은 객체형태
            type : 명령에 대한 구분 값
            payload : 명령에 대한 값을 저장하는 속성
            ex ) incrementdou({num:2} -> {type:'counter/incrementdou', payload:{num:2}})
                                            명령에 대한 구분                전달받은 데이터
            
            */
        }
    }
})

console.log(counterSlice);

//컴포넌트에서 reducers내 정의된 함수를 접근할 수 있도록 내보내기
export const CounterActions = counterSlice.actions

//store에서 counterSlice의  reducer를 접근할 수 있도록 내보내기

export default counterSlice.reducer