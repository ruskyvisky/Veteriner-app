import React, { useState } from 'react';
import { Modal, Button, List, Input, Select } from 'antd';
import { AiFillDelete } from 'react-icons/ai'
const { Option } = Select;

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOk: () => void;
  handleCancel: () => void;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddInfo: () => void;
  handleCategoryChange: (value: string) => void;
  infoList: { name: string; category: string }[];
  handleDelete: (name: string, category: string) => void;
}

const AddInfoModal = ({ 
  isModalOpen, setIsModalOpen , handleOk,handleCancel,inputValue, handleInputChange,handleAddInfo,
  infoList,
  handleDelete,
  handleCategoryChange
}: Props) => {
 

  return (
    <Modal
      title="İlaç ve Aşı Bilgisi ekle"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          İptal
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Tamam
        </Button>,
      ]}
    >
      <Input
        placeholder="Aşı veya ilaç bilgisi girin"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Select placeholder="Kategori Seçin" style={{ width: 120, marginTop: '10px', marginBottom: '10px' }} onChange={handleCategoryChange}>
        <Option value="Aşı">Aşı</Option>
        <Option value="İlaç">İlaç</Option>
      </Select>
      <Button onClick={handleAddInfo} style={{ margin: '10px' }} type='primary'>Ekle</Button>
      <List

        size="small"
        bordered

        dataSource={infoList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <AiFillDelete size={20} color={'red'} onClick={() => handleDelete(item.name, item.category)} key={item.name}>

              </AiFillDelete>,
            ]}
          >
            {item.name} - {item.category}
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default AddInfoModal;
