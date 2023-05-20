import { FC } from 'react';
import ProfileNavBar from '../../components/profileNavBar/ProfileNavBar';
import '../../App.scss';
import styles from './Profile.module.scss';

import ContentProfile from '../../components/contentProfile/ContentProfile';

const ProfilePage: FC = () => {
  return (
    <div className={styles.grid}>
      <ContentProfile />
      <ProfileNavBar />
    </div>
  );
};

export default ProfilePage;
