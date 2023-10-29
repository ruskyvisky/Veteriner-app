import React, { useState } from 'react';
import { Modal, Button, List, Input, Select } from 'antd';
import { AiFillDelete } from 'react-icons/ai'
const { Option } = Select;

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddInfoModal = ({ isModalOpen, setIsModalOpen }: Props) => {
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
