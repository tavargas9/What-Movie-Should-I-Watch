import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function ThemeSelector() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
      return null;
    }
    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
          border: 0,
          p: 3
        }}
      >
        <Select variant="standard" value={mode} onChange={(event) => setMode(event.target.value)}>
          <MenuItem value="system"><SettingsBrightnessIcon/></MenuItem>
          <MenuItem value="light"><LightModeIcon/></MenuItem>
          <MenuItem value="dark"><DarkModeIcon/></MenuItem>
        </Select>
      </Box>
    );
  }