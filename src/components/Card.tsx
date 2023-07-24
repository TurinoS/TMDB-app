import Image from "next/image";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 200px;
`

interface CardProps {
    title: string,
    img: string,
}

export default function Card({ title, img }: CardProps) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'

    return(
        <StyledCard>
            <Image src={`${imageUrl}${img}`} alt={title} width={200} height={290} priority />
            <h2>{title}</h2>
        </StyledCard>
    )
}