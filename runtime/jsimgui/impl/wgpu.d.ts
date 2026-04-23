import { type ImDrawData, ImTextureRef } from "../imgui.js";
import type { TextureOptions } from "./web.js";
export declare const ImGuiImplWGPU: {
    Init(device: GPUDevice): boolean;
    Shutdown(): void;
    NewFrame(): void;
    RenderDrawData(draw_data: ImDrawData, pass_encoder: GPURenderPassEncoder): void;
};
export declare function loadTextureWebGPU(device: GPUDevice, data?: HTMLImageElement | Uint8Array, options?: TextureOptions): ImTextureRef;
