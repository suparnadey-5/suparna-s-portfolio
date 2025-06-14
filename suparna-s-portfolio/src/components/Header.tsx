import React from "react";
import Box from "@mui/material/Box";
import InfoIcon from '@mui/icons-material/Info';
export const Header: React.FC = () => {
    return (
        <>
        <Box className="header p-6 bg-teal-900 text-center text-4xl font-bold">
            Hello, this is the header!
            <Box className="flex flex-col justify-end items-end ">
                <InfoIcon fontSize="medium" />
            </Box>
        </Box>
        
        </>
        
        
    );
}
export default Header;