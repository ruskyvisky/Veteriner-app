"use client"
import { Col, Input, Row, Form, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useAddAnimal from '../hooks/useAddAnimal'
import React, { useState } from "react";
import { animalType } from "@/types/animalType";
import AddInfoModal from "./addInfoModal";
import { Typography } from 'antd';
const { Title } = Typography;
const AnimalInfoFields = () => {
    const [infoList, setInfoList] = useState<{ name: string; category: string }[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
  
    const handleOk = () => {
      
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleCategoryChange = (value: string) => {
      setSelectedCategory(value);
    };
  
    const handleAddInfo = () => {
      if (inputValue && selectedCategory) {
        setInfoList([...infoList, { name: inputValue, category: selectedCategory }]);
        setInputValue('');
      }
    };
    const handleDelete = (name: string, category: string) => {
      const updatedList = infoList.filter((item) => item.name !== name || item.category !== category);
      setInfoList(updatedList);
    };
  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addAnimalOperation, addAnimalLoading } = useAddAnimal();

    const onFinish = (values: animalType) => {
        addAnimalOperation(values);

    }

    return (
        <Form
            onFinish={onFinish}
        >
            <Title level={2}>Hayvan Ekle</Title>
            <Row style={{ margin: "10px", border: "solid 1px red" }}>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item  <animalType>
                        name={"animalName"}
                    >
                        <Input size="small" placeholder="Hayvan Adı"></Input>
                    </Form.Item>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item
                        <animalType>
                        name="animalType"
                    >
                        <Input size="small" placeholder="Hayvan Tipi"></Input>
                    </Form.Item>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item
                        <animalType>
                        name="animalAge"
                    >
                        <Input size="small" placeholder="Hayvan Yaşı" type="number"
                        accept="number"
                         
                        ></Input>
                    </Form.Item>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item
                        <animalType>
                        name="animalRace"

                    >
                        <Input size="small" placeholder="Hayvan Cinsi"></Input>
                    </Form.Item>

                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item
                        <animalType>
                        name="parentName"
                    >
                        <Input size="small" placeholder="Hayvan Sahibi İsmi"></Input>
                    </Form.Item>
                </Col>
                <Col span={8} style={{ padding: "10px" }}>
                    <Form.Item
                        <animalType>
                        name={"parentContact"}
                    >
                        <Input size="small" placeholder="Hayvan Sahibi İletişim"></Input>
                    </Form.Item>
                </Col>
                <Col span={24} style={{ padding: "10px" }}>
                    <Form.Item <animalType>
                        name="specialNote"

                    >
                        <TextArea
                        size="small"
                            placeholder="Hayvan Anamnezi"
                            rows={4}
                        ></TextArea>
                    </Form.Item>
                </Col>
                <Form.Item>

                    <Button type="dashed" style={{ margin: '10px' }} block icon={<PlusOutlined />}
                        onClick={() => {
                            setIsModalOpen(true)
                        }}
                    >
                        Tıbbi Bilgileri Ekle
                    </Button>
                    <AddInfoModal
                    handleCategoryChange={handleCategoryChange}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleAddInfo={handleAddInfo}
        infoList={infoList}
        handleDelete={handleDelete}
      />
                </Form.Item>

            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ backgroundColor: 'green', margin: '10px', color: 'white' }} htmlType="submit" >Kaydet</Button>
            </div>
            <pre>{JSON.stringify(infoList, null, 2)}</pre>
        </Form>
        
    );
};

export default AnimalInfoFields;
