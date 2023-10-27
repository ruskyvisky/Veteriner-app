"use client"
import { Button } from 'antd'
import React from 'react'
import useLogout from '@/hooks/auth/useLogout'
import Cookies from 'js-cookie'
import {useRouter} from 'next/navigation'
const Dashboard = () => {

  const {logout} = useLogout()
  
{ 
  
  return (
    
    <div>Dashboard

      <Button type="primary" danger onClick={logout}>
        Çıkış yap </Button>
    </div>
    
  )}
}

export default Dashboard