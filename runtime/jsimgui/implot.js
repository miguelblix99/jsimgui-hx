import { Mod, ValueStruct } from './core.js';
import { ImVec2, ImVec4 } from './imgui.js';
export class ImPlotDateTimeSpec extends ValueStruct {
    Date;
    Time;
    UseISO8601;
    Use24HourClock;
    constructor(Date = 0, Time = 0, UseISO8601 = false, Use24HourClock = false) {
        super();
        this.Date = Date;
        this.Time = Time;
        this.UseISO8601 = UseISO8601;
        this.Use24HourClock = Use24HourClock;
    }
    static From(obj) {
        return new ImPlotDateTimeSpec(obj.Date, obj.Time, obj.UseISO8601, obj.Use24HourClock);
    }
}
export class ImPlotPoint extends ValueStruct {
    x;
    y;
    constructor(x = 0, y = 0) {
        super();
        this.x = x;
        this.y = y;
    }
    static From(obj) {
        return new ImPlotPoint(obj.x, obj.y);
    }
}
export class ImPlotRange extends ValueStruct {
    Min;
    Max;
    constructor(Min = 0, Max = 0) {
        super();
        this.Min = Min;
        this.Max = Max;
    }
    static From(obj) {
        return new ImPlotRange(obj.Min, obj.Max);
    }
}
export class ImPlotRect extends ValueStruct {
    X;
    Y;
    constructor(X = new ImPlotRange(), Y = new ImPlotRange()) {
        super();
        this.X = X;
        this.Y = Y;
    }
    static From(obj) {
        return new ImPlotRect(ImPlotRange.From(obj.X), ImPlotRange.From(obj.Y));
    }
}
export class ImPlotTime extends ValueStruct {
    S;
    Us;
    constructor(S = 0, Us = 0) {
        super();
        this.S = S;
        this.Us = Us;
    }
    static From(obj) {
        return new ImPlotTime(obj.S, obj.Us);
    }
}
export const ImPlot = {
    Auto: -1,
    Axis: {
        X1: 0,
        X2: 1,
        X3: 2,
        Y1: 3,
        Y2: 4,
        Y3: 5,
        COUNT: 6,
    },
    AxisFlags: {
        None: 0,
        NoLabel: 1,
        NoGridLines: 2,
        NoTickMarks: 4,
        NoTickLabels: 8,
        NoInitialFit: 16,
        NoMenus: 32,
        NoSideSwitch: 64,
        NoHighlight: 128,
        Opposite: 256,
        Foreground: 512,
        Invert: 1024,
        AutoFit: 2048,
        RangeFit: 4096,
        PanStretch: 8192,
        LockMin: 16384,
        LockMax: 32768,
        Lock: 49152,
        NoDecorations: 15,
        AuxDefault: 258,
    },
    BarGroupsFlags: {
        None: 0,
        Horizontal: 1024,
        Stacked: 2048,
    },
    BarsFlags: {
        None: 0,
        Horizontal: 1024,
    },
    Bin: {
        Sqrt: -1,
        Sturges: -2,
        Rice: -3,
        Scott: -4,
    },
    BubblesFlags: {
        None: 0,
    },
    Col: {
        FrameBg: 0,
        PlotBg: 1,
        PlotBorder: 2,
        LegendBg: 3,
        LegendBorder: 4,
        LegendText: 5,
        TitleText: 6,
        InlayText: 7,
        AxisText: 8,
        AxisGrid: 9,
        AxisTick: 10,
        AxisBg: 11,
        AxisBgHovered: 12,
        AxisBgActive: 13,
        Selection: 14,
        Crosshairs: 15,
        COUNT: 16,
    },
    ColormapScaleFlags: {
        None: 0,
        NoLabel: 1,
        Opposite: 2,
        Invert: 4,
    },
    Colormap: {
        Deep: 0,
        Dark: 1,
        Pastel: 2,
        Paired: 3,
        Viridis: 4,
        Plasma: 5,
        Hot: 6,
        Cool: 7,
        Pink: 8,
        Jet: 9,
        Twilight: 10,
        RdBu: 11,
        BrBG: 12,
        PiYG: 13,
        Spectral: 14,
        Greys: 15,
    },
    Cond: {
        None: 0,
        Always: 1,
        Once: 2,
    },
    DateFmt: {
        None: 0,
        DayMo: 1,
        DayMoYr: 2,
        MoYr: 3,
        Mo: 4,
        Yr: 5,
    },
    DigitalFlags: {
        None: 0,
    },
    DragToolFlags: {
        None: 0,
        NoCursors: 1,
        NoFit: 2,
        NoInputs: 4,
        Delayed: 8,
    },
    DummyFlags: {
        None: 0,
    },
    ErrorBarsFlags: {
        None: 0,
        Horizontal: 1024,
    },
    Flags: {
        None: 0,
        NoTitle: 1,
        NoLegend: 2,
        NoMouseText: 4,
        NoInputs: 8,
        NoMenus: 16,
        NoBoxSelect: 32,
        NoFrame: 64,
        Equal: 128,
        Crosshairs: 256,
        CanvasOnly: 55,
    },
    HeatmapFlags: {
        None: 0,
        ColMajor: 1024,
    },
    HistogramFlags: {
        None: 0,
        Horizontal: 1024,
        Cumulative: 2048,
        Density: 4096,
        NoOutliers: 8192,
        ColMajor: 16384,
    },
    ImageFlags: {
        None: 0,
    },
    InfLinesFlags: {
        None: 0,
        Horizontal: 1024,
    },
    ItemFlags: {
        None: 0,
        NoLegend: 1,
        NoFit: 2,
    },
    LegendFlags: {
        None: 0,
        NoButtons: 1,
        NoHighlightItem: 2,
        NoHighlightAxis: 4,
        NoMenus: 8,
        Outside: 16,
        Horizontal: 32,
        Sort: 64,
        Reverse: 128,
    },
    LineFlags: {
        None: 0,
        Segments: 1024,
        Loop: 2048,
        SkipNaN: 4096,
        NoClip: 8192,
        Shaded: 16384,
    },
    Location: {
        Center: 0,
        North: 1,
        South: 2,
        West: 4,
        East: 8,
        NorthWest: 5,
        NorthEast: 9,
        SouthWest: 6,
        SouthEast: 10,
    },
    MarkerInternal: {
        Marker_Invalid: -3,
    },
    Marker: {
        None: -2,
        Auto: -1,
        Circle: 0,
        Square: 1,
        Diamond: 2,
        Up: 3,
        Down: 4,
        Left: 5,
        Right: 6,
        Cross: 7,
        Plus: 8,
        Asterisk: 9,
        COUNT: 10,
    },
    MouseTextFlags: {
        None: 0,
        NoAuxAxes: 1,
        NoFormat: 2,
        ShowAlways: 4,
    },
    PieChartFlags: {
        None: 0,
        Normalize: 1024,
        IgnoreHidden: 2048,
        Exploding: 4096,
        NoSliceBorder: 8192,
    },
    PolygonFlags: {
        None: 0,
        Concave: 1024,
    },
    Prop: {
        LineColor: 0,
        LineColors: 1,
        LineWeight: 2,
        FillColor: 3,
        FillColors: 4,
        FillAlpha: 5,
        Marker: 6,
        MarkerSize: 7,
        MarkerSizes: 8,
        MarkerLineColor: 9,
        MarkerLineColors: 10,
        MarkerFillColor: 11,
        MarkerFillColors: 12,
        Size: 13,
        Offset: 14,
        Stride: 15,
        Flags: 16,
    },
    Scale: {
        Linear: 0,
        Time: 1,
        Log10: 2,
        SymLog: 3,
    },
    ScatterFlags: {
        None: 0,
        NoClip: 1024,
    },
    ShadedFlags: {
        None: 0,
    },
    StairsFlags: {
        None: 0,
        PreStep: 1024,
        Shaded: 2048,
    },
    StemsFlags: {
        None: 0,
        Horizontal: 1024,
    },
    StyleVar: {
        PlotDefaultSize: 0,
        PlotMinSize: 1,
        PlotBorderSize: 2,
        MinorAlpha: 3,
        MajorTickLen: 4,
        MinorTickLen: 5,
        MajorTickSize: 6,
        MinorTickSize: 7,
        MajorGridSize: 8,
        MinorGridSize: 9,
        PlotPadding: 10,
        LabelPadding: 11,
        LegendPadding: 12,
        LegendInnerPadding: 13,
        LegendSpacing: 14,
        MousePosPadding: 15,
        AnnotationPadding: 16,
        FitPadding: 17,
        DigitalPadding: 18,
        DigitalSpacing: 19,
        COUNT: 20,
    },
    SubplotFlags: {
        None: 0,
        NoTitle: 1,
        NoLegend: 2,
        NoMenus: 4,
        NoResize: 8,
        NoAlign: 16,
        ShareItems: 32,
        LinkRows: 64,
        LinkCols: 128,
        LinkAllX: 256,
        LinkAllY: 512,
        ColMajor: 1024,
    },
    TextFlags: {
        None: 0,
        Vertical: 1024,
    },
    TimeFmt: {
        None: 0,
        Us: 1,
        SUs: 2,
        SMs: 3,
        S: 4,
        MinSMs: 5,
        HrMinSMs: 6,
        HrMinS: 7,
        HrMin: 8,
        Hr: 9,
    },
    TimeUnit: {
        Us: 0,
        Ms: 1,
        S: 2,
        Min: 3,
        Hr: 4,
        Day: 5,
        Mo: 6,
        Yr: 7,
        COUNT: 8,
    },
    AddColormap_U32Ptr(name, cols, size, qual = true) {
        return Mod.export.ImPlot_AddColormap_U32Ptr(name, cols, size, qual);
    },
    AddColormap_Vec4Ptr(name, cols, size, qual = true) {
        return Mod.export.ImPlot_AddColormap_Vec4Ptr(name, cols, size, qual);
    },
    Annotation_Bool(x, y, col, pix_offset, clamp, round = false) {
        Mod.export.ImPlot_Annotation_Bool(x, y, col, pix_offset, clamp, round);
    },
    BeginAlignedPlots(group_id, vertical = true) {
        return Mod.export.ImPlot_BeginAlignedPlots(group_id, vertical);
    },
    BeginDragDropSourceAxis(axis, flags = 0) {
        return Mod.export.ImPlot_BeginDragDropSourceAxis(axis, flags);
    },
    BeginDragDropSourceItem(label_id, flags = 0) {
        return Mod.export.ImPlot_BeginDragDropSourceItem(label_id, flags);
    },
    BeginDragDropSourcePlot(flags = 0) {
        return Mod.export.ImPlot_BeginDragDropSourcePlot(flags);
    },
    BeginDragDropTargetAxis(axis) {
        return Mod.export.ImPlot_BeginDragDropTargetAxis(axis);
    },
    BeginDragDropTargetLegend() {
        return Mod.export.ImPlot_BeginDragDropTargetLegend();
    },
    BeginDragDropTargetPlot() {
        return Mod.export.ImPlot_BeginDragDropTargetPlot();
    },
    BeginLegendPopup(label_id, mouse_button = 1) {
        return Mod.export.ImPlot_BeginLegendPopup(label_id, mouse_button);
    },
    BeginPlot(title_id, size = new ImVec2(-1, 0), flags = 0) {
        return Mod.export.ImPlot_BeginPlot(title_id, size, flags);
    },
    BeginSubplots(title_id, rows, cols, size, flags = 0, row_ratios = null, col_ratios = null) {
        return Mod.export.ImPlot_BeginSubplots(title_id, rows, cols, size, flags, row_ratios, col_ratios);
    },
    BustColorCache(plot_title_id = "") {
        Mod.export.ImPlot_BustColorCache(plot_title_id);
    },
    CancelPlotSelection() {
        Mod.export.ImPlot_CancelPlotSelection();
    },
    ColormapButton(label, size = new ImVec2(0, 0), cmap = -1) {
        return Mod.export.ImPlot_ColormapButton(label, size, cmap);
    },
    ColormapIcon(cmap) {
        Mod.export.ImPlot_ColormapIcon(cmap);
    },
    ColormapScale(label, scale_min, scale_max, size = new ImVec2(0, 0), format = "%g", flags = 0, cmap = -1) {
        Mod.export.ImPlot_ColormapScale(label, scale_min, scale_max, size, format, flags, cmap);
    },
    ColormapSlider(label, t, out = null, format = "", cmap = -1) {
        return Mod.export.ImPlot_ColormapSlider(label, t, out, format, cmap);
    },
    CreateContext() {
        return Mod.export.ImPlot_CreateContext();
    },
    DestroyContext(ctx = 0) {
        Mod.export.ImPlot_DestroyContext(ctx);
    },
    EndAlignedPlots() {
        Mod.export.ImPlot_EndAlignedPlots();
    },
    EndDragDropSource() {
        Mod.export.ImPlot_EndDragDropSource();
    },
    EndDragDropTarget() {
        Mod.export.ImPlot_EndDragDropTarget();
    },
    EndLegendPopup() {
        Mod.export.ImPlot_EndLegendPopup();
    },
    EndPlot() {
        Mod.export.ImPlot_EndPlot();
    },
    EndSubplots() {
        Mod.export.ImPlot_EndSubplots();
    },
    GetColormapColor(idx, cmap = -1) {
        return ImVec4.From(Mod.export.ImPlot_GetColormapColor(idx, cmap));
    },
    GetColormapCount() {
        return Mod.export.ImPlot_GetColormapCount();
    },
    GetColormapIndex(name) {
        return Mod.export.ImPlot_GetColormapIndex(name);
    },
    GetColormapSize(cmap = -1) {
        return Mod.export.ImPlot_GetColormapSize(cmap);
    },
    GetCurrentContext() {
        return Mod.export.ImPlot_GetCurrentContext();
    },
    GetInputMap() {
        return Mod.export.ImPlot_GetInputMap();
    },
    GetLastItemColor() {
        return ImVec4.From(Mod.export.ImPlot_GetLastItemColor());
    },
    GetPlotLimits(x_axis = -1, y_axis = -1) {
        return ImPlotRect.From(Mod.export.ImPlot_GetPlotLimits(x_axis, y_axis));
    },
    GetPlotMousePos(x_axis = -1, y_axis = -1) {
        return ImPlotPoint.From(Mod.export.ImPlot_GetPlotMousePos(x_axis, y_axis));
    },
    GetPlotPos() {
        return ImVec2.From(Mod.export.ImPlot_GetPlotPos());
    },
    GetPlotSelection(x_axis = -1, y_axis = -1) {
        return ImPlotRect.From(Mod.export.ImPlot_GetPlotSelection(x_axis, y_axis));
    },
    GetPlotSize() {
        return ImVec2.From(Mod.export.ImPlot_GetPlotSize());
    },
    GetStyle() {
        return Mod.export.ImPlot_GetStyle();
    },
    HideNextItem(hidden = true, cond = 2) {
        Mod.export.ImPlot_HideNextItem(hidden, cond);
    },
    IsAxisHovered(axis) {
        return Mod.export.ImPlot_IsAxisHovered(axis);
    },
    IsLegendEntryHovered(label_id) {
        return Mod.export.ImPlot_IsLegendEntryHovered(label_id);
    },
    IsPlotHovered() {
        return Mod.export.ImPlot_IsPlotHovered();
    },
    IsPlotSelected() {
        return Mod.export.ImPlot_IsPlotSelected();
    },
    IsSubplotsHovered() {
        return Mod.export.ImPlot_IsSubplotsHovered();
    },
    ItemIcon_U32(col) {
        Mod.export.ImPlot_ItemIcon_U32(col);
    },
    ItemIcon_Vec4(col) {
        Mod.export.ImPlot_ItemIcon_Vec4(col);
    },
    MapInputDefault(dst = 0) {
        Mod.export.ImPlot_MapInputDefault(dst);
    },
    MapInputReverse(dst = 0) {
        Mod.export.ImPlot_MapInputReverse(dst);
    },
    NextColormapColor() {
        return ImVec4.From(Mod.export.ImPlot_NextColormapColor());
    },
    NextMarker() {
        return Mod.export.ImPlot_NextMarker();
    },
    PixelsToPlot_Float(x, y, x_axis = -1, y_axis = -1) {
        return ImPlotPoint.From(Mod.export.ImPlot_PixelsToPlot_Float(x, y, x_axis, y_axis));
    },
    PixelsToPlot_Vec2(pix, x_axis = -1, y_axis = -1) {
        return ImPlotPoint.From(Mod.export.ImPlot_PixelsToPlot_Vec2(pix, x_axis, y_axis));
    },
    PlotBarGroups_doublePtr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_doublePtr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_FloatPtr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_FloatPtr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_S16Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_S16Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_S32Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_S32Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_S64Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_S64Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_S8Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_S8Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_U16Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_U16Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_U32Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_U32Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_U64Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_U64Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBarGroups_U8Ptr(label_ids, values, item_count, group_count, group_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBarGroups_U8Ptr(label_ids, values, item_count, group_count, group_size, shift, spec);
    },
    PlotBars_doublePtrdoublePtr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_doublePtrdoublePtr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_doublePtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_doublePtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_FloatPtrFloatPtr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_FloatPtrFloatPtr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_FloatPtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_FloatPtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_S16PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_S16PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_S16PtrS16Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_S16PtrS16Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_S32PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_S32PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_S32PtrS32Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_S32PtrS32Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_S64PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_S64PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_S64PtrS64Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_S64PtrS64Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_S8PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_S8PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_S8PtrS8Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_S8PtrS8Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_U16PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_U16PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_U16PtrU16Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_U16PtrU16Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_U32PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_U32PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_U32PtrU32Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_U32PtrU32Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_U64PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_U64PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_U64PtrU64Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_U64PtrU64Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBars_U8PtrInt(label_id, values, count, bar_size = 0.67, shift = 0, spec = null) {
        Mod.export.ImPlot_PlotBars_U8PtrInt(label_id, values, count, bar_size, shift, spec);
    },
    PlotBars_U8PtrU8Ptr(label_id, xs, ys, count, bar_size, spec = null) {
        Mod.export.ImPlot_PlotBars_U8PtrU8Ptr(label_id, xs, ys, count, bar_size, spec);
    },
    PlotBubbles_doublePtrdoublePtrdoublePtr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_doublePtrdoublePtrdoublePtr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_doublePtrdoublePtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_doublePtrdoublePtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_FloatPtrFloatPtrFloatPtr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_FloatPtrFloatPtrFloatPtr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_FloatPtrFloatPtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_FloatPtrFloatPtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_S16PtrS16PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S16PtrS16PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_S16PtrS16PtrS16Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S16PtrS16PtrS16Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_S32PtrS32PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S32PtrS32PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_S32PtrS32PtrS32Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S32PtrS32PtrS32Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_S64PtrS64PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S64PtrS64PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_S64PtrS64PtrS64Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S64PtrS64PtrS64Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_S8PtrS8PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S8PtrS8PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_S8PtrS8PtrS8Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_S8PtrS8PtrS8Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_U16PtrU16PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U16PtrU16PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_U16PtrU16PtrU16Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U16PtrU16PtrU16Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_U32PtrU32PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U32PtrU32PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_U32PtrU32PtrU32Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U32PtrU32PtrU32Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_U64PtrU64PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U64PtrU64PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_U64PtrU64PtrU64Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U64PtrU64PtrU64Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotBubbles_U8PtrU8PtrInt(label_id, values, szs, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U8PtrU8PtrInt(label_id, values, szs, count, xscale, xstart, spec);
    },
    PlotBubbles_U8PtrU8PtrU8Ptr(label_id, xs, ys, szs, count, spec = null) {
        Mod.export.ImPlot_PlotBubbles_U8PtrU8PtrU8Ptr(label_id, xs, ys, szs, count, spec);
    },
    PlotDigital_doublePtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_doublePtr(label_id, xs, ys, count, spec);
    },
    PlotDigital_FloatPtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_FloatPtr(label_id, xs, ys, count, spec);
    },
    PlotDigital_S16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_S16Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_S32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_S32Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_S64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_S64Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_S8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_S8Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_U16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_U16Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_U32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_U32Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_U64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_U64Ptr(label_id, xs, ys, count, spec);
    },
    PlotDigital_U8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotDigital_U8Ptr(label_id, xs, ys, count, spec);
    },
    PlotDummy(label_id, spec = null) {
        Mod.export.ImPlot_PlotDummy(label_id, spec);
    },
    PlotErrorBars_doublePtrdoublePtrdoublePtrdoublePtr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_doublePtrdoublePtrdoublePtrdoublePtr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_doublePtrdoublePtrdoublePtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_doublePtrdoublePtrdoublePtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_FloatPtrFloatPtrFloatPtrFloatPtr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_FloatPtrFloatPtrFloatPtrFloatPtr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_FloatPtrFloatPtrFloatPtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_FloatPtrFloatPtrFloatPtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_S16PtrS16PtrS16PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S16PtrS16PtrS16PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_S16PtrS16PtrS16PtrS16Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S16PtrS16PtrS16PtrS16Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_S32PtrS32PtrS32PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S32PtrS32PtrS32PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_S32PtrS32PtrS32PtrS32Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S32PtrS32PtrS32PtrS32Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_S64PtrS64PtrS64PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S64PtrS64PtrS64PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_S64PtrS64PtrS64PtrS64Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S64PtrS64PtrS64PtrS64Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_S8PtrS8PtrS8PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S8PtrS8PtrS8PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_S8PtrS8PtrS8PtrS8Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_S8PtrS8PtrS8PtrS8Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_U16PtrU16PtrU16PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U16PtrU16PtrU16PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_U16PtrU16PtrU16PtrU16Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U16PtrU16PtrU16PtrU16Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_U32PtrU32PtrU32PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U32PtrU32PtrU32PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_U32PtrU32PtrU32PtrU32Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U32PtrU32PtrU32PtrU32Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_U64PtrU64PtrU64PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U64PtrU64PtrU64PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_U64PtrU64PtrU64PtrU64Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U64PtrU64PtrU64PtrU64Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotErrorBars_U8PtrU8PtrU8PtrInt(label_id, xs, ys, err, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U8PtrU8PtrU8PtrInt(label_id, xs, ys, err, count, spec);
    },
    PlotErrorBars_U8PtrU8PtrU8PtrU8Ptr(label_id, xs, ys, neg, pos, count, spec = null) {
        Mod.export.ImPlot_PlotErrorBars_U8PtrU8PtrU8PtrU8Ptr(label_id, xs, ys, neg, pos, count, spec);
    },
    PlotHeatmap_doublePtr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_doublePtr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_FloatPtr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_FloatPtr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_S16Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_S16Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_S32Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_S32Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_S64Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_S64Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_S8Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_S8Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_U16Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_U16Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_U32Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_U32Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_U64Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_U64Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHeatmap_U8Ptr(label_id, values, rows, cols, scale_min = 0, scale_max = 0, label_fmt = "%.1f", bounds_min = new ImPlotPoint(0, 0), bounds_max = new ImPlotPoint(1, 1), spec = null) {
        Mod.export.ImPlot_PlotHeatmap_U8Ptr(label_id, values, rows, cols, scale_min, scale_max, label_fmt, bounds_min, bounds_max, spec);
    },
    PlotHistogram_doublePtr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_doublePtr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_FloatPtr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_FloatPtr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_S16Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_S16Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_S32Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_S32Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_S64Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_S64Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_S8Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_S8Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_U16Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_U16Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_U32Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_U32Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_U64Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_U64Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram_U8Ptr(label_id, values, count, bins = -2, bar_scale = 1.0, range = new ImPlotRange(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram_U8Ptr(label_id, values, count, bins, bar_scale, range, spec);
    },
    PlotHistogram2D_doublePtr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_doublePtr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_FloatPtr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_FloatPtr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_S16Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_S16Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_S32Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_S32Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_S64Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_S64Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_S8Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_S8Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_U16Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_U16Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_U32Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_U32Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_U64Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_U64Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotHistogram2D_U8Ptr(label_id, xs, ys, count, x_bins = -2, y_bins = -2, range = new ImPlotRect(), spec = null) {
        return Mod.export.ImPlot_PlotHistogram2D_U8Ptr(label_id, xs, ys, count, x_bins, y_bins, range, spec);
    },
    PlotInfLines_doublePtr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_doublePtr(label_id, values, count, spec);
    },
    PlotInfLines_FloatPtr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_FloatPtr(label_id, values, count, spec);
    },
    PlotInfLines_S16Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_S16Ptr(label_id, values, count, spec);
    },
    PlotInfLines_S32Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_S32Ptr(label_id, values, count, spec);
    },
    PlotInfLines_S64Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_S64Ptr(label_id, values, count, spec);
    },
    PlotInfLines_S8Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_S8Ptr(label_id, values, count, spec);
    },
    PlotInfLines_U16Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_U16Ptr(label_id, values, count, spec);
    },
    PlotInfLines_U32Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_U32Ptr(label_id, values, count, spec);
    },
    PlotInfLines_U64Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_U64Ptr(label_id, values, count, spec);
    },
    PlotInfLines_U8Ptr(label_id, values, count, spec = null) {
        Mod.export.ImPlot_PlotInfLines_U8Ptr(label_id, values, count, spec);
    },
    PlotLine_doublePtrdoublePtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_doublePtrdoublePtr(label_id, xs, ys, count, spec);
    },
    PlotLine_doublePtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_doublePtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_FloatPtrFloatPtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_FloatPtrFloatPtr(label_id, xs, ys, count, spec);
    },
    PlotLine_FloatPtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_FloatPtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_S16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_S16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_S16PtrS16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_S16PtrS16Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_S32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_S32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_S32PtrS32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_S32PtrS32Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_S64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_S64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_S64PtrS64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_S64PtrS64Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_S8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_S8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_S8PtrS8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_S8PtrS8Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_U16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_U16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_U16PtrU16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_U16PtrU16Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_U32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_U32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_U32PtrU32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_U32PtrU32Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_U64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_U64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_U64PtrU64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_U64PtrU64Ptr(label_id, xs, ys, count, spec);
    },
    PlotLine_U8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotLine_U8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotLine_U8PtrU8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotLine_U8PtrU8Ptr(label_id, xs, ys, count, spec);
    },
    PlotPieChart_doublePtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_doublePtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_FloatPtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_FloatPtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_S16PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_S16PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_S32PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_S32PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_S64PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_S64PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_S8PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_S8PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_U16PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_U16PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_U32PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_U32PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_U64PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_U64PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPieChart_U8PtrStr(label_ids, values, count, x, y, radius, label_fmt = "%.1f", angle0 = 90, spec = null) {
        Mod.export.ImPlot_PlotPieChart_U8PtrStr(label_ids, values, count, x, y, radius, label_fmt, angle0, spec);
    },
    PlotPolygon_doublePtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_doublePtr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_FloatPtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_FloatPtr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_S16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_S16Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_S32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_S32Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_S64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_S64Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_S8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_S8Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_U16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_U16Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_U32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_U32Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_U64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_U64Ptr(label_id, xs, ys, count, spec);
    },
    PlotPolygon_U8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotPolygon_U8Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_doublePtrdoublePtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_doublePtrdoublePtr(label_id, xs, ys, count, spec);
    },
    PlotScatter_doublePtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_doublePtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_FloatPtrFloatPtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_FloatPtrFloatPtr(label_id, xs, ys, count, spec);
    },
    PlotScatter_FloatPtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_FloatPtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_S16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_S16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_S16PtrS16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_S16PtrS16Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_S32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_S32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_S32PtrS32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_S32PtrS32Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_S64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_S64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_S64PtrS64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_S64PtrS64Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_S8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_S8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_S8PtrS8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_S8PtrS8Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_U16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_U16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_U16PtrU16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_U16PtrU16Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_U32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_U32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_U32PtrU32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_U32PtrU32Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_U64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_U64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_U64PtrU64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_U64PtrU64Ptr(label_id, xs, ys, count, spec);
    },
    PlotScatter_U8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotScatter_U8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotScatter_U8PtrU8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotScatter_U8PtrU8Ptr(label_id, xs, ys, count, spec);
    },
    PlotShaded_doublePtrdoublePtrdoublePtr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_doublePtrdoublePtrdoublePtr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_doublePtrdoublePtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_doublePtrdoublePtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_doublePtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_doublePtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_FloatPtrFloatPtrFloatPtr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_FloatPtrFloatPtrFloatPtr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_FloatPtrFloatPtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_FloatPtrFloatPtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_FloatPtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_FloatPtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_S16PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S16PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_S16PtrS16PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S16PtrS16PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_S16PtrS16PtrS16Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_S16PtrS16PtrS16Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_S32PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S32PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_S32PtrS32PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S32PtrS32PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_S32PtrS32PtrS32Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_S32PtrS32PtrS32Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_S64PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S64PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_S64PtrS64PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S64PtrS64PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_S64PtrS64PtrS64Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_S64PtrS64PtrS64Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_S8PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S8PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_S8PtrS8PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_S8PtrS8PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_S8PtrS8PtrS8Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_S8PtrS8PtrS8Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_U16PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U16PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_U16PtrU16PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U16PtrU16PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_U16PtrU16PtrU16Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_U16PtrU16PtrU16Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_U32PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U32PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_U32PtrU32PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U32PtrU32PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_U32PtrU32PtrU32Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_U32PtrU32PtrU32Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_U64PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U64PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_U64PtrU64PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U64PtrU64PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_U64PtrU64PtrU64Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_U64PtrU64PtrU64Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotShaded_U8PtrInt(label_id, values, count, yref = 0, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U8PtrInt(label_id, values, count, yref, xscale, xstart, spec);
    },
    PlotShaded_U8PtrU8PtrInt(label_id, xs, ys, count, yref = 0, spec = null) {
        Mod.export.ImPlot_PlotShaded_U8PtrU8PtrInt(label_id, xs, ys, count, yref, spec);
    },
    PlotShaded_U8PtrU8PtrU8Ptr(label_id, xs, ys1, ys2, count, spec = null) {
        Mod.export.ImPlot_PlotShaded_U8PtrU8PtrU8Ptr(label_id, xs, ys1, ys2, count, spec);
    },
    PlotStairs_doublePtrdoublePtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_doublePtrdoublePtr(label_id, xs, ys, count, spec);
    },
    PlotStairs_doublePtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_doublePtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_FloatPtrFloatPtr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_FloatPtrFloatPtr(label_id, xs, ys, count, spec);
    },
    PlotStairs_FloatPtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_FloatPtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_S16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_S16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_S16PtrS16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_S16PtrS16Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_S32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_S32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_S32PtrS32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_S32PtrS32Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_S64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_S64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_S64PtrS64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_S64PtrS64Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_S8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_S8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_S8PtrS8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_S8PtrS8Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_U16PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_U16PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_U16PtrU16Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_U16PtrU16Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_U32PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_U32PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_U32PtrU32Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_U32PtrU32Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_U64PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_U64PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_U64PtrU64Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_U64PtrU64Ptr(label_id, xs, ys, count, spec);
    },
    PlotStairs_U8PtrInt(label_id, values, count, xscale = 1, xstart = 0, spec = null) {
        Mod.export.ImPlot_PlotStairs_U8PtrInt(label_id, values, count, xscale, xstart, spec);
    },
    PlotStairs_U8PtrU8Ptr(label_id, xs, ys, count, spec = null) {
        Mod.export.ImPlot_PlotStairs_U8PtrU8Ptr(label_id, xs, ys, count, spec);
    },
    PlotStems_doublePtrdoublePtr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_doublePtrdoublePtr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_doublePtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_doublePtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_FloatPtrFloatPtr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_FloatPtrFloatPtr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_FloatPtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_FloatPtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_S16PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S16PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_S16PtrS16Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S16PtrS16Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_S32PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S32PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_S32PtrS32Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S32PtrS32Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_S64PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S64PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_S64PtrS64Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S64PtrS64Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_S8PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S8PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_S8PtrS8Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_S8PtrS8Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_U16PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U16PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_U16PtrU16Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U16PtrU16Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_U32PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U32PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_U32PtrU32Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U32PtrU32Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_U64PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U64PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_U64PtrU64Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U64PtrU64Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotStems_U8PtrInt(label_id, values, count, ref = 0, scale = 1, start = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U8PtrInt(label_id, values, count, ref, scale, start, spec);
    },
    PlotStems_U8PtrU8Ptr(label_id, xs, ys, count, ref = 0, spec = null) {
        Mod.export.ImPlot_PlotStems_U8PtrU8Ptr(label_id, xs, ys, count, ref, spec);
    },
    PlotText(text, x, y, pix_offset = new ImVec2(0, 0), spec = null) {
        Mod.export.ImPlot_PlotText(text, x, y, pix_offset, spec);
    },
    PlotToPixels_double(x, y, x_axis = -1, y_axis = -1) {
        return ImVec2.From(Mod.export.ImPlot_PlotToPixels_double(x, y, x_axis, y_axis));
    },
    PlotToPixels_PlotPoint(plt, x_axis = -1, y_axis = -1) {
        return ImVec2.From(Mod.export.ImPlot_PlotToPixels_PlotPoint(plt, x_axis, y_axis));
    },
    PopColormap(count = 1) {
        Mod.export.ImPlot_PopColormap(count);
    },
    PopPlotClipRect() {
        Mod.export.ImPlot_PopPlotClipRect();
    },
    PopStyleColor(count = 1) {
        Mod.export.ImPlot_PopStyleColor(count);
    },
    PopStyleVar(count = 1) {
        Mod.export.ImPlot_PopStyleVar(count);
    },
    PushColormap_PlotColormap(cmap) {
        Mod.export.ImPlot_PushColormap_PlotColormap(cmap);
    },
    PushColormap_Str(name) {
        Mod.export.ImPlot_PushColormap_Str(name);
    },
    PushPlotClipRect(expand = 0) {
        Mod.export.ImPlot_PushPlotClipRect(expand);
    },
    PushStyleColor_U32(idx, col) {
        Mod.export.ImPlot_PushStyleColor_U32(idx, col);
    },
    PushStyleColor_Vec4(idx, col) {
        Mod.export.ImPlot_PushStyleColor_Vec4(idx, col);
    },
    PushStyleVar_Float(idx, val) {
        Mod.export.ImPlot_PushStyleVar_Float(idx, val);
    },
    PushStyleVar_Int(idx, val) {
        Mod.export.ImPlot_PushStyleVar_Int(idx, val);
    },
    PushStyleVar_Vec2(idx, val) {
        Mod.export.ImPlot_PushStyleVar_Vec2(idx, val);
    },
    SampleColormap(t, cmap = -1) {
        return ImVec4.From(Mod.export.ImPlot_SampleColormap(t, cmap));
    },
    SetAxes(x_axis, y_axis) {
        Mod.export.ImPlot_SetAxes(x_axis, y_axis);
    },
    SetAxis(axis) {
        Mod.export.ImPlot_SetAxis(axis);
    },
    SetCurrentContext(ctx) {
        Mod.export.ImPlot_SetCurrentContext(ctx);
    },
    SetImGuiContext(ctx) {
        Mod.export.ImPlot_SetImGuiContext(ctx);
    },
    SetNextAxesLimits(x_min, x_max, y_min, y_max, cond = 2) {
        Mod.export.ImPlot_SetNextAxesLimits(x_min, x_max, y_min, y_max, cond);
    },
    SetNextAxesToFit() {
        Mod.export.ImPlot_SetNextAxesToFit();
    },
    SetNextAxisLimits(axis, v_min, v_max, cond = 2) {
        Mod.export.ImPlot_SetNextAxisLimits(axis, v_min, v_max, cond);
    },
    SetNextAxisLinks(axis, link_min, link_max) {
        Mod.export.ImPlot_SetNextAxisLinks(axis, link_min, link_max);
    },
    SetNextAxisToFit(axis) {
        Mod.export.ImPlot_SetNextAxisToFit(axis);
    },
    SetupAxes(x_label, y_label, x_flags = 0, y_flags = 0) {
        Mod.export.ImPlot_SetupAxes(x_label, y_label, x_flags, y_flags);
    },
    SetupAxesLimits(x_min, x_max, y_min, y_max, cond = 2) {
        Mod.export.ImPlot_SetupAxesLimits(x_min, x_max, y_min, y_max, cond);
    },
    SetupAxis(axis, label = "", flags = 0) {
        Mod.export.ImPlot_SetupAxis(axis, label, flags);
    },
    SetupAxisFormat_Str(axis, fmt) {
        Mod.export.ImPlot_SetupAxisFormat_Str(axis, fmt);
    },
    SetupAxisLimits(axis, v_min, v_max, cond = 2) {
        Mod.export.ImPlot_SetupAxisLimits(axis, v_min, v_max, cond);
    },
    SetupAxisLimitsConstraints(axis, v_min, v_max) {
        Mod.export.ImPlot_SetupAxisLimitsConstraints(axis, v_min, v_max);
    },
    SetupAxisLinks(axis, link_min, link_max) {
        Mod.export.ImPlot_SetupAxisLinks(axis, link_min, link_max);
    },
    SetupAxisScale_PlotScale(axis, scale) {
        Mod.export.ImPlot_SetupAxisScale_PlotScale(axis, scale);
    },
    SetupAxisTicks_double(axis, v_min, v_max, n_ticks, labels = null, keep_default = false) {
        Mod.export.ImPlot_SetupAxisTicks_double(axis, v_min, v_max, n_ticks, labels, keep_default);
    },
    SetupAxisTicks_doublePtr(axis, values, n_ticks, labels = null, keep_default = false) {
        Mod.export.ImPlot_SetupAxisTicks_doublePtr(axis, values, n_ticks, labels, keep_default);
    },
    SetupAxisZoomConstraints(axis, z_min, z_max) {
        Mod.export.ImPlot_SetupAxisZoomConstraints(axis, z_min, z_max);
    },
    SetupFinish() {
        Mod.export.ImPlot_SetupFinish();
    },
    SetupLegend(location, flags = 0) {
        Mod.export.ImPlot_SetupLegend(location, flags);
    },
    SetupMouseText(location, flags = 0) {
        Mod.export.ImPlot_SetupMouseText(location, flags);
    },
    ShowColormapSelector(label) {
        return Mod.export.ImPlot_ShowColormapSelector(label);
    },
    ShowInputMapSelector(label) {
        return Mod.export.ImPlot_ShowInputMapSelector(label);
    },
    ShowStyleEditor(ref = 0) {
        Mod.export.ImPlot_ShowStyleEditor(ref);
    },
    ShowStyleSelector(label) {
        return Mod.export.ImPlot_ShowStyleSelector(label);
    },
    ShowUserGuide() {
        Mod.export.ImPlot_ShowUserGuide();
    },
    StyleColorsAuto(dst = 0) {
        Mod.export.ImPlot_StyleColorsAuto(dst);
    },
    StyleColorsClassic(dst = 0) {
        Mod.export.ImPlot_StyleColorsClassic(dst);
    },
    StyleColorsDark(dst = 0) {
        Mod.export.ImPlot_StyleColorsDark(dst);
    },
    StyleColorsLight(dst = 0) {
        Mod.export.ImPlot_StyleColorsLight(dst);
    },
    TagX_Bool(x, col, round = false) {
        Mod.export.ImPlot_TagX_Bool(x, col, round);
    },
    TagY_Bool(y, col, round = false) {
        Mod.export.ImPlot_TagY_Bool(y, col, round);
    },
    InputMap_destroy(self) {
        Mod.export.ImPlotInputMap_destroy(self);
    },
    InputMap_ImPlotInputMap() {
        return Mod.export.ImPlotInputMap_ImPlotInputMap();
    },
    Point_destroy(self) {
        Mod.export.ImPlotPoint_destroy(self);
    },
    Point_ImPlotPoint_double(_x, _y) {
        return Mod.export.ImPlotPoint_ImPlotPoint_double(_x, _y);
    },
    Point_ImPlotPoint_Nil() {
        return Mod.export.ImPlotPoint_ImPlotPoint_Nil();
    },
    Point_ImPlotPoint_Vec2(p) {
        return Mod.export.ImPlotPoint_ImPlotPoint_Vec2(p);
    },
    Range_Clamp(self, value) {
        return Mod.export.ImPlotRange_Clamp(self, value);
    },
    Range_Contains(self, value) {
        return Mod.export.ImPlotRange_Contains(self, value);
    },
    Range_destroy(self) {
        Mod.export.ImPlotRange_destroy(self);
    },
    Range_ImPlotRange_double(_min, _max) {
        return Mod.export.ImPlotRange_ImPlotRange_double(_min, _max);
    },
    Range_ImPlotRange_Nil() {
        return Mod.export.ImPlotRange_ImPlotRange_Nil();
    },
    Range_Size(self) {
        return Mod.export.ImPlotRange_Size(self);
    },
    Rect_Clamp_double(self, x, y) {
        return ImPlotPoint.From(Mod.export.ImPlotRect_Clamp_double(self, x, y));
    },
    Rect_Clamp_PlotPoint(self, p) {
        return ImPlotPoint.From(Mod.export.ImPlotRect_Clamp_PlotPoint(self, p));
    },
    Rect_Contains_double(self, x, y) {
        return Mod.export.ImPlotRect_Contains_double(self, x, y);
    },
    Rect_Contains_PlotPoint(self, p) {
        return Mod.export.ImPlotRect_Contains_PlotPoint(self, p);
    },
    Rect_destroy(self) {
        Mod.export.ImPlotRect_destroy(self);
    },
    Rect_ImPlotRect_double(x_min, x_max, y_min, y_max) {
        return Mod.export.ImPlotRect_ImPlotRect_double(x_min, x_max, y_min, y_max);
    },
    Rect_ImPlotRect_Nil() {
        return Mod.export.ImPlotRect_ImPlotRect_Nil();
    },
    Rect_Max(self) {
        return ImPlotPoint.From(Mod.export.ImPlotRect_Max(self));
    },
    Rect_Min(self) {
        return ImPlotPoint.From(Mod.export.ImPlotRect_Min(self));
    },
    Rect_Size(self) {
        return ImPlotPoint.From(Mod.export.ImPlotRect_Size(self));
    },
    Spec_destroy(self) {
        Mod.export.ImPlotSpec_destroy(self);
    },
    Spec_ImPlotSpec() {
        return Mod.export.ImPlotSpec_ImPlotSpec();
    },
    Spec_SetProp_double(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_double(self, prop, v);
    },
    Spec_SetProp_Float(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_Float(self, prop, v);
    },
    Spec_SetProp_FloatPtr(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_FloatPtr(self, prop, v);
    },
    Spec_SetProp_S16(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_S16(self, prop, v);
    },
    Spec_SetProp_S32(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_S32(self, prop, v);
    },
    Spec_SetProp_S64(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_S64(self, prop, v);
    },
    Spec_SetProp_S8(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_S8(self, prop, v);
    },
    Spec_SetProp_U16(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_U16(self, prop, v);
    },
    Spec_SetProp_U32(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_U32(self, prop, v);
    },
    Spec_SetProp_U32Ptr(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_U32Ptr(self, prop, v);
    },
    Spec_SetProp_U64(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_U64(self, prop, v);
    },
    Spec_SetProp_U8(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_U8(self, prop, v);
    },
    Spec_SetProp_Vec4(self, prop, v) {
        Mod.export.ImPlotSpec_SetProp_Vec4(self, prop, v);
    },
    Style_destroy(self) {
        Mod.export.ImPlotStyle_destroy(self);
    },
    Style_ImPlotStyle() {
        return Mod.export.ImPlotStyle_ImPlotStyle();
    },
};
