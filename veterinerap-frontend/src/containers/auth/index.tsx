"use client"
import React, { useState } from 'react'
import { Form, Input, Button, Typography, Card, Row, Col } from 'antd';
import { authType } from '@/types/authTypes'
import useRegister  from '@/hooks/useRegister'
import useLogin from '@/hooks/useLogin'
const { Link } = Typography;


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
};
const LoginPage = () => {
  
  const [isRegister, setIsRegister] = useState(false)

  const { registerOperation, registerLoading } = useRegister()
  const { loginOperation, loginLoading } = useLogin()
  const onFinish = (values: any) => {
    isRegister ? registerOperation(values) : loginOperation(values)
  };
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Card title={isRegister ? 'Kayıt ol' : 'Giriş yap'} bordered={true} style={{ textAlign: 'center' }}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<authType>
              name="username"
              rules={[{ required: true, message: 'Lütfen E-Postanızı girin!' }]}

            >
              <Input placeholder='E-Posta' />
            </Form.Item>




            {isRegister ? <Form.Item<authType>

              name="name"
              rules={[{ required: true, message: 'Lütfen Adınızı Girin!' }]}
            >
              <Input placeholder='Ad' />
            </Form.Item> : null}

            {isRegister ? <Form.Item<authType>

              name="surname"
              rules={[{ required: true, message: 'Lütfen Soyadınızı Girin!' }]}
            >
              <Input placeholder='Soyad' />
            </Form.Item> : null}
            {isRegister ? <Form.Item<authType>

              name="phoneNumber"
              rules={[{ required: true, message: 'Lütfen Telefonunuzu Girin!' }]}
            >
              <Input placeholder='Telefon Numarası' />
            </Form.Item> : null}


            <Form.Item<authType>

              name="password"
              rules={[{ required: true, message: 'Lütfen Şifrenizi Girin!' }]}
            >
              <Input.Password placeholder='Şifre' />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="primary" htmlType="submit">
                {isRegister ? "Kayıt Ol" : "Giriş Yap"}
              </Button>
            </Form.Item>

          </Form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link onClick={() => {
              setIsRegister(!isRegister)
            }}>
              {isRegister ? "Hesabın var mı? Giriş yap" : "Hesabın yok mu? Kayıt ol"}
            </Link>
          </div>
        </Card>
      </Col>
    </Row>


  )
}

export default LoginPage