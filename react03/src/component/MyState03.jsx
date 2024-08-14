import React, { useState } from 'react'

const MyState03 = () => {
    const [use, setuse] = useState(0);
    const plus = () => {
        setuse(use + 1);
    };
    const minus = () => {
        if (use > 0) {
            setuse(use - 1);
        }

    };
    const reset = () => {
        setuse(0);
    };

    return (


        <div>
            <div>
                Like! ❤{use}
            </div>
            <div>
                <button onClick={plus}>+1증가</button>
                <button onClick={minus}>-1감소</button>
                <button onClick={reset}>초기화</button>
            </div>
        </div>
    );
};

export default MyState03