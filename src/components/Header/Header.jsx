import React from 'react'
import Container from '../Container/Container'
import { Section, Wrapper } from './Header.styled'
import css from "./Header.module.scss"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Section>
        <Container>
          <Wrapper>
            <p>
              <Link to="/">RentCars</Link>
            </p>
            <nav>
              <Link to="/catalog" className={css.Link}>
                Catalog
              </Link>
              <Link to="/favorites" className={css.Link}>
                Favorites
              </Link>
            </nav>
          </Wrapper>
        </Container>
      </Section>
    );
}

export default Header