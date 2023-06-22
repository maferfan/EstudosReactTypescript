import styled from "styled-components";

type cor = {
    cor: string
}

export const Container = styled.div<cor>`
background-color: ${(props) => props.cor};
color: white;
`

type style = {
    small?: boolean
    bg: string
}

export const Botao = styled.button<style>`
font-size: ${(props) => props.small ? "15px" : "30px"};
background-color:${(props) => props.bg}
`