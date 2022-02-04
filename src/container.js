import React, { useState } from "react";
// import PropTypes from "prop-types";
import { label_date } from "./queries";
import { useQuery } from "react-apollo-hooks";
import Modal from "./Modal"

const container = () => {
    const { data, error, loading } = useQuery(label_date);
    //useQuery는 함수 밖에서 호출 안됨.
    if (!loading && !error && data) {
        var k = data.test_date.length
        //객체의 항목수를 구함(객체이름.length)
    }
    const i = k;    
    var nop = Math.floor((i / 6) + 1);
    //js는 나눗셈이 몫을 구하지 않고 소수점을 반환해서 내림을 씀


    /////////// 여기서 부터 변수 지정 ///////////

    // const [ 변수(객체)이름, 변수를 바꾸는 함수 이름] = useState(변수(객체)의 초기값);
    // 단, 초기값에 useQurey에서 나온값이 안들어감 => 아마도 useState가 먼저 실행되서 그런거 같음.
    const [ j , setj ] = useState(0);
    const [ t , sett ] = useState({
        tr1 : "white",
        tr2 : "white",
        tr3 : "white",
        tr4 : "white",
        tr5 : "white"
    });
    //lot 변수들

    const [ modalopen , setmodalopen] = useState(false)
    //modal 상태값 변수

    const [ weight_o, setweight_o] = useState(0)
    const [ label_quantity , setq] = useState(0)
    const [ text , settext] = useState('')
    //modal에서 설정하는 변수들

    /////////// 여기까지 변수 지정 ///////////
    
    const openmodal = () => {
        setmodalopen(true)
        console.log(modalopen)
    }
    const closemodal = () => {
        setmodalopen(false)
        console.log(modalopen)
    }
    // modal 관련 버튼 함수
    
    if (!loading && !error && data) {
        return (
            <div>
                <div>

                </div>
                <Modal
                    open={modalopen}
                    close={closemodal}
                    weight_o = {weight_o}
                    label_quantity = {label_quantity}
                    text = {text}
                    setweight_o = {setweight_o}
                    setq = {setq}
                    settext = {settext}
                />
            </div>
        )
    }
    else {
        return null;
    }

};

export default container;