(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("a478ebe7-da2b-4bba-9624-d97627cfbbe1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a478ebe7-da2b-4bba-9624-d97627cfbbe1' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"005d2b81-1d9e-4469-9937-263643d34c0b":{"roots":{"references":[{"attributes":{},"id":"ec0ea86f-9478-4492-a20e-736ce1172121","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"05a3a62b-580b-46f8-827c-d575459c77be","type":"Circle"},{"attributes":{},"id":"eaf2e3ba-3233-4fab-91d6-6b439ffbd4dd","type":"BasicTicker"},{"attributes":{"below":[{"id":"ac8ad32a-0495-4308-b6d2-39241f6ab189","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"25e00bf9-f593-4a51-93e3-76e18b41bb05","type":"LinearAxis"}],"plot_height":1024,"plot_width":1024,"renderers":[{"id":"3b7c5ec1-3a45-479a-9cf1-a97061868646","type":"BoxAnnotation"},{"id":"06a2e1d0-f7a4-40c4-9a84-7eca10026094","type":"GlyphRenderer"},{"id":"855d9da4-05fe-47a0-8d10-3a8f6200e32b","type":"Legend"},{"id":"ac8ad32a-0495-4308-b6d2-39241f6ab189","type":"LinearAxis"},{"id":"25e00bf9-f593-4a51-93e3-76e18b41bb05","type":"LinearAxis"},{"id":"b3c3a088-9ac4-4835-9b62-06a59752f204","type":"Grid"},{"id":"f6ed6bb0-09c1-49e8-958b-e30731314123","type":"Grid"}],"sizing_mode":"scale_width","title":{"id":"5c536a9b-7900-4d14-834c-0266d7a60e8a","type":"Title"},"tool_events":{"id":"ffd556b9-0f93-473f-8f4e-6f7b4900c687","type":"ToolEvents"},"toolbar":{"id":"2a543af7-a308-4ee9-91ab-ab5a07debbda","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"45f56ec1-8b2b-46da-98af-fa498e74b0c8","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f59b2a4f-2b20-4617-8bfd-18800bf076cb","type":"Range1d"}},"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"end":194.31490517739746,"start":-298.09782507747497},"id":"f59b2a4f-2b20-4617-8bfd-18800bf076cb","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3b7c5ec1-3a45-479a-9cf1-a97061868646","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"4203c24e-db08-4e1c-82da-400a5b1580a6","type":"LegendItem"}],"location":"top_left","plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"855d9da4-05fe-47a0-8d10-3a8f6200e32b","type":"Legend"},{"attributes":{"callback":null,"end":374.8057584887132,"start":-227.25985352594085},"id":"45f56ec1-8b2b-46da-98af-fa498e74b0c8","type":"Range1d"},{"attributes":{},"id":"6a422c18-2a48-45e8-8a90-115cc9cb97d6","type":"BasicTickFormatter"},{"attributes":{},"id":"ffd556b9-0f93-473f-8f4e-6f7b4900c687","type":"ToolEvents"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"eb50158d-5f65-4d26-a0a5-c3bfa11fab20","type":"ResetTool"},{"attributes":{"overlay":{"id":"3b7c5ec1-3a45-479a-9cf1-a97061868646","type":"BoxAnnotation"},"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"bf32c4d8-bb7c-470f-88e7-eecf48fe9cac","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"8d28d880-35ae-4bf8-8975-8941e3b9e8c7","type":"SaveTool"},{"attributes":{"axis_label":"2","formatter":{"id":"6a422c18-2a48-45e8-8a90-115cc9cb97d6","type":"BasicTickFormatter"},"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},"ticker":{"id":"eaf2e3ba-3233-4fab-91d6-6b439ffbd4dd","type":"BasicTicker"}},"id":"25e00bf9-f593-4a51-93e3-76e18b41bb05","type":"LinearAxis"},{"attributes":{"align":"center","plot":null,"text":"Manfred-Thyroid-GTEx-only"},"id":"5c536a9b-7900-4d14-834c-0266d7a60e8a","type":"Title"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},"ticker":{"id":"ec0ea86f-9478-4492-a20e-736ce1172121","type":"BasicTicker"}},"id":"b3c3a088-9ac4-4835-9b62-06a59752f204","type":"Grid"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"8fcce985-95a4-4fe2-bc03-da03ed810c0a","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e29ac849-54df-42c2-aa4b-5f8810b31ee6","type":"ColumnDataSource"},"glyph":{"id":"05a3a62b-580b-46f8-827c-d575459c77be","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"06a2e1d0-f7a4-40c4-9a84-7eca10026094","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"2738f580-f536-473f-aceb-5064fd02065e","type":"PanTool"},{"id":"8fcce985-95a4-4fe2-bc03-da03ed810c0a","type":"WheelZoomTool"},{"id":"bf32c4d8-bb7c-470f-88e7-eecf48fe9cac","type":"BoxZoomTool"},{"id":"8d28d880-35ae-4bf8-8975-8941e3b9e8c7","type":"SaveTool"},{"id":"eb50158d-5f65-4d26-a0a5-c3bfa11fab20","type":"ResetTool"},{"id":"87a4a59e-f3e0-4fde-aa35-67fe8cf2dfd1","type":"HelpTool"},{"id":"a09b5b26-8371-40a1-95fa-dba2a67c0a27","type":"HoverTool"}]},"id":"2a543af7-a308-4ee9-91ab-ab5a07debbda","type":"Toolbar"},{"attributes":{"label":{"value":"Thyroid"},"renderers":[{"id":"06a2e1d0-f7a4-40c4-9a84-7eca10026094","type":"GlyphRenderer"}]},"id":"4203c24e-db08-4e1c-82da-400a5b1580a6","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"},{"type":"Thyroid"}],"sample":["GTEX-11DXX-0226-SM-5P9HL","GTEX-ZLWG-0526-SM-4WWFB","GTEX-13OW8-0126-SM-5IJE5","GTEX-11EI6-0726-SM-59866","GTEX-ZA64-0426-SM-5HL96","GTEX-131XF-1826-SM-5EGKG","GTEX-OHPM-2626-SM-5SI7I","GTEX-V955-0426-SM-3GAEL","GTEX-YFC4-2626-SM-5P9FQ","GTEX-OHPK-2626-SM-2HMK9","GTEX-SIU8-0626-SM-2XCDN","GTEX-11GSP-0126-SM-5A5KU","GTEX-PWN1-2626-SM-2I3FH","GTEX-QV44-0826-SM-2S1RG","GTEX-ZVZP-1026-SM-5GICI","GTEX-11GSO-0626-SM-5A5LW","GTEX-144GM-0226-SM-5Q5CB","GTEX-WXYG-0226-SM-3NB2Y","GTEX-11O72-2326-SM-5BC7H","GTEX-12WSK-0926-SM-5CVNQ","GTEX-12696-0326-SM-5EGL4","GTEX-13O21-2226-SM-5MR3L","GTEX-Q2AH-0726-SM-2I3EA","GTEX-RWS6-0626-SM-2XCAS","GTEX-11DXY-0426-SM-5H12R","GTEX-SN8G-1526-SM-4DM79","GTEX-PWOO-0926-SM-2I3EC","GTEX-POYW-0826-SM-2XCEM","GTEX-OIZI-0726-SM-2XCEI","GTEX-YEC3-0826-SM-4WWFP","GTEX-Y3I4-0226-SM-4TT27","GTEX-ZZ64-0126-SM-5GZXA","GTEX-RU72-0126-SM-2TF6Z","GTEX-1497J-0126-SM-5Q5BK","GTEX-144GO-0126-SM-5LUAO","GTEX-TSE9-0626-SM-3DB8B","GTEX-WYVS-0326-SM-3NM9V","GTEX-WL46-0126-SM-3TW8I","GTEX-WK11-0926-SM-3NMAU","GTEX-WHPG-0226-SM-3NMB9","GTEX-ZDYS-0626-SM-5J2N5","GTEX-13N1W-0826-SM-5MR5J","GTEX-WFG7-0326-SM-5SI7L","GTEX-ZY6K-0226-SM-5SIAY","GTEX-13OVG-0226-SM-5LU93","GTEX-13CF3-0926-SM-5LZZC","GTEX-14753-0926-SM-5Q5BI","GTEX-ZGAY-1026-SM-4WWBR","GTEX-N7MS-2326-SM-2HMLD","GTEX-13JVG-0926-SM-5IJE1","GTEX-11GS4-0826-SM-5986J","GTEX-ZV7C-0126-SM-57WDE","GTEX-S7SE-0726-SM-2XCD7","GTEX-12WSJ-0326-SM-5GCMT","GTEX-S32W-0726-SM-2XCBL","GTEX-XGQ4-0426-SM-4AT4I","GTEX-TKQ1-0126-SM-33HB3","GTEX-132QS-0326-SM-5IJFN","GTEX-WH7G-0526-SM-3NMBI","GTEX-X4XY-0826-SM-4E3JM","GTEX-132NY-1026-SM-5P9IY","GTEX-12ZZZ-1226-SM-59HK1","GTEX-117YX-1226-SM-5H11S","GTEX-OXRO-1226-SM-48TDL","GTEX-P4PQ-2626-SM-5SI7K","GTEX-12584-0826-SM-5FQSK","GTEX-113JC-0126-SM-5EGJW","GTEX-XXEK-1326-SM-4BRV1","GTEX-11TUW-0226-SM-5LU8X","GTEX-13G51-1226-SM-5K7Z3","GTEX-145ME-0126-SM-5S2QM","GTEX-ZV6S-0226-SM-59HJT","GTEX-RTLS-0626-SM-5SI7Z","GTEX-13O1R-0826-SM-5J2MB","GTEX-WEY5-0526-SM-3GIKZ","GTEX-S341-0226-SM-5S2VG","GTEX-14A5H-0726-SM-5Q5DW","GTEX-11P7K-0226-SM-5986Z","GTEX-ZYT6-0426-SM-5GID3","GTEX-148VJ-0726-SM-5LU8J","GTEX-11ZTS-1126-SM-5LU9X","GTEX-146FQ-0726-SM-5LUA7","GTEX-13N2G-0726-SM-5MR38","GTEX-12WS9-0726-SM-5FQT7","GTEX-WHSE-0626-SM-4RGNF","GTEX-13QBU-0626-SM-5J2OG","GTEX-13OVI-0826-SM-5KLZ8","GTEX-12BJ1-0426-SM-5FQSO","GTEX-12WSD-0926-SM-5GCNL","GTEX-ZZPU-1326-SM-5GZWS","GTEX-145MH-0426-SM-5LU8T","GTEX-SJXC-0726-SM-2XCFJ","GTEX-ZPU1-0426-SM-4WWCA","GTEX-WOFL-0726-SM-3MJG4","GTEX-ZLFU-0626-SM-4WWBO","GTEX-XV7Q-0326-SM-4BRVM","GTEX-13PVQ-0726-SM-5L3GI","GTEX-OIZH-2626-SM-2HMJM","GTEX-12WSB-0726-SM-5N9GD","GTEX-QDVN-0626-SM-2I3FP","GTEX-S4Q7-0326-SM-3K2B1","GTEX-13O3Q-0626-SM-5IJG1","GTEX-W5X1-0426-SM-3GILB","GTEX-1313W-0726-SM-5EGK1","GTEX-11DZ1-2726-SM-5A5KH","GTEX-Y5V5-0326-SM-5RQJG","GTEX-OHPM-2626-SM-33HC5","GTEX-WYBS-1926-SM-3NM8N","GTEX-P4QT-2626-SM-2I3FM","GTEX-13OW5-0626-SM-5J2N2","GTEX-145LU-0426-SM-5O9AH","GTEX-X15G-0526-SM-3NMB7","GTEX-11XUK-0226-SM-5EQLW","GTEX-11LCK-0526-SM-5A5M9","GTEX-U8T8-2326-SM-3DB96","GTEX-13FHP-0926-SM-5L3EC","GTEX-13X6H-0526-SM-5LU4Q","GTEX-XLM4-0726-SM-4AT64","GTEX-Y111-1926-SM-4SOIS","GTEX-OHPL-2626-SM-2HMJA","GTEX-YJ89-0726-SM-5P9F7","GTEX-Y5LM-0626-SM-4V6G4","GTEX-ZT9W-0226-SM-4YCCZ","GTEX-13FTY-0726-SM-5J2OH","GTEX-ZPCL-0126-SM-4WWC8","GTEX-11EQ8-0826-SM-5N9FG","GTEX-1211K-0726-SM-5FQUW","GTEX-1128S-0126-SM-5H12S","GTEX-XBED-0126-SM-47JY7","GTEX-13FXS-0726-SM-5LZXJ","GTEX-13111-0226-SM-5EQ55","GTEX-11P81-0126-SM-5HL5Y","GTEX-SE5C-0726-SM-4BRWY","GTEX-WY7C-0226-SM-3NB37","GTEX-11EQ9-0626-SM-5A5K1","GTEX-WHSB-1626-SM-3LK6J","GTEX-ZAB5-0726-SM-5P9JG","GTEX-14C38-0826-SM-5S2U8","GTEX-R55E-0826-SM-2TC5M","GTEX-RNOR-0926-SM-2TF56","GTEX-RVPV-1226-SM-2TF73","GTEX-ZYW4-1126-SM-5SI99","GTEX-V1D1-0926-SM-4JBHQ","GTEX-X5EB-0726-SM-46MVR","GTEX-ZE7O-1126-SM-57WC8","GTEX-Y9LG-0426-SM-4VBRT","GTEX-WVLH-0626-SM-3MJG7","GTEX-OOBJ-2626-SM-2I3F6","GTEX-13O3O-0926-SM-5KM1F","GTEX-WI4N-0926-SM-3LK7K","GTEX-13VXT-0626-SM-5SIA1","GTEX-XUJ4-0726-SM-4BOOP","GTEX-QXCU-0326-SM-2TC63","GTEX-Y5V6-0526-SM-4VBRV","GTEX-13112-0326-SM-5P9IW","GTEX-R55C-0626-SM-2TF4Q","GTEX-X4LF-0426-SM-3NMB5","GTEX-1399R-0126-SM-5IFEV","GTEX-11NSD-0126-SM-5987F","GTEX-ZDTS-0926-SM-4WAXG","GTEX-11NUK-1026-SM-5HL5J","GTEX-13RTK-0326-SM-5RQHS","GTEX-13N11-1026-SM-5K7XQ","GTEX-R3RS-0726-SM-3GIJR","GTEX-SNOS-0226-SM-32PLR","GTEX-P4PQ-2626-SM-33HC9","GTEX-Q2AG-0826-SM-2HMKF","GTEX-Y3IK-0526-SM-4WWE3","GTEX-13YAN-0926-SM-5O9C3","GTEX-U4B1-0626-SM-3DB8L","GTEX-145MI-1126-SM-5O9AK","GTEX-13W46-0926-SM-5LU3T","GTEX-X8HC-0726-SM-46MWG","GTEX-12WSH-0226-SM-5GCOG","GTEX-X4XX-0926-SM-46MV7","GTEX-ZC5H-0626-SM-5LU9K","GTEX-11UD2-0626-SM-5GU6L","GTEX-11EM3-0126-SM-5985K","GTEX-11TT1-1126-SM-5P9GV","GTEX-Q2AI-0326-SM-2I3EK","GTEX-11EMC-0226-SM-5EGLP","GTEX-14ABY-0926-SM-5Q5DY","GTEX-PWCY-2326-SM-2I3EQ","GTEX-13OW6-0726-SM-5L3FX","GTEX-111FC-1026-SM-5GZX1","GTEX-11ZTT-1026-SM-5EQKF","GTEX-R55G-0726-SM-2TC6J","GTEX-XYKS-0826-SM-4BRVF","GTEX-12WSN-0726-SM-5GCMS","GTEX-ZAK1-0726-SM-5HL8Q","GTEX-131XE-0126-SM-5LZVC","GTEX-T6MO-0226-SM-32QOL","GTEX-ZVZQ-0626-SM-59HJU","GTEX-ZVP2-0426-SM-57WC2","GTEX-WWYW-0826-SM-3NB2X","GTEX-111CU-0226-SM-5GZXC","GTEX-Y114-0626-SM-4TT98","GTEX-11ZVC-0126-SM-5986G","GTEX-REY6-0526-SM-2TF5M","GTEX-1212Z-0426-SM-5FQT6","GTEX-111YS-0726-SM-5GZY8","GTEX-12WSL-0626-SM-5GCOY","GTEX-XUZC-0126-SM-4BOO6","GTEX-13S86-1126-SM-5RQJX","GTEX-OOBK-2626-SM-2HMKY","GTEX-11I78-0526-SM-5986A","GTEX-YEC4-0626-SM-5CVLU","GTEX-OXRP-0326-SM-5SI7J","GTEX-14E6C-2626-SM-5RQJP","GTEX-1192X-1126-SM-5EGGU","GTEX-WYJK-1626-SM-3NM9J","GTEX-OXRK-0626-SM-2HMJ5","GTEX-13X6J-0826-SM-5LU32","GTEX-13IVO-0926-SM-5KLZP","GTEX-131XG-0226-SM-5IFG1","GTEX-1122O-0226-SM-5N9DA","GTEX-117YW-0126-SM-5EGGN","GTEX-12WSG-0226-SM-5EGIF","GTEX-145MG-0826-SM-5Q5C2","GTEX-YF7O-0726-SM-4W213","GTEX-NFK9-0726-SM-2HMJW","GTEX-RM2N-0526-SM-2TF4N","GTEX-146FR-0326-SM-5SI8U","GTEX-OIZG-0226-SM-2TC5L","GTEX-W5WG-1426-SM-4KKZP","GTEX-117XS-0526-SM-5987Q","GTEX-139TS-0126-SM-5K7XJ","GTEX-XUW1-1026-SM-4BONY","GTEX-13NYC-2426-SM-5MR3K","GTEX-YB5E-0626-SM-4VDSE","GTEX-UJMC-0326-SM-3GAE2","GTEX-13NZ8-0226-SM-5J2OK","GTEX-13O3P-0726-SM-5J2OM","GTEX-ZLV1-0126-SM-4WWBZ","GTEX-111VG-0526-SM-5N9BW","GTEX-P4QS-2626-SM-2I3EV","GTEX-11TTK-0826-SM-5N9EG","GTEX-13FTW-0626-SM-5IFEX","GTEX-ZYFG-0626-SM-5GZYA","GTEX-OXRP-0326-SM-33HBJ","GTEX-13NZ9-1126-SM-5MR37","GTEX-13PL6-1026-SM-5L3E5","GTEX-12WSC-0826-SM-5EQ5Q","GTEX-11VI4-0226-SM-5GU6C","GTEX-RN64-0626-SM-2TC5V","GTEX-RU1J-0226-SM-2TF5Y","GTEX-Q734-0526-SM-2I3EH","GTEX-13NYB-0726-SM-5MR4J","GTEX-ZYFC-0926-SM-5GZWW","GTEX-XMK1-0626-SM-4B65A","GTEX-WFG7-0326-SM-3GILI","GTEX-144FL-2326-SM-5LUAC","GTEX-13OW7-0826-SM-5L3EL","GTEX-12ZZX-1226-SM-5EGHS","GTEX-14AS3-0226-SM-5Q5B6","GTEX-14BMU-0226-SM-5S2QA","GTEX-XBEW-0126-SM-4AT66","GTEX-133LE-0326-SM-5P9G4","GTEX-RTLS-0626-SM-2TF6G","GTEX-ZVT3-0726-SM-5GICN","GTEX-13D11-0226-SM-5LZXL","GTEX-13113-0126-SM-5LZVX","GTEX-ZXG5-0926-SM-5NQ8H","GTEX-YFCO-0326-SM-4W1ZP","GTEX-WFG8-0426-SM-3GILD","GTEX-ZT9X-0226-SM-51MT2","GTEX-SUCS-0226-SM-32PLQ","GTEX-ZYY3-1926-SM-5GZXS","GTEX-139UW-0126-SM-5KM1B","GTEX-SIU7-1126-SM-2XCDW","GTEX-Y8E4-0126-SM-4VBQ2","GTEX-VUSG-0426-SM-3GIKD","GTEX-132AR-1126-SM-5P9GA","GTEX-YEC3-0826-SM-5P9JF","GTEX-13VXU-0826-SM-5KLZ2","GTEX-UPIC-0226-SM-3GADO","GTEX-ZTPG-0826-SM-5DUVC","GTEX-14ICL-0426-SM-5RQJ3"],"tissue":["Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid"],"type":["Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid","Thyroid"],"x_values":{"__ndarray__":"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","dtype":"float64","shape":[278]},"y_values":{"__ndarray__":"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","dtype":"float64","shape":[278]}}},"id":"e29ac849-54df-42c2-aa4b-5f8810b31ee6","type":"ColumnDataSource"},{"attributes":{"axis_label":"1","formatter":{"id":"22883f93-ef18-423d-ad92-755c92ff8da8","type":"BasicTickFormatter"},"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},"ticker":{"id":"ec0ea86f-9478-4492-a20e-736ce1172121","type":"BasicTicker"}},"id":"ac8ad32a-0495-4308-b6d2-39241f6ab189","type":"LinearAxis"},{"attributes":{"callback":null,"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},"tooltips":[["Tissue","@tissue"],["Type","@type"],["Sample","@sample"]]},"id":"a09b5b26-8371-40a1-95fa-dba2a67c0a27","type":"HoverTool"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"87a4a59e-f3e0-4fde-aa35-67fe8cf2dfd1","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"},"ticker":{"id":"eaf2e3ba-3233-4fab-91d6-6b439ffbd4dd","type":"BasicTicker"}},"id":"f6ed6bb0-09c1-49e8-958b-e30731314123","type":"Grid"},{"attributes":{},"id":"22883f93-ef18-423d-ad92-755c92ff8da8","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76","subtype":"Chart","type":"Plot"}},"id":"2738f580-f536-473f-aceb-5064fd02065e","type":"PanTool"}],"root_ids":["854a7c7a-bc73-42e0-a6b7-f7fdc0407d76"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"005d2b81-1d9e-4469-9937-263643d34c0b","elementid":"a478ebe7-da2b-4bba-9624-d97627cfbbe1","modelid":"854a7c7a-bc73-42e0-a6b7-f7fdc0407d76"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
