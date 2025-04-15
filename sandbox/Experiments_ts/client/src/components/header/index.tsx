import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import styles from './index.module.css';
import { Layout, Space, Typography, } from 'antd'
import { Link } from 'react-router-dom';
import { CustomButton } from '../custom-button';
import { Paths } from '../../paths';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton variant="primary">Medarbetare 1.0</CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.login}>
          <CustomButton variant="secondary" icon={ <LoginOutlined /> }>Logga in</CustomButton>
        </Link>
        <Link to={Paths.register}>
        <CustomButton variant="secondary" icon={ <UserOutlined /> }>Skapa konto</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  )
}