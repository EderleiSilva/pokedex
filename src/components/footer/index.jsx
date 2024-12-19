import { useContext } from "react"
import styled, { css } from "styled-components"
import { ThemeContext } from "../../contexts/theme-contexts"
import "./index.css"

function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <section className="footer" style={{ color: theme.color1, backgroundColor: theme.backgroundColor1 }}>
            <ul className="info">
                <Li>
                    <h3>
                        Quest do curso <a className="linkDevQuest" style={{ color: theme.color1 }}
                            target="_blank" href="https://dev-em-dobro.ticto.club/signin">DevQuest
                            </a> data como Quest avançada de React
                    </h3>
                    <p>Criado em 2024 por Ederlei Pereira</p>
                </Li>
                <Li>
                    <h3>Redes Sociais do aluno/criador</h3>
                    <ul>
                        <Li networksIcon>
                            <a 
                            target="_blank" 
                            href="https://www.instagram.com/ederleisilvap/">
                                <Img typeof="image/svg" src="./src/assets/images/instagram.svg" 
                                style={{backgroundColor: theme.backgroundColor2}}/>
                            </a>

                            <a 
                                target="_blank" 
                                href="https://www.linkedin.com/in/ederlei-silva-046380127/">
                                    <Img typeof="image/svg" src="./src/assets/images//linkedin.svg" 
                                    style={{backgroundColor: theme.backgroundColor2}}/>
                            </a>

                            <a 
                                target="_blank" 
                                href="https://github.com/EderleiSilva">
                                <Img typeof="image/svg" src="./src/assets/images/github.svg" 
                                style={{backgroundColor: theme.backgroundColor2}}/>
                            </a>
                        </Li>
                    </ul>
                </Li>
            </ul>
        </section>
    )
}

const Li = styled.li`
    max-width: 50%;
    ${(props) => props.networksIcon && css `
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        margin-top: 12px;
    `}
`

const Img = styled.img`
    width: 30px;
    padding: 3px;
    border-radius: 5px;
    ${({ theme }) => css`
        background-color: ${theme.backgroundColor2} ;
    `}
`

export { Footer }