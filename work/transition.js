// 箭头上下移动（拯救j博士页面用到）
@-webkit-keyframes start {
  0%,
  30% {
    opacity: 0;
    -webkit-transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -8px);
  }
}
@-moz-keyframes start {
  0%,
  30% {
    opacity: 0;
    -moz-transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    -moz-transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    -moz-transform: translate(0, -8px);
  }
}
@keyframes start {
  0%,
  30% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  60% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, -8px);
  }
}
.movedowntoup{
  animation:start 1.5s infinite ease-in-out;
  -webkit-animation:start 1.5s infinite ease-in-out;
  -moz-animation:start 1.5s infinite ease-in-out;
}
