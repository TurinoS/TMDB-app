import Image from "next/image";
import styled from "styled-components";
import { BiSolidLike } from 'react-icons/bi'

const StyledCard = styled.a`
    width: 254px;
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textPrimary};
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        transition: 400ms;
    }

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
    id: number
    title: string,
    img: string,
    vote: number,
    release: string,
}

const formatDate = (dateString: string) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [year, month, day] = dateString.split("-");
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex]} ${day}, ${year}`;
  };

export default function Card({ title, img, vote, release, id }: CardProps) {
    const imageUrl = 'https://image.tmdb.org/t/p/w500/'

    return(
        <StyledCard href={`/movie/${id}`}>
            <Image src={`${imageUrl}${img}`} alt={title} width={250} height={350} priority />
            <div >
                <span>{vote}%<LikeIcon /></span>
                <h2>{title}</h2>
                <p>{formatDate(release)}</p>
            </div>
        </StyledCard>
    )
}