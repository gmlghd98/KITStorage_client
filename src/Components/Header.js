import { AppBar, Toolbar, InputBase, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ onSearch }) => {
  const changeKeyword = (event) => {
    onSearch(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          KIT Storage
        </Typography>
        <InputBase
          onChange={changeKeyword}
          sx={{
            ml: 1,
            backgroundColor: 'white',
            borderRadius: 2,
            border: '1px solid #ccc', // 윤곽선 추가
          }}
          startAdornment={<SearchIcon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
