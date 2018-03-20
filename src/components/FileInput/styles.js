import css from 'styled-jsx/css';

export default css`

.upload-license-copy {
  background: none;
  border: none;
  font-size: 12px; 
  font-weight: 500; 
  line-height: 16px;
  color: #0C97F9;
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

.box {
  display: flex;
  align-items: center;
  width: 335px;
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.filename {
  width: 300px;
  color: #C1C2CF;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  padding: 16px 12px;
  white-space: nowrap;
  overflow: hidden;
}
.icon-board{
  padding-left: 15px;
}
.icon-remove{
  padding: 16px 16px 15px 12px;
  cursor: pointer;
}
`;
