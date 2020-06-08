// tslint:disable: no-bitwise

/**
 * 获取图片主色调
 * @param imgEl HTMLImageElement
 */
export const getImageThemeColor = (imgEl: HTMLImageElement) => {
  // tslint:disable-next-line: one-variable-per-declaration
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

  // tslint:disable-next-line: one-variable-per-declaration
  let data: ImageData,
    length: number,
    i = 16,
    count = 0;
  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }

  length = data.data.length;
  while (i < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];

    i += blockSize * 4;
  }

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
};

const rgbToHex = (rgb: any) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

/**
 * rgb to hex 转换
 * @param rgb rgb 对象
 */
export const fullColorHex = (rgb: { r: any; g: any; b: any }) => {
  const { r, g, b } = rgb;
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return '#' + red + green + blue;
};

/**
 * hex to rgb 转换
 * @param hex hex color 字符串
 */
export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * 复制文本
 * @param id DOM ID
 */
export const copyText = (id: string) => {
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

/**
 * 计算颜色深浅
 * @param color 支持 rgb 对象和 hex 字符串
 */
export const calcColorType = (color): number => {
  const rgb = color.r && color.g && color.b ? color : hexToRgb(color);
  const { r, g, b } = rgb;

  if (r * 0.299 + g * 0.578 + b * 0.114 >= 192) {
    // 浅色
    return 0;
  } else {
    // 深色
    return 1;
  }
};
