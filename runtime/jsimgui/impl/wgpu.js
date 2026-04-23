import { Mod } from "../core.js";
import { ImTextureRef } from "../imgui.js";
export const ImGuiImplWGPU = {
    Init(device) {
        const handle = Mod.export.WebGPU.importJsDevice(device);
        return Mod.export.cImGui_ImplWGPU_Init(handle);
    },
    Shutdown() {
        Mod.export.cImGui_ImplWGPU_Shutdown();
    },
    NewFrame() {
        Mod.export.cImGui_ImplWGPU_NewFrame();
    },
    RenderDrawData(draw_data, pass_encoder) {
        const handle = Mod.export.WebGPU.importJsRenderPassEncoder(pass_encoder);
        Mod.export.cImGui_ImplWGPU_RenderDrawData(draw_data.ptr, handle);
    },
};
export function loadTextureWebGPU(device, data, options = {}) {
    const width = data instanceof HTMLImageElement ? data.width : (options.width ?? 1);
    const height = data instanceof HTMLImageElement ? data.height : (options.height ?? 1);
    const processTexture = () => {
        const texture = device.createTexture({
            usage: GPUTextureUsage.COPY_DST |
                GPUTextureUsage.TEXTURE_BINDING |
                GPUTextureUsage.RENDER_ATTACHMENT,
            dimension: "2d",
            size: { width, height, depthOrArrayLayers: 1 },
            format: "rgba8unorm",
            mipLevelCount: 1,
            sampleCount: 1,
        });
        if (!data) {
            const data = new Uint8Array([0, 0, 0, 0]);
            device.queue.writeTexture({ texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 }, aspect: "all" }, data, {}, { width, height, depthOrArrayLayers: 1 });
        }
        if (data instanceof HTMLImageElement) {
            device.queue.copyExternalImageToTexture({ source: data }, { texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 }, aspect: "all" }, { width: data.width, height: data.height, depthOrArrayLayers: 1 });
        }
        if (data instanceof Uint8Array) {
            device.queue.writeTexture({ texture, mipLevel: 0, origin: { x: 0, y: 0, z: 0 }, aspect: "all" }, data.buffer, {}, { width, height, depthOrArrayLayers: 1 });
        }
        const textureView = texture.createView({
            format: "rgba8unorm",
            dimension: "2d",
            baseMipLevel: 0,
            mipLevelCount: 1,
            baseArrayLayer: 0,
            arrayLayerCount: 1,
            aspect: "all",
        });
        return [texture, textureView];
    };
    const [texture, textureView] = options.processFn
        ? options.processFn(data, options)
        : processTexture();
    Mod.export.WebGPU.importJsTexture(texture);
    const id = Mod.export.WebGPU.importJsTextureView(textureView);
    if (options.ref) {
        options.ref._TexID = id;
        return options.ref;
    }
    return new ImTextureRef(id);
}
