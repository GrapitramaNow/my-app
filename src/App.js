import React, { useState } from 'react';
import './App.css';

const items = [
  {
    name: 'เพลย์มอร์ ลูกอมกลิ่นแตงโมและเมนทอล',
    image: '/picture/1.jpg',
    company: 'บริษัท A',
    testDate: '2025-01-20',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์ลัคกี้แคนดี้กลิ่นส้มและเมนทอล',
    image: '/picture/2.jpg',
    company: 'บริษัท A',
    testDate: '2025-01-22',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์ซุปเปอร์คูลลิ่งเมนทอลถุง รุ่นซอง',
    image: '/picture/3.jpg',
    company: 'บริษัท A',
    testDate: '2025-01-25',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์ซุปเปอร์คูลลิ่งเมนทอล รุ่นขวด',
    image: '/picture/4.jpg',
    company: 'บริษัท A',
    testDate: '2025-01-27',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์กลิ่นองุ่นและเมนทอลขวด รุ่นขวด',
    image: '/picture/5.jpg',
    company: 'บริษัท A',
    testDate: '2025-01-30',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์กลิ่นองุ่นและเมนทอลถุง รุ่นซอง',
    image: '/picture/6.jpg',
    company: 'บริษัท A',
    testDate: '2025-02-01',
    count: '10',
  },
  {
    name: 'ลูกอมเพลย์มอร์กลิ่นเลม่อนเกลือ รุ่นขวด',
    image: '/picture/7.jpg',
    company: 'บริษัท A',
    count: '10',
    testDate: '2025-02-05',
  },
  {
    name: 'ลูกอมเพลย์มอร์กลิ่นเลม่อนเกลือ รุ่นซอง',
    image: '/picture/8.jpg',
    company: 'บริษัท A',
    count: '10',
    testDate: '2025-02-07',
  },
  {
    name: 'ลูกอมเพลย์มอร์กลิ่นแอปเปิ้ลเขียวและเมนทอล รุ่นขวด',
    image: '/picture/9.jpg',
    company: 'บริษัท A',
    count: '10',
    testDate: '2025-02-10',
  },
];


function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <div className="title">สินค้าในคลัง</div>

      <div className="grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => setSelectedItem(item)}
          >
            <img src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.name} className="product-img" />
            <div className="product-name">{item.name}</div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // ป้องกันคลิกพื้นหลังแล้วปิด
          >
            <button className="close-button" onClick={() => setSelectedItem(null)}>
              ❌
            </button>

            <div className="modal-content">
              <img src={`${process.env.PUBLIC_URL}${selectedItem.image}`} className="modal-image" alt="product" />
              <div className="modal-details">
                <h2>{selectedItem.name}</h2>
                <p><strong>บริษัทที่ผลิต:</strong> {selectedItem.company}</p>
                <p><strong>ส่งมาทดสอบวันที่:</strong> {selectedItem.testDate}</p>
                <p><strong>จำนวนสินค้า:</strong> {selectedItem.count}</p>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
