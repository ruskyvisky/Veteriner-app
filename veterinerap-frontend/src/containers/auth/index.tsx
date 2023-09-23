"use client"
import React from 'react'
import { Form, Input, Button, Typography, Card, Row, Col } from 'antd';
import  {loginType}  from '@/types/authTypes'

const {Link } = Typography;
const onFinish = (values: loginType) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
    <Col span={8}>
      <Card title="Giriş Yap" bordered={true}>
<Form
  name="basic"
  initialValues={{ remember: true }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item<loginType>
    name="email"
    rules={[{ required: true, message: 'Lütfen E-Postanızı girin!' }]}

  >
    <Input placeholder='E-Posta' />
  </Form.Item>

  <Form.Item<loginType>
    
    name="password"
    rules={[{ required: true, message: 'Lütfen Şifrenizi Girin!' }]}
  >
    <Input.Password placeholder='Şifre'  />
  </Form.Item>



  <Form.Item style={{display:'flex' , justifyContent:'center'}}>
    <Button type="primary" htmlType="submit">
      Giriş Yap
    </Button>
  </Form.Item>
</Form>
<div style={{display:'flex' , justifyContent:'center'}}>
<Link href="/test" >
      Hesabın Yok mu? Kayıt ol
    </Link>
</div>
        </Card>
        </Col>
      </Row>


  )
}

export default LoginPage