import {List,Con,Question,Button,Img,Contain,Hr,Answer} from './styledComponents'
import {useState} from 'react'

const FaqsItem=(props)=>{
    const [isActive,setIsActive]=useState(false)

    const isShow=()=>{
        setIsActive(prevState=>(!prevState))
    }
    const {details}=props
    const {questionText,answerText}=details

    return(
        <List>
            <Con>
                <Question>{questionText}</Question>
                <Button type="button" onClick={isShow}>
                    {isActive ? <Img src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" alt="minus"/>:
                    <Img src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" alt="plus"/>}
                </Button>
            </Con>
            {isActive && <Contain>
                <Hr/>
                <Answer>{answerText}</Answer>
            </Contain>}
        </List>
    )
}

export default FaqsItem