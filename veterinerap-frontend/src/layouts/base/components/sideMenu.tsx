"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation'
import {FiLogOut} from 'react-icons/fi/'
import useLogout from '@/hooks/auth/useLogout';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Anasayfa', '/dashboard'), 

  getItem('Hayvanlar', 'sub1', null, [
    getItem('Hayvan Ekle', '/add-animal'), 
    getItem('Hayvanlar Listesi', '/animal-list'),
  ]),
  getItem('Randevular', 'sub2',null , [
    getItem('Randevu Ekle', '/add-rendezvous'),
    getItem('Randevu Listesi', '/rendezvous-list'),
  ]),

];
const items2: MenuItem[] = [
  getItem('Çıkış Yap', 'logout', <FiLogOut/>,  ),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const SideMenu: React.FC = () => {
const router = useRouter();
const {logout} = useLogout()

  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100% - 32px)',}}>
    <Menu
      mode="inline"
      openKeys={openKeys}
      
      onClick={(e) => {
        router.push(e.key.toString())
      
      }}
      onOpenChange={onOpenChange}
      style={{ width: 256 , height: '91vh'}}
      items={items}
    />
    <Menu
    style={{color:'red' , width: 256 , height: '100%'}}
    items={items2}
    onClick={() => {
      logout()
    }}
    />
    </div>
  );
};

export default SideMenu;