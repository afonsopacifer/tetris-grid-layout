const appendPart = (part, parent) => {
  parent.appendChild(part.left);
  parent.appendChild(part.top);
  parent.appendChild(part.bottom);
  parent.appendChild(part.right);
}

export default appendPart;
