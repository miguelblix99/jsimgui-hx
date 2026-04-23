import { type ImDrawData, ImTextureRef } from "../imgui.js";
import type { TextureOptions } from "./web.js";
export declare const ImGuiImplOpenGL3: {
    Init(): boolean;
    Shutdown(): void;
    NewFrame(): void;
    RenderDrawData(draw_data: ImDrawData): void;
};
export declare function loadTextureWebGL(glContext: WebGLRenderingContext | WebGL2RenderingContext, data?: HTMLImageElement | Uint8Array, options?: TextureOptions): ImTextureRef;
