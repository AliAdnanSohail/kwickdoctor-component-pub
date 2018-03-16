import css from 'styled-jsx/css';

import settings from '../../utils/style-helper';

export default css`
 
  .upload-license-copy{
    background: none;
    border: none;    
    color: #0C97F9; 
    font-size: 12px; 
    font-weight: 500; 
    line-height: 16px;
  }
  .inputFile{
    display : none;
  }
  .icon-upload{
    float: left;
    padding-left: 10px;
    width: 12px;
    height: 12px;
    background-color: #0C97F9; 
    background: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/svg%3E");
  }
  
  .box {
    display: flex;
    align-items: center;
    width: 335px;
    border-radius: 4px;	
    background-color: #FFFFFF;	
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
       
  }
  .filename {
  width: 303px;
  color: #F2F2F2;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  }
  .icons{
  height: 21px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
 
  .med {
  height: 15px;
  width: 15px;
  margin: 13px 12px 13px 15px;
  background-size: 14px;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxOXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAxOSAyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT44QTA5QTM1OS0xNjA3LTQ5MTgtQTE5OS1ERjc5MzZFRjMzMzY8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBhdGggZD0iTTMuNSwzLjUgQzIuOTQ3NzE1MjUsMy41IDIuNSwzLjk0NzcxNTI1IDIuNSw0LjUgTDIuNSwxNy41IEMyLjUsMTguMDUyMjg0NyAyLjk0NzcxNTI1LDE4LjUgMy41LDE4LjUgTDE1LjUsMTguNSBDMTYuMDUyMjg0NywxOC41IDE2LjUsMTguMDUyMjg0NyAxNi41LDE3LjUgTDE2LjUsNC41IEMxNi41LDMuOTQ3NzE1MjUgMTYuMDUyMjg0NywzLjUgMTUuNSwzLjUgTDMuNSwzLjUgWiBNMy41LDEuNSBMMTUuNSwxLjUgQzE3LjE1Njg1NDIsMS41IDE4LjUsMi44NDMxNDU3NSAxOC41LDQuNSBMMTguNSwxNy41IEMxOC41LDE5LjE1Njg1NDIgMTcuMTU2ODU0MiwyMC41IDE1LjUsMjAuNSBMMy41LDIwLjUgQzEuODQzMTQ1NzUsMjAuNSAwLjUsMTkuMTU2ODU0MiAwLjUsMTcuNSBMMC41LDQuNSBDMC41LDIuODQzMTQ1NzUgMS44NDMxNDU3NSwxLjUgMy41LDEuNSBaIE03LDAuNSBMMTIsMC41IEMxMi44Mjg0MjcxLDAuNSAxMy41LDEuMTcxNTcyODggMTMuNSwyIEwxMy41LDQgQzEzLjUsNC44Mjg0MjcxMiAxMi44Mjg0MjcxLDUuNSAxMiw1LjUgTDcsNS41IEM2LjE3MTU3Mjg4LDUuNSA1LjUsNC44Mjg0MjcxMiA1LjUsNCBMNS41LDIgQzUuNSwxLjE3MTU3Mjg4IDYuMTcxNTcyODgsMC41IDcsMC41IFogTTYuOTc2MTQ4NiwxMC41NTQyODE0IEM2LjYzODQ1OTE5LDEwLjIzMjQ1NTQgNi4wOTA5NTY0NywxMC4yMzI0NTU0IDUuNzUzMjY3MDYsMTAuNTU0MjgxNCBDNS40MTU1Nzc2NSwxMC44NzYxMDc1IDUuNDE1NTc3NjUsMTEuMzk3ODkwNiA1Ljc1MzI2NzA2LDExLjcxOTcxNjcgTDguNjcwNTk1MzgsMTQuNSBMMTMuMjQ2NzMyOSwxMC4xOTI1MTkgQzEzLjU4NDQyMjQsOS44NzA2OTI5OSAxMy41ODQ0MjI0LDkuMzQ4OTA5ODcgMTMuMjQ2NzMyOSw5LjAyNzA4MzgyIEMxMi45MDkwNDM1LDguNzA1MjU3NzcgMTIuMzYxNTQwOCw4LjcwNTI1Nzc3IDEyLjAyMzg1MTQsOS4wMjcwODM4MiBMOC42NzA1OTUzOCwxMi4xNjkxMjk2IEw2Ljk3NjE0ODYsMTAuNTU0MjgxNCBaIiBpZD0icGF0aC0xIj48L3BhdGg+ICAgIDwvZGVmcz4gICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iQWNjLWRldGFpbHMtZmlsbGVkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTI3LjAwMDAwMCwgLTE2OTYuMDAwMDAwKSI+ICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwOS4wMDAwMDAsIDE2OS4wMDAwMDApIj4gICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQtQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMTUxNS4wMDAwMDApIj4gICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC03IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4wMDAwMDAsIDEyLjAwMDAwMCkiPiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC02Ij4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb25zL0RvY3VtZW50cy9NZWRpY2FsLVJlY29yZHMiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljb24iPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0ibWVkaWNhbC1yZWNvcmRzIiBmaWxsPSIjMEM5N0Y5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICAgICAgPC9nPiAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
  }

  .remove {
  height: 13px;
  width: 13px;
  background-size: 13px 13px;
  color : #F2F2F2;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='close_icon' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 212.982 212.982' style='enable-background:new 0 0 212.982 212.982;' xml:space='preserve'%3E%3Cg class='close'%3E%3Cpath style='fill-rule:evenodd;clip-rule:evenodd;' d='M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
  }
  
`;
