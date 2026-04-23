import { type ImTextureRef } from "../imgui.js";
/**
 * Object containing some state information for jsimgui. Users most likely don't need to worry
 * about this.
 */
export declare const State: {
    canvas: HTMLCanvasElement | null;
    device: GPUDevice | null;
    backend: "webgl" | "webgl2" | "webgpu" | null;
    beginRenderFn: (() => void) | null;
    endRenderFn: ((passEncoder?: GPURenderPassEncoder) => void) | null;
    clipboardData: string;
    saveIniSettingsFn: ((iniData: string) => void) | null;
    loadIniSettingsFn: (() => string) | null;
};
/**
 * Options for loading a texture.
 */
export interface TextureOptions {
    /**
     * The texture reference to update. Only required if you want to update an existing texture.
     */
    ref?: ImTextureRef;
    /**
     * The width of the texture. This needs to be specified if the texture is loaded
     * from a `Uint8Array`.
     */
    width?: number;
    /**
     * The height of the texture. This needs to be specified if the texture is loaded
     * from a `Uint8Array`.
     */
    height?: number;
    /**
     * Custom load function to use for loading the texture/image. You can use this if you require
     * additional processing. Note that you will need to write backend-specific code for this.
     *
     * @param data The image data to load.
     * @param options The options for loading the texture.
     * @returns The ImTextureID of the loaded image.
     */
    processFn?: (data?: HTMLImageElement | Uint8Array, options?: TextureOptions) => WebGLTexture | [GPUTexture, GPUTextureView];
}
/**
 * Object containing memory information of the WASM heap, mallinfo and stack.
 */
interface MemoryInfo {
    heap: {
        size: number;
        max: number;
        sbrk_ptr: number;
    };
    mall: {
        arena: number;
        ordblks: number;
        smblks: number;
        hblks: number;
        hblkhd: number;
        usmblks: number;
        fsmblks: number;
        uordblks: number;
        fordblks: number;
        keepcost: number;
    };
    stack: {
        base: number;
        end: number;
        current: number;
        free: number;
    };
}
/**
 * Initialization options for jsimgui used in {@linkcode ImGuiImplWeb.Init}.
 */
export interface InitOptions {
    /**
     * The canvas element to render Dear ImGui on.
     */
    canvas: HTMLCanvasElement;
    /**
     * The WebGPU device used for rendering. This is only required when using the WebGPU backend.
     */
    device?: GPUDevice;
    /**
     * Specify the rendering backend to use. If not specified, will be inferred from the canvas or
     * from {@linkcode device}.
     */
    backend?: "webgl" | "webgl2" | "webgpu";
    /**
     * The font loader and rasterizer to use for loading fonts. Can be one of the following:
     *
     * - `truetype` (stb_truetype) is the default option.
     * - `freetype` (FreeType) is an alternative option which supports more features than `truetype`
     * but this also loads an increased WASM file (+500kb).
     *
     * Default is `truetype`.
     */
    fontLoader?: "truetype" | "freetype";
    /**
     * Whether to enable Dear ImGui extensions (imnodes, implot, ...).
     */
    extensions?: boolean;
    /**
     * Custom path to the emscripten loader script. If not provided, will be constructed
     * automatically. If you use jsimgui via a package manager or CDN, you will most likely not
     * need to worry about this.
     */
    loaderPath?: string;
}
/**
 * Object providing easy to use functions for initializing jsimgui as well as other things like
 * loading images and fonts (TODO).
 */
export declare const ImGuiImplWeb: {
    /**
     * Returns the exports and runtime methods of the emscripten module.
     *
     * @returns The emscripten exports object.
     */
    GetEmscriptenExports(): any;
    /**
     * Returns memory information of the WASM heap, mallinfo and stack.
     *
     * @returns Object containing the memory information.
     */
    GetMemoryInfo(): MemoryInfo;
    /**
     * Set the callback for saving the Dear ImGui ini settings. The ini settings will be passed as
     * string to the callback.
     *
     * @param fn The function to save the ImGui ini settings.
     */
    SetSaveIniSettingsFn(fn: (iniData: string) => void): void;
    /**
     * Set the callback for loading the Dear ImGui ini settings. The callback should return a string
     * of the ini settings. This callback will be called in the {@linkcode ImGuiImplWeb.Init}
     * function.
     *
     * @param fn The function to load the ImGui ini settings.
     */
    SetLoadIniSettingsFn(fn: () => string): void;
    /**
     * Load a texture/image for the current backend.
     *
     * @param data The image or image data to load.
     * @param options The options for loading the texture.
     * @returns The ImTextureRef of the loaded texture.
     */
    LoadTexture(data?: HTMLImageElement | Uint8Array, options?: TextureOptions): ImTextureRef;
    /**
     * Load a font file to the filesystem for the current backend. Add it then using
     * `ImGui.GetIO().Fonts.AddFontFromFileTTF(filename);`
     * @param filename The filename of the font to load.
     * @param fontData The font data to load.
     */
    LoadFont(filename: string, fontData: Uint8Array): void;
    /**
     * Begins a new ImGui frame. Call this at the beginning of your render loop.
     */
    BeginRender(): void;
    /**
     * Ends the current ImGui frame. Call this at the end of your render loop. The `passEncoder`
     * is only required when using the WebGPU backend.
     *
     * @param passEncoder The WebGPU render pass encoder to use.
     */
    EndRender(passEncoder?: GPURenderPassEncoder): void;
    /**
     * Initialize Dear ImGui with the specified configuration. This is asynchronous because it
     * waits for the WASM file to be loaded.
     *
     * @param options The initialization options: {@linkcode InitOptions}.
     */
    Init(options: InitOptions): Promise<void>;
};
export {};
