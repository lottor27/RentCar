import React from 'react'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import { Section, Wrapper } from './HomePage.styled'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/catalog');
    }

    return (
        <Section>
            <Container>
                <Wrapper>
                    <h2>Welcome to RentCar</h2>
                    <Button onClick={handleButton}>Search</Button>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default HomePage