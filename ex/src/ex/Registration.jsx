import React, { useState } from 'react';
import './Registration.css';

const ProductRegistrationForm = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [period, setPeriod] = useState('기간 설정');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('카테고리 설정');
  const [size, setSize] = useState('카테고리 설정');
  const [condition, setCondition] = useState('선택 안함');

  const handleImageUpload = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => ({
        id: Date.now() + Math.random(),
        url: URL.createObjectURL(file),
        file: file
      }));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (id) => {
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div className="product-registration-container">
      <div className="header">
        <button className="back-button">←</button>
        <h2>상품 등록하기</h2>
      </div>

      <form className="registration-form">
        {/* Image Section */}
        <section className="form-section image-section">
          <h3>사진 추가</h3>
          <div className="image-container">
            <label className="image-upload-button">
              <div className="plus-icon">+</div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                multiple 
                hidden
              />
            </label>
            {images.map(image => (
              <div className="thumbnail" key={image.id}>
                <img src={image.url} alt="상품 이미지" />
                <button 
                  type="button" 
                  className="remove-image" 
                  onClick={() => removeImage(image.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Product Information Section */}
        <section className="form-section info-section">
          <div className="form-group">
            <label>제목</label>
            <input 
              type="text" 
              placeholder="상품명" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>가격</label>
            <input 
              type="text" 
              placeholder="상품 가격" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>판매 기간</label>
            <select 
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="기간 설정">기간 설정</option>
              <option value="1주일">1주일</option>
              <option value="2주일">2주일</option>
              <option value="1개월">1개월</option>
              <option value="제한 없음">제한 없음</option>
            </select>
          </div>

          <div className="form-group">
            <label>상세 정보</label>
            <textarea 
              placeholder="상세 내용" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </section>

        {/* Category Section */}
        <section className="form-section category-section">
          <div className="form-group">
            <label>태그</label>
            <select 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            >
              <option value="카테고리 설정">카테고리 설정</option>
              <option value="의류">의류</option>
              <option value="전자제품">전자제품</option>
              <option value="가구">가구</option>
              <option value="도서">도서</option>
            </select>
          </div>

          <div className="form-group">
            <label>사이즈</label>
            <select 
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="카테고리 설정">카테고리 설정</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="form-group">
            <label>상태</label>
            <select 
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="선택 안함">선택 안함</option>
              <option value="새상품">새상품</option>
              <option value="사용감 있음">사용감 있음</option>
              <option value="오래됨">오래됨</option>
            </select>
          </div>
        </section>

        <button type="submit" className="submit-button">등록하기</button>
      </form>
    </div>
  );
};

export default ProductRegistrationForm;