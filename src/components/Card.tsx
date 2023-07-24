import Image from "next/image";
import styled from "styled-components";
import { BiSolidLike } from 'react-icons/bi'

const StyledCard = styled.div`
    width: 254px;
    border: 2px solid ${props => props.theme.colors.secondary};

    & div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1em 1em 1em;
        height: 120px;

        & span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 30px;
            position: relative;
            left: -10px;
            top: -40px;
            color: ${props => props.theme.colors.secondary};
            font-weight: 600;
            border: 2px solid ${props => props.theme.colors.secondary};
            border-radius: 15px;
            background-color: ${props => props.theme.colors.textSecondary};
        }

        & h2 {
            position: relative;
            top: -20px;
        }
    }
`

const LikeIcon = styled(BiSolidLike)`
    font-size: 20px;
    margin-left: 3px;
    color: ${props => props.theme.colors.secondary};
`

interface CardProps {
    title: string,
    img: string,
    vote: number,
    release: string,
}

export default function Card({ title, img, vote, release }: CardProps) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'

    return(
        <StyledCard>
            <Image src={`${imageUrl}${img}`} alt={title} width={250} height={350} priority />
            <div>
                <span>{vote}%<LikeIcon /></span>
                <h2>{title}</h2>
                <p>{release}</p>
            </div>
        </StyledCard>
    )
}