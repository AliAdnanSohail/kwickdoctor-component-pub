import css from 'styled-jsx/css';

export default css`

.upload-avatar {
  background: none;
  border: none;
  font-size: 12px; 
  font-weight: 500; 
  line-height: 16px;
  cursor: pointer;
  margin-right: 10px;
}

.inputFile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.icon-upload{
  padding-right: 10px;
}

.user{
  border-radius: 50%;
  width:70px;
  height: 70px;
}
.avatar-container {
  color: #C1C2CF;
  padding: 17px 12px;
  cursor: pointer;
}
.container {
  display: flex;
  align-items: center;
  width: 150px; 
}

.icon-trash{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EA6577;
  border-radius: 50%;
  cursor: pointer;
  width : 30px;
  height: 30px;
}
.icon-edit{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4695EF;
  border-radius: 50%;
  cursor: pointer;
  width : 30px;
  height: 30px;  
}
`;
