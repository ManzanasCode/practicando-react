import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ImagenMono from '../components/imagenMono';

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">CHARACTERS</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <ImagenMono />
    </>
  );
}
