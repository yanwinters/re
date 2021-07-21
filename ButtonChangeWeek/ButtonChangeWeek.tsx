import React, {useState} from "react";
import "./ButtonChangeWeek.scss"


const ButtonChangeWeek = () => {

    return (
        <div className="text__container">
            <p className="timetable__text__main"><strong>Расписание</strong></p>
            <ul className="week__container">
                <li><p className="change__week_text">Неделя:</p></li>
                <li>
                    <div className="button__container">
                        <button className="button__change__week" id="button__change__week" onMouseDown={() => {
                            const MoveButton = document.getElementById("button__change__week")
                            // @ts-ignore
                            MoveButton.addEventListener("click", function () {
                                this.classList.add("MoveRight1")
                                // @ts-ignore
                                MoveButton.addEventListener("click", function () {
                                    // @ts-ignore
                                    this.classList.add("MoveLeft1")
                                    // @ts-ignore
                                    MoveButton.addEventListener("click", function () {
                                        // @ts-ignore
                                        this.classList.add("MoveRight2")
                                        // @ts-ignore
                                        MoveButton.addEventListener("click", function () {
                                            // @ts-ignore
                                            this.classList.add("MoveLeft2")
                                            // @ts-ignore
                                            MoveButton.addEventListener("click", function () {
                                                // @ts-ignore
                                                this.classList.add("MoveRight3")
                                                // @ts-ignore
                                                MoveButton.addEventListener("click", function () {
                                                    // @ts-ignore
                                                    this.classList.add("MoveLeft3")
                                                })
                                            })
                                        })
                                    })
                                })

                            })
                        }}>
                        </button>
                        <div className="denominator__text">
                            <p>Зн &nbsp; &nbsp; Чи</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ButtonChangeWeek;
