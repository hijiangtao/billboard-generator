/**
 * 获取图片主色调
 * @param imgEl
 */
export const getImageThemeColor = (imgEl: HTMLImageElement) => {
  const blockSize = 5,
    defaultRGB = { r: 0, g: 0, b: 0 },
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    rgb = { r: 0, g: 0, b: 0 };

  if (!context) {
    return defaultRGB;
  }

  const height = (canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height);
  const width = (canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width);
  context.drawImage(imgEl, 0, 0);

  let data,
    length,
    i = -4,
    count = 0;
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }

  length = data.data.length;
  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
};

const rgbToHex = (rgb) => {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

/**
 * rgb to hex 转换
 * @param rgb
 */
export const fullColorHex = (rgb) => {
  const { r, g, b } = rgb;
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return '#' + red + green + blue;
};

/**
 * 复制文本
 * @param id
 */
export const copyText = (id) => {
  const rgb = document.getElementById(id).innerText;
  const oInput =
    (document.getElementById('copy-text-container') as HTMLInputElement) || document.createElement('input');
  oInput.id = 'copy-text-container';
  oInput.value = rgb;
  document.body.appendChild(oInput);

  oInput.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令

  oInput.style.display = 'none';
};
