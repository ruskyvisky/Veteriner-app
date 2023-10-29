"use client"
import { Col, Input, Row, Form,Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import React, { useState } from "react";
import AddInfoModal from "./addInfoModal";
import { Typography } from 'antd';
const { Title } = Typography;
const AnimalInfoFields = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  

   
    return (
        <Form >
            <Title level={2}>Hayvan Ekle</Title>
            <Row style={{ margin: "10px",  }}>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Adı"></Input>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Tipi"></Input>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Yaşı" type="number"></Input>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Cinsi"></Input>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Sahibi İsmi"></Input>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Input placeholder="Hayvan Sahibi İletişim"></Input>
                </Col>
                <Col span={24} style={{ padding: "10px" }}>
                    <TextArea
                        placeholder="Hayvan Anamnezi"
                        maxLength={5}
                        rows={4}
                    ></TextArea>
                </Col>
                <Form.Item>
                    
            <Button type="dashed" style={{margin:'10px'}} block icon={<PlusOutlined />}
            onClick={()=>{
                setIsModalOpen(true)
            }}
            >
              Tıbbi Bilgileri Ekle
            </Button>
            <AddInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
          </Form.Item>

            </Row>
        </Form>
    );
};

export default AnimalInfoFields;
