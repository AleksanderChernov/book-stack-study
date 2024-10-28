import { useState } from 'react';

import { StyledMuiTabs, StyledMuiTab } from '../tabs';

export default function Topbar() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledMuiTabs value={value} onChange={handleChange} sx={{ mb: 5 }}>
            <StyledMuiTab label="Main" />
            <StyledMuiTab label="Favourites" />
            <StyledMuiTab label="Search" />
        </StyledMuiTabs>
    );
}
