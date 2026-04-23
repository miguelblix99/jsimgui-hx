// @ts-nocheck
import { Mod, ReferenceStruct } from "./core.js";
import { ImVec2 } from "./imgui.js";
export class ImNodesContext extends ReferenceStruct {
}
export class ImNodesEditorContext extends ReferenceStruct {
}
export class ImNodesIO extends ReferenceStruct {
    get AltMouseButton() {
        return this.ptr.get_AltMouseButton();
    }
    set AltMouseButton(v) {
        this.ptr.set_AltMouseButton(v);
    }
    get AutoPanningSpeed() {
        return this.ptr.get_AutoPanningSpeed();
    }
    set AutoPanningSpeed(v) {
        this.ptr.set_AutoPanningSpeed(v);
    }
}
export class ImNodesStyle extends ReferenceStruct {
    get GridSpacing() {
        return this.ptr.get_GridSpacing();
    }
    set GridSpacing(v) {
        this.ptr.set_GridSpacing(v);
    }
    get NodeCornerRounding() {
        return this.ptr.get_NodeCornerRounding();
    }
    set NodeCornerRounding(v) {
        this.ptr.set_NodeCornerRounding(v);
    }
    get NodePadding() {
        return ImVec2.From(this.ptr.get_NodePadding());
    }
    set NodePadding(v) {
        this.ptr.set_NodePadding(v);
    }
    get NodeBorderThickness() {
        return this.ptr.get_NodeBorderThickness();
    }
    set NodeBorderThickness(v) {
        this.ptr.set_NodeBorderThickness(v);
    }
    get LinkThickness() {
        return this.ptr.get_LinkThickness();
    }
    set LinkThickness(v) {
        this.ptr.set_LinkThickness(v);
    }
    get LinkLineSegmentsPerLength() {
        return this.ptr.get_LinkLineSegmentsPerLength();
    }
    set LinkLineSegmentsPerLength(v) {
        this.ptr.set_LinkLineSegmentsPerLength(v);
    }
    get LinkHoverDistance() {
        return this.ptr.get_LinkHoverDistance();
    }
    set LinkHoverDistance(v) {
        this.ptr.set_LinkHoverDistance(v);
    }
    get PinCircleRadius() {
        return this.ptr.get_PinCircleRadius();
    }
    set PinCircleRadius(v) {
        this.ptr.set_PinCircleRadius(v);
    }
    get PinQuadSideLength() {
        return this.ptr.get_PinQuadSideLength();
    }
    set PinQuadSideLength(v) {
        this.ptr.set_PinQuadSideLength(v);
    }
    get PinTriangleSideLength() {
        return this.ptr.get_PinTriangleSideLength();
    }
    set PinTriangleSideLength(v) {
        this.ptr.set_PinTriangleSideLength(v);
    }
    get PinLineThickness() {
        return this.ptr.get_PinLineThickness();
    }
    set PinLineThickness(v) {
        this.ptr.set_PinLineThickness(v);
    }
    get PinHoverRadius() {
        return this.ptr.get_PinHoverRadius();
    }
    set PinHoverRadius(v) {
        this.ptr.set_PinHoverRadius(v);
    }
    get PinOffset() {
        return this.ptr.get_PinOffset();
    }
    set PinOffset(v) {
        this.ptr.set_PinOffset(v);
    }
    get MiniMapPadding() {
        return ImVec2.From(this.ptr.get_MiniMapPadding());
    }
    set MiniMapPadding(v) {
        this.ptr.set_MiniMapPadding(v);
    }
    get MiniMapOffset() {
        return ImVec2.From(this.ptr.get_MiniMapOffset());
    }
    set MiniMapOffset(v) {
        this.ptr.set_MiniMapOffset(v);
    }
    get Flags() {
        return this.ptr.get_Flags();
    }
    set Flags(v) {
        this.ptr.set_Flags(v);
    }
    get Colors() {
        return this.ptr.get_Colors();
    }
    set Colors(v) {
        this.ptr.set_Colors(v);
    }
}
export const ImNodes = {
    Col: {
        NodeBackground: 0,
        NodeBackgroundHovered: 1,
        NodeBackgroundSelected: 2,
        NodeOutline: 3,
        TitleBar: 4,
        TitleBarHovered: 5,
        TitleBarSelected: 6,
        Link: 7,
        LinkHovered: 8,
        LinkSelected: 9,
        Pin: 10,
        PinHovered: 11,
        BoxSelector: 12,
        BoxSelectorOutline: 13,
        GridBackground: 14,
        GridLine: 15,
        GridLinePrimary: 16,
        MiniMapBackground: 17,
        MiniMapBackgroundHovered: 18,
        MiniMapOutline: 19,
        MiniMapOutlineHovered: 20,
        MiniMapNodeBackground: 21,
        MiniMapNodeBackgroundHovered: 22,
        MiniMapNodeBackgroundSelected: 23,
        MiniMapNodeOutline: 24,
        MiniMapLink: 25,
        MiniMapLinkSelected: 26,
        MiniMapCanvas: 27,
        MiniMapCanvasOutline: 28,
        COUNT: 29,
    },
    StyleVar: {
        GridSpacing: 0,
        NodeCornerRounding: 1,
        NodePadding: 2,
        NodeBorderThickness: 3,
        LinkThickness: 4,
        LinkLineSegmentsPerLength: 5,
        LinkHoverDistance: 6,
        PinCircleRadius: 7,
        PinQuadSideLength: 8,
        PinTriangleSideLength: 9,
        PinLineThickness: 10,
        PinHoverRadius: 11,
        PinOffset: 12,
        MiniMapPadding: 13,
        MiniMapOffset: 14,
        COUNT: 15,
    },
    StyleFlags: {
        None: 0,
        NodeOutline: 1 << 0,
        GridLines: 1 << 2,
        GridLinesPrimary: 1 << 3,
        GridSnapping: 1 << 4,
    },
    PinShape: {
        Circle: 0,
        CircleFilled: 1,
        Triangle: 2,
        TriangleFilled: 3,
        Quad: 4,
        QuadFilled: 5,
    },
    AttributeFlags: {
        None: 0,
        EnableLinkDetachWithDragClick: 1 << 0,
        EnableLinkCreationOnSnap: 1 << 1,
    },
    MiniMapLocation: {
        BottomLeft: 0,
        BottomRight: 1,
        TopLeft: 2,
        TopRight: 3,
    },
    CreateContext() {
        return ImNodesContext.From(Mod.export.ImNodes_CreateContext());
    },
    DestroyContext(ctx = null) {
        Mod.export.ImNodes_DestroyContext(ctx?.ptr ?? null);
    },
    GetCurrentContext() {
        return ImNodesContext.From(Mod.export.ImNodes_GetCurrentContext());
    },
    SetCurrentContext(ctx) {
        Mod.export.ImNodes_SetCurrentContext(ctx);
    },
    EditorContextCreate() {
        return ImNodesEditorContext.From(Mod.export.ImNodes_EditorContextCreate());
    },
    EditorContextFree(ctx) {
        Mod.export.ImNodes_EditorContextFree(ctx);
    },
    EditorContextSet(ctx) {
        Mod.export.ImNodes_EditorContextSet(ctx);
    },
    EditorContextGetPanning() {
        return ImVec2.From(Mod.export.ImNodes_EditorContextGetPanning());
    },
    EditorContextResetPanning(pos) {
        Mod.export.ImNodes_EditorContextResetPanning(pos);
    },
    EditorContextMoveToNode(node_id) {
        Mod.export.ImNodes_EditorContextMoveToNode(node_id);
    },
    GetIO() {
        return ImNodesIO.From(Mod.export.ImNodes_GetIO());
    },
    GetStyle() {
        return ImNodesStyle.From(Mod.export.ImNodes_GetStyle());
    },
    StyleColorsDark(dest = null) {
        Mod.export.ImNodes_StyleColorsDark(dest?.ptr ?? null);
    },
    StyleColorsClassic(dest = null) {
        Mod.export.ImNodes_StyleColorsClassic(dest?.ptr ?? null);
    },
    StyleColorsLight(dest = null) {
        Mod.export.ImNodes_StyleColorsLight(dest?.ptr ?? null);
    },
    BeginNodeEditor() {
        Mod.export.ImNodes_BeginNodeEditor();
    },
    EndNodeEditor() {
        Mod.export.ImNodes_EndNodeEditor();
    },
    MiniMap(minimap_size_fraction = 0.2, location = 2) {
        Mod.export.ImNodes_MiniMap(minimap_size_fraction, location);
    },
    PushColorStyle(item, color) {
        Mod.export.ImNodes_PushColorStyle(item, color);
    },
    PopColorStyle() {
        Mod.export.ImNodes_PopColorStyle();
    },
    PushStyleVar(style_item, value) {
        Mod.export.ImNodes_PushStyleVar(style_item, value);
    },
    PushStyleVarImVec2(style_item, value) {
        Mod.export.ImNodes_PushStyleVarImVec2(style_item, value);
    },
    PopStyleVar(count = 1) {
        Mod.export.ImNodes_PopStyleVar(count);
    },
    BeginNode(id) {
        Mod.export.ImNodes_BeginNode(id);
    },
    EndNode() {
        Mod.export.ImNodes_EndNode();
    },
    GetNodeDimensions(id) {
        return ImVec2.From(Mod.export.ImNodes_GetNodeDimensions(id));
    },
    BeginNodeTitleBar() {
        Mod.export.ImNodes_BeginNodeTitleBar();
    },
    EndNodeTitleBar() {
        Mod.export.ImNodes_EndNodeTitleBar();
    },
    BeginInputAttribute(id, shape = 1) {
        Mod.export.ImNodes_BeginInputAttribute(id, shape);
    },
    EndInputAttribute() {
        Mod.export.ImNodes_EndInputAttribute();
    },
    BeginOutputAttribute(id, shape = 1) {
        Mod.export.ImNodes_BeginOutputAttribute(id, shape);
    },
    EndOutputAttribute() {
        Mod.export.ImNodes_EndOutputAttribute();
    },
    BeginStaticAttribute(id) {
        Mod.export.ImNodes_BeginStaticAttribute(id);
    },
    EndStaticAttribute() {
        Mod.export.ImNodes_EndStaticAttribute();
    },
    PushAttributeFlag(flag) {
        Mod.export.ImNodes_PushAttributeFlag(flag);
    },
    PopAttributeFlag() {
        Mod.export.ImNodes_PopAttributeFlag();
    },
    Link(id, start_attribute_id, end_attribute_id) {
        Mod.export.ImNodes_Link(id, start_attribute_id, end_attribute_id);
    },
    SetNodeDraggable(node_id, draggable) {
        Mod.export.ImNodes_SetNodeDraggable(node_id, draggable);
    },
    SetNodeScreenSpacePos(node_id, screen_space_pos) {
        Mod.export.ImNodes_SetNodeScreenSpacePos(node_id, screen_space_pos);
    },
    SetNodeEditorSpacePos(node_id, editor_space_pos) {
        Mod.export.ImNodes_SetNodeEditorSpacePos(node_id, editor_space_pos);
    },
    SetNodeGridSpacePos(node_id, grid_space_pos) {
        Mod.export.ImNodes_SetNodeGridSpacePos(node_id, grid_space_pos);
    },
    GetNodeScreenSpacePos(node_id) {
        return ImVec2.From(Mod.export.ImNodes_GetNodeScreenSpacePos(node_id));
    },
    GetNodeEditorSpacePos(node_id) {
        return ImVec2.From(Mod.export.ImNodes_GetNodeEditorSpacePos(node_id));
    },
    GetNodeGridSpacePos(node_id) {
        return ImVec2.From(Mod.export.ImNodes_GetNodeGridSpacePos(node_id));
    },
    SnapNodeToGrid(node_id) {
        Mod.export.ImNodes_SnapNodeToGrid(node_id);
    },
    IsEditorHovered() {
        return Mod.export.ImNodes_IsEditorHovered();
    },
    IsNodeHovered(node_id) {
        return Mod.export.ImNodes_IsNodeHovered(node_id);
    },
    IsLinkHovered(link_id) {
        return Mod.export.ImNodes_IsLinkHovered(link_id);
    },
    IsPinHovered(attribute_id) {
        return Mod.export.ImNodes_IsPinHovered(attribute_id);
    },
    NumSelectedNodes() {
        return Mod.export.ImNodes_NumSelectedNodes();
    },
    NumSelectedLinks() {
        return Mod.export.ImNodes_NumSelectedLinks();
    },
    GetSelectedNodes(node_ids) {
        Mod.export.ImNodes_GetSelectedNodes(node_ids);
    },
    GetSelectedLinks(link_ids) {
        Mod.export.ImNodes_GetSelectedLinks(link_ids);
    },
    ClearNodeSelection() {
        Mod.export.ImNodes_ClearNodeSelection();
    },
    ClearLinkSelection() {
        Mod.export.ImNodes_ClearLinkSelection();
    },
    SelectNode(node_id) {
        Mod.export.ImNodes_SelectNode(node_id);
    },
    ClearNodeSelectionID(node_id) {
        Mod.export.ImNodes_ClearNodeSelectionID(node_id);
    },
    IsNodeSelected(node_id) {
        return Mod.export.ImNodes_IsNodeSelected(node_id);
    },
    SelectLink(link_id) {
        Mod.export.ImNodes_SelectLink(link_id);
    },
    ClearLinkSelectionID(link_id) {
        Mod.export.ImNodes_ClearLinkSelectionID(link_id);
    },
    IsLinkSelected(link_id) {
        return Mod.export.ImNodes_IsLinkSelected(link_id);
    },
    IsAttributeActive() {
        return Mod.export.ImNodes_IsAttributeActive();
    },
    IsAnyAttributeActive(attribute_id = null) {
        return Mod.export.ImNodes_IsAnyAttributeActive(attribute_id);
    },
    IsLinkStarted(started_at_attribute_id) {
        return Mod.export.ImNodes_IsLinkStarted(started_at_attribute_id);
    },
    IsLinkDropped(started_at_attribute_id = null, including_detached_links = true) {
        return Mod.export.ImNodes_IsLinkDropped(started_at_attribute_id, including_detached_links);
    },
    IsLinkCreated(started_at_attribute_id = null, ended_at_attribute_id = null, created_from_snap = null) {
        return Mod.export.ImNodes_IsLinkCreated(started_at_attribute_id, ended_at_attribute_id, created_from_snap);
    },
    IsLinkCreatedEx(started_at_node_id = null, started_at_attribute_id = null, ended_at_node_id = null, ended_at_attribute_id = null, created_from_snap = null) {
        return Mod.export.ImNodes_IsLinkCreatedEx(started_at_node_id, started_at_attribute_id, ended_at_node_id, ended_at_attribute_id, created_from_snap);
    },
    IsLinkDestroyed(link_id) {
        return Mod.export.ImNodes_IsLinkDestroyed(link_id);
    },
    SaveCurrentEditorStateToIniString() {
        return Mod.export.ImNodes_SaveCurrentEditorStateToIniString();
    },
    SaveEditorStateToIniString(editor) {
        return Mod.export.ImNodes_SaveEditorStateToIniString(editor?.ptr ?? null);
    },
    LoadCurrentEditorStateFromIniString(data) {
        Mod.export.ImNodes_LoadCurrentEditorStateFromIniString(data);
    },
    LoadEditorStateFromIniString(editor, data) {
        Mod.export.ImNodes_LoadEditorStateFromIniString(editor?.ptr ?? null, data);
    },
};
