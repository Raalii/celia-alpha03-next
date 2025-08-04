export function lineGradient(ctx: CanvasRenderingContext2D, area: any) {
  const grad = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  grad.addColorStop(0, "rgba(151,193,255,0)"); // transparent
  grad.addColorStop(1, "rgba(151,193,255,0.35)"); // 35 % opacity
  return grad;
}
