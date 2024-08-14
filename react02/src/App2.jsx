

function App2() {
    const name = prompt("이름을 입력하세요")
    let dt = new Date();
    let year = dt.getFullYear()
    let month = dt.getMonth() + 1
    let day = dt.getDate()

    let season = "";
    if (month >= 3 && month <= 5) {
        season = "봄"
    } else if (month >= 6 && month <= 8) {
        season = "여름"
    } else if (month >= 9 && month <= 11) {
        season = "가을"
    } else {
        season = "겨울"
    }

    let myStyle = {
        color: 'red'
    }


    return (
        <div>
            <h1>
                날짜 : {year}. {month}. {day}
            </h1>
            <hr></hr>
            <p>{name}님 지금은 {season}입니다.
                좋은하루 보내세요!
            </p>

            {/* JSX 문법에서 자주 사용되어지는 방법
            1. style 적용
            inline(태그안에) 적용시 객체 형식으로 적용해야한다!

            2. 삼항 연산자
            조건을 통해서 다른 내용을 사용자에게 보여줄때 사용됨
             */}
            <h1 style={myStyle} >오늘은 월요일</h1>
            {/* 승환을 제외한 다른 사람은 야근! */}
            {name == '승환' ? <h1>칼퇴</h1> : <h1>야근</h1>}

        </div>


    );
}

export default App2;