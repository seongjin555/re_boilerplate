import React from "react";

const Modal = ({open, close, weight_o, label_quantity, text, setweight_o, setq, settext}) => {
    const onChange1 = (e) => {
        setweight_o(e.target.value);
    }
    const onChange2 = (e) => {
        setq(e.target.value);
    }
    const onChange3 = (e) => {
        settext(e.target.value);
    }
    const cancel = () => {
        close();
        setweight_o(0);
        setq(0);
        settext('');
    }
        return (        
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                    <section>
                        <main>
                            <div className="modalmain">
                                <div className="inputWorker">
                                    <label>지관무게 (kg)</label>
                                    <input
                                        type="text"
                                        id="pop지관무게"
                                        name="pop지관무게"
                                        onChange = {onChange1}
                                        value = {weight_o}
                                        required="required"
                                    />
                                </div>
                                <div className="inputWorker">
                                    <label>라벨수량 (장)</label>
                                    <input
                                        type="text"
                                        id="pop라벨수량"
                                        name="pop라벨수량"
                                        onChange = {onChange2}
                                        value = {label_quantity}
                                        required="required"
                                    />
                                </div>
                                <div className="radioBtn">
                                    <label>실리콘처리</label>
                                    <input
                                        type="radio"
                                        id="미처리"
                                        name="pop실리콘"
                                        value="미처리"
                                        required="required"
                                    /><label>미처리</label>
                                    <input
                                        type="radio"
                                        id="외면"
                                        name="pop실리콘"
                                        value="외면"
                                        required="required"
                                    /><label>외면</label>
                                    <input
                                        type="radio"
                                        id="내면"
                                        name="pop실리콘"
                                        value="내면"
                                        required="required"
                                    /><label>내면</label>
                                </div>
                                <div className="inputWorker">
                                    <label>비고</label>
                                    <input 
                                        type="text" 
                                        id="pop비고" 
                                        name="pop비고" 
                                        onChange = {onChange3}
                                        value = {text}
                                        required="required"
                                    />
                                </div>
                            </div>
                        </main>
                        <div className="modalbtn">
                            <button className="등록" onClick={() => close()}> 등록 </button>
                            <button className="취소" onClick={() => cancel()}> 취소 </button>
                        </div>
                    </section>
                ) : null}
            </div>
    )
}

export default Modal 