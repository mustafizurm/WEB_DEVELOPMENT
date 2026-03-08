import React from 'react'
import "./BMICAL.css"

const BMICAL = () => {
    return (
        <section id='BMI-CALCULATOR'>
            <div className='container'>
                <form>
                    <legend className='calculator__title'>BMI Calculator</legend>
                    <div className='form__container'>
                        <div className='form__group'>
                            <label for="weight">Weight (ibs)</label>
                            <input type="number" id="weight" placeholder="Enter weight" />
                        </div>
                        <div className='form__group'>
                            <label for="height">Height (in)</label>
                            <input type="number" id="height" placeholder="Enter height" />
                        </div>
                    </div>
                    <div className='buttons'>
                        <button>Submit</button>
                        <button>Reload</button>
                    </div>
                    <footer>
                        <p>Your BMI is: 12</p>
                    </footer>
                </form>
            </div>
        </section>
    )
}

export default BMICAL