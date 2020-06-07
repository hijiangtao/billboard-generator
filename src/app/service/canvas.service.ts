import { Injectable } from '@angular/core';
import { TextConfig } from 'src/app/data/canvas.interface';

@Injectable({
  providedIn: 'root',
})
export class CanvasService {
  constructor() {}

  /**
   * 清空画布
   * @param ctx
   * @param bgColor
   */
  clearCtx(ctx: CanvasRenderingContext2D, w: number, h: number, bgColor: string) {
    ctx.canvas.width = w;
    ctx.canvas.height = h;
    ctx.fillStyle = bgColor || '#FF4C00';
    ctx.beginPath();
    ctx.fillRect(0, 0, w, h);
    ctx.closePath();
  }

  /**
   * 获取图片的 Base64 编码
   * @param img
   */
  getBase64Image(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  /**
   * fillText 支持自动换行
   * @param context
   * @param text
   * @param x
   * @param y
   * @param maxWidth
   * @param lineHeight
   * @param wrapWithNewline
   */
  fillWrappedText(
    context: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    wrapWithNewline: boolean = true
  ) {
    const lines = wrapWithNewline ? text.split('\n') : [text];

    context.save();
    context.font = `normal 20px sans-serif`;
    lines.map((line) => {
      let linetext = '';
      const words = line.split('');

      for (let n = 0; n < words.length; n++) {
        let testLine = linetext + words[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          context.fillText(linetext, x, y);
          linetext = words[n];
          y += lineHeight;
        } else {
          linetext = testLine;
        }
      }

      if (linetext) {
        context.fillText(linetext, x, y);
      }
      y += lineHeight;
    });

    context.restore();
  }

  /**
   * 绘制文字
   * @param context
   * @param text
   * @param x
   * @param y
   * @param fontConfig
   */
  fillText(context: CanvasRenderingContext2D, text: string, x: number, y: number, fontConfig: TextConfig) {
    if (!text || x === undefined || y === undefined) {
      console.error(`Lack of necessary parameters.`);
    }

    context.fillStyle = fontConfig.color || '#fff';
    context.font = `bold ${fontConfig.size || 20}px sans-serif`;
    context.textAlign = fontConfig.textAlign || 'left';
    context.textBaseline = fontConfig.textBaseline || 'middle';
    context.fillText(text, x, y);
  }

  /**
   * 绘制图像（支持绘制完毕回调）
   * @param context
   * @param file
   * @param x
   * @param y
   * @param w
   * @param h
   * @param callback
   */
  drawImage(
    context: CanvasRenderingContext2D,
    file,
    x: number,
    y: number,
    w: number,
    h: number,
    callback?: () => void
  ) {
    let img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      context.drawImage(img, x, y, w, h);

      try {
        URL.revokeObjectURL(file);
      } catch (error) {}

      callback();
    };
    img.onerror = (err) => {
      console.error(err);
    };

    img.src = file;
  }
}
