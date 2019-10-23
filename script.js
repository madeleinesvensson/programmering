label.switch > input[type="checkbox"]:checked ~ span:before {
  transform: scale(0);
  opacity: .7;
}
 
label.switch > input[type="checkbox"]:checked ~ span:after {
  transform: translate3d(100%, -50%, 0);
}
