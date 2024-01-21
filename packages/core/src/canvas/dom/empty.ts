import type { Editor } from "../../editor";
import type { Range } from "../../selection/modules/range";
import { GRAY_3 } from "../utils/palette";
import { Shape } from "../utils/shape";
import { Node } from "./node";

export class EmptyNode extends Node {
  constructor(private editor: Editor, range: Range) {
    super(range);
    this.setZ(-1);
    this.setIgnoreEvent(true);
  }

  public drawingMask = (ctx: CanvasRenderingContext2D) => {
    const { x, y, width, height } = this.range.rect();
    Shape.rect(ctx, {
      x: x,
      y: y,
      width: width,
      height: height,
      fillColor: GRAY_3,
    });
  };
}
