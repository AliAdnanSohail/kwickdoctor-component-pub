import css from 'styled-jsx/css';

export default css`

.upload-avatar {
  cursor: pointer;
  width:70px;
  height: 70px;
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
.upload-img{
  border-radius: 50%;
  width:75px;
  height: 75px;
}
.thumb{
  height:75px;
  width:75px;
  border-radius: 50%;
  background-position: center center;
  background-size: cover;
}

.avatar-container {
  color: #C1C2CF;
  padding: 17px 12px;
  cursor: pointer;
}
.container {
  display: flex;
  align-items: center;
}

.icon-trash{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EA6577;
  border-radius: 50%;
  cursor: pointer;
  width : 40px;
  height: 40px;
}
.icon-edit{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4695EF;
  border-radius: 50%;
  cursor: pointer;
  width : 40px;
  height: 40px;  
}
`;
