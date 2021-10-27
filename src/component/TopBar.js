import React from 'react';
import './TopBar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import avatar from '../images/avatar.png';

function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img src={avatar} alt='' className='topAvatar' />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
