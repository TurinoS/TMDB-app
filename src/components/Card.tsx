
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    width: 20vw;
`

export default function Card() {
    const { movies } = useContext(AppContext)

    console.log(movies)

    return(
        <StyledCard>
            <h2>{movies[0].genres[0].name}</h2>
        </StyledCard>
    )
}