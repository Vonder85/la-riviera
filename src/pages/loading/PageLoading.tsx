import { Box, styled } from '@mui/material';
import BotIcon from '../../assets/icons/bot.png';

const StyledLoading = styled(Box)(theme => {
    return {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,

        '& img': {
            width: 128,
            height: 128,
            transform: 'scale(1)',
            opacity: '0',
            animation: 'pulse 2s infinite',

            '@keyframes pulse': {
                '0%': {
                    transform: 'scale(1)',
                    opacity: '0',
                },

                '70%': {
                    transform: 'scale(1.15)',
                    opacity: '1',
                },

                '100%': {
                    transform: 'scale(1)',
                    opacity: '0',
                },
            },
        },
    };
});

const PageLoading = (): JSX.Element => {
    return (
        <StyledLoading>
            <img src={BotIcon} alt="Robot Icon" />
        </StyledLoading>
    );
};

export default PageLoading;
