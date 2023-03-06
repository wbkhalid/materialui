import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar,
} from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  width: '35%',
  borderRadius: theme.shape.borderRadius,
  padding: '0px 10px',
}));
const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}));

const UserBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}));
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          WBKhalid
        </Typography>
        <AutoStoriesOutlinedIcon
          sx={{ display: { xs: 'block', sm: 'none' } }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <CircleNotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: '30px', height: '30px' }}
          />
        </Icons>
        <UserBox>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: '30px', height: '30px' }}
          />
          <Typography variant="h6">WBK</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
