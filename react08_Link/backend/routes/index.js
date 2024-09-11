const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db.js')

router.get('/', (req, res) => {
    console.log('main router!');
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
})

router.post('/getData', (req, res) => {
    console.log('Form으로 요청이 들어옴!', req.body);

    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)';

    conn.query(sql, ['admin', 1234, req.body.data], (err, rows) => {
        if (err) {
            console.log('insert query 이슈 발생!');
        }
        if (rows) {
            res.send({ result: "success" })
        } else {
            res.send({ result: "failed" })
        }
    })

    conn.end();

})

//실습 ) 회원가입, 로그인 처리를 할 수 있는 기능 구현하기
router.post("/join", (req, res) => {
    console.log('회원가입으로 요청이 들어옴!', req.body);
    let sql = 'INSERT INTO NODEJS_MEMBER VALUES(?,?,?)';
    conn.query(sql, [req.body.data.id, req.body.data.password, req.body.data.nickname], (err, rows) => {
        if (err) {
            console.log('insert query 이슈 발생!');
        }
        if (rows) {
            res.send({ result: "success" })
        } else {
            res.send({ result: "failed" })
        }
    })
});

router.post("/login", (req, res) => {
    console.log('로그인으로 요청이 들어옴!', req.body);

    let sql = "SELECT * FROM NODEJS_MEMBER WHERE ID=? AND PW=?";

    conn.query(sql, [req.body.data.ID, req.body.data.PW], (err, rows) => {
        if (err) {
            console.error("로그인 실패!", err);
            return res.send({ result: "error"});
        }
        if (rows.length > 0) {
            return res.send({ result: 'success' });
        } else {
            return res.send({ result: 'failed'});
        }
    });
});

module.exports = router