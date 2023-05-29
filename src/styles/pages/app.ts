import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    minHeight: '100vh',
    padding: '2rem',

    '@bp1': {
        padding: '2rem',
    },

    '@bp3': {
        padding: '1rem',
    },
})

export const Header = styled('header', {
    padding: '3rem 0 10rem',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

   '.img': {
        cursor: 'pointer',
    }
})