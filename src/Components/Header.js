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
          placeholder="Search User"
          onChange={changeKeyword}
          className="searchBar"
          startAdornment={<SearchIcon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
