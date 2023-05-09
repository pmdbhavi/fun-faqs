import FaqsItem from '../FaqsItem'
import {MainContainer,Container,Heading,Ul} from './styledComponents'

const Faqs=(props)=>{
    const {faqsList}=props
    return(
        <MainContainer>
            <Container>
                <Heading>FAQs</Heading>
                <Ul>
                    {faqsList.map(each=>(
                        <FaqsItem details={each} key={each.id}/>
                    ))}
                </Ul>
            </Container>
        </MainContainer>
    )
}

export default Faqs