import { Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledMuiTabs = styled((props: StyledTabsProps) => (
    <Tabs {...props} centered TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

interface StyledTabProps {
    label: string;
}

export const StyledMuiTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 'large',
    marginRight: theme.spacing(2),
}));
