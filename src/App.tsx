import React, { FormEvent, useState } from 'react'
import { FirstStep } from './components/first-step'
import { SecondStep } from './components/second-step'
import { FinalStep } from './components/final-step'
import './app.css'

type FormDataType = {
  firstName: string
  lastName: string
  age: number
  aboutMe: string
  gender: string
}

const defaultFormParams: FormDataType = {
  firstName: '',
  lastName: '',
  age: 0,
  aboutMe: '',
  gender: 'Male',
}

function App() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState(defaultFormParams)
  const headers = ['First Step', 'Second Step', 'Last Step']
  const updateFormData = (field: Partial<FormDataType>) => {
    setFormData(prevFormData => {
      return { ...prevFormData, ...field }
    })
  }

  const handleNextClick = (event: FormEvent) => {
    event.preventDefault()
    setStep(prevStep => {
      if (prevStep >= headers.length - 1) {
        console.log(formData)
        return prevStep
      }
      return prevStep + 1
    })
    // console.log(' next step :' + step)
  }

  const handleBackClick = (event: FormEvent) => {
    event.preventDefault()
    setStep(prevStep => {
      if (prevStep <= 0) return prevStep
      return prevStep - 1
    })
    // console.log(' prev step :' + step)
  }

  const getStep = () => {
    return step === 0 ? (
      <FirstStep {...formData} updateFormData={updateFormData} />
    ) : step === 1 ? (
      <SecondStep {...formData} updateFormData={updateFormData} />
    ) : (
      <FinalStep {...formData} updateFormData={updateFormData} />
    )
  }
  return (
    <div className="app">
      <div className="container">
        <form onSubmit={handleNextClick}>
          <div className="header">{headers[step]}</div>
          <div className="main-body">{getStep()}</div>
          <div className="footer">
            {step !== 0 && (
              <button
                className="back-button"
                type="submit"
                onClick={handleBackClick}
              >
                Back
              </button>
            )}
            <button className="next-button">
              {step === headers.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
