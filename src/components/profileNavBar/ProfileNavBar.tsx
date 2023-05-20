import React from 'react'
import UserCard from '../userCard/UserCard';
import Navigation from '../navigation/Navigation';
import styles from './ProfileNavBar.module.scss'
import ShareThoughts from '../shareThoughts/ShareThoughts';
const ProfileNavBar = () => {
  return (
    <div className={styles.content}>
      <UserCard />
		<Navigation/>
		<ShareThoughts/>
    </div>
  );
}

export default ProfileNavBar;
