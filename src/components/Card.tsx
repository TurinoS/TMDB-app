import Image from "next/image";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 254px;
    border: 2px solid ${props => props.theme.colors.secondary};

    & div {
        padding: 0 1em 1em 1em;

        & p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            color: ${props => props.theme.colors.secondary};
            font-weight: 600;
            border: 2px solid ${props => props.theme.colors.secondary};
            border-radius: 50%;
            position: relative;
            top: -55px;
            left: -10px;
            background-color: ${props => props.theme.colors.textSecondary};
        }
    }
`

interface CardProps {
    title: string,
    img: string,
    vote: number
}

export default function Card({ title, img, vote }: CardProps) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'

    return(
        <StyledCard>
            <Image src={`${imageUrl}${img}`} alt={title} width={250} height={350} priority />
            <div>
                <p>{vote}%</p>
                <h2>{title}</h2>
            </div>
        </StyledCard>
    )
}