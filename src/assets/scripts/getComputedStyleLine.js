const getComputedStyleLine = (square, lineName) => {
  return parseInt(window.getComputedStyle(square)[lineName])
}

export default getComputedStyleLine;
