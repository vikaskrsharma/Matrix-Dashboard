'use client'
import * as React from 'react';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

    const toggleButtonStyles = { padding: 0, fontSize: '14px', fontWeight: 500, lineHeight: '20px', paddingX: '12px', paddingY: '8px' }

    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            className='rounded-[6px] border-[1px] border-[#e2e8f0]'
        >
            <ToggleButton value="left" aria-label="left aligned" className='' sx={toggleButtonStyles}>
                By Customer
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" sx={toggleButtonStyles}>
                By Sales Person
            </ToggleButton>

        </ToggleButtonGroup>
    );
}
