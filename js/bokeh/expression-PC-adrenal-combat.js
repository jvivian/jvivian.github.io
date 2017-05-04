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
      };var element = document.getElementById("0c1392e6-24c3-4969-b9d7-cf4a0d33f912");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0c1392e6-24c3-4969-b9d7-cf4a0d33f912' but no matching script tag was found. ")
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
                var docs_json = {"62dcf153-6f81-446a-85d8-c52824cafd2d":{"roots":{"references":[{"attributes":{},"id":"4cffb863-1668-4085-be3a-5c2dd6fce894","type":"BasicTicker"},{"attributes":{"label":{"value":"TCGA-Tumor"},"renderers":[{"id":"effaea45-af26-469d-b6c0-bcee7678310f","type":"GlyphRenderer"}]},"id":"c774ce29-3e57-4db9-86dc-46aa4c2522a1","type":"LegendItem"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"10489608-b3ba-453f-a828-acfd3f2e7ac5","type":"HelpTool"},{"attributes":{"callback":null,"end":562.0696552149145,"start":-561.2820263048415},"id":"f7983163-7ac4-420b-a342-a985c0d4af7c","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9bbe8bb3-8a60-4847-88e9-076e9e27bda0","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"}],"sample":["TCGA-OR-A5J1-01","TCGA-OR-A5J2-01","TCGA-OR-A5J3-01","TCGA-OR-A5J5-01","TCGA-OR-A5J6-01","TCGA-OR-A5J7-01","TCGA-OR-A5J8-01","TCGA-OR-A5J9-01","TCGA-OR-A5JA-01","TCGA-OR-A5JB-01","TCGA-OR-A5JC-01","TCGA-OR-A5JD-01","TCGA-OR-A5JE-01","TCGA-OR-A5JF-01","TCGA-OR-A5JG-01","TCGA-OR-A5JI-01","TCGA-OR-A5JJ-01","TCGA-OR-A5JK-01","TCGA-OR-A5JL-01","TCGA-OR-A5JM-01","TCGA-OR-A5JO-01","TCGA-OR-A5JP-01","TCGA-OR-A5JQ-01","TCGA-OR-A5JR-01","TCGA-OR-A5JS-01","TCGA-OR-A5JT-01","TCGA-OR-A5JV-01","TCGA-OR-A5JW-01","TCGA-OR-A5JX-01","TCGA-OR-A5JY-01","TCGA-OR-A5JZ-01","TCGA-OR-A5K0-01","TCGA-OR-A5K1-01","TCGA-OR-A5K3-01","TCGA-OR-A5K4-01","TCGA-OR-A5K5-01","TCGA-OR-A5K6-01","TCGA-OR-A5K8-01","TCGA-OR-A5K9-01","TCGA-OR-A5KO-01","TCGA-OR-A5KT-01","TCGA-OR-A5KU-01","TCGA-OR-A5KV-01","TCGA-OR-A5KW-01","TCGA-OR-A5KX-01","TCGA-OR-A5KY-01","TCGA-OR-A5KZ-01","TCGA-OR-A5L3-01","TCGA-OR-A5L4-01","TCGA-OR-A5L5-01","TCGA-OR-A5L6-01","TCGA-OR-A5L8-01","TCGA-OR-A5L9-01","TCGA-OR-A5LA-01","TCGA-OR-A5LB-01","TCGA-OR-A5LC-01","TCGA-OR-A5LD-01","TCGA-OR-A5LE-01","TCGA-OR-A5LG-01","TCGA-OR-A5LH-01","TCGA-OR-A5LJ-01","TCGA-OR-A5LK-01","TCGA-OR-A5LL-01","TCGA-OR-A5LM-01","TCGA-OR-A5LN-01","TCGA-OR-A5LO-01","TCGA-OR-A5LP-01","TCGA-OR-A5LS-01","TCGA-OR-A5LT-01","TCGA-OU-A5PI-01","TCGA-P6-A5OF-01","TCGA-P6-A5OG-01","TCGA-PA-A5YG-01","TCGA-PK-A5H8-01","TCGA-PK-A5H9-01","TCGA-PK-A5HA-01","TCGA-PK-A5HB-01"],"tissue":["Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal"],"type":["TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor"],"x_values":{"__ndarray__":"l+Jyj3PWSMB9ogbyyfNawDokR+GSRHDA7bnLoZLHNMC3cL79vLpVwG718QkW2zvA7AndQnD8T8AmDwbbfoNQQFOlGQj78UnAHem16AqjRsBTDmpgQRVXQAzUc08ARlLA0KSQemWuScDhaVVluItQwF///52ztFJAPQxXBTR0T8DZLz6f2T85wLZVNSmIUxnAjv18jalHKcAsTe7uwvtVwEqHBtN/s1RAat2ijulcVsAVP0QSUgtQwMQSQeEopEbASzhBA2HFT8BE9XpbXeMXQEY3JSjfLlFAC0LmIXJJMsCN4p1gp45DwJUcJ1yntlnAe3/eqyszXkAKtV5eD4pewM9Kx1yJPlrAN6sgi1OhP8CvoiNSeiBCwJvV7LluFmHA6tdLQht9Y8Dbe94HgN1BwDNoNqbDlVvAPkLOPmtw8j/1jPQq+oFMwIbK6UrnnUdAh02iFEr6R8B4KVrPNepWwNYXzUt/E1/ATMpnl/gYYkDcKUVLT6dLwO99/gb3AFLAyito93lwU8B6HoncEAIkwOLJfKnyXjVAj35SBjw0YcAdLQfzhhdBwBgKAQjMAFFARaROy3rzVcD2lJqOBVNawEQ5oMFmcUlAdhCL+3iNU8BhDI8vkp0zQCFK/QgvY1TAWsVPc+a4NsCgcLu5lxFfwEtHmOq5j0/AeH+OZdXKU8CFGZSucPkuQN/Uk8RKOEHAVIIScA9dScCRFm/glLVxQIPGi7bm1krASl/TY+DNc8BHhtHkIaFEwMoSArJBnEvAoikoVczVUMAmD+dVHqZVwHpyxPtHcFjALNSavGSbM8DsoU1j16RTQA==","dtype":"float64","shape":[77]},"y_values":{"__ndarray__":"t8laRMkzV0CKT4Iof/0JwI3/fyYsgFLARLGGYZObQkAbxnY/svlJQHEZKXxIxy1A5nuyhtUjScBkyvU3bZFfQJLThIKn7EZATYrgHATLLMBMY20UGtc9QC7HKfpIK1XAdisHvSbfKUB0u+3MHWD4v3BQHc3skkBArTqZqDc8UcC1Ua5MEBhQQInRfZX/ZEbAKSHceGFNJkAuecEQ/P7zP805XTzjlFfAgIh9DsmIK8CGm2m4UApYwKF78CHpRFHAz7j/GE1SM0Dyp4f49tVSQAjStVvDCmZAwv9qymW/V0CsFSWSPVJNQMTYOdo1xUZA6jhgAunPT0CuRXXkcjdBQPjh3/0QYVdA1xkNmOloPUB4dtRKzsJNwBFkChGNFVRAA1DrdQkfJ8BsZaWZgDxFQEeFN7FZslXAUFeO26DBacBTRt9uo1FEwEFCU7F+thtAuZbxI96oP0B82MbrQM0/QFBduznOz0PAvfupKbHZcMA0BDYX505QQKGs0zARBiRACtcK9wwKOEDgQtJtzlFlQItRXGbUgDHATNDYJSbOM0DxX7fWk6JbQHIJHDxo9WLAPp4N709HfUD4taG7PZdOwEl6cxWjYmJAAFLeWvirQ0CjgwZLIiBSQAS6g76BH0vARTmIihEtU0BB7wKoK8BzQJt+8ZEAkkBAyA+UP2JQQcAjDneOfJ9hwGkLAuQj+AVA6Cb+6jiW5b87anpKpVdrQM3Vl2i+Sz3AH8ZetmrMXUCHSx2BsbI0QGju4qqZqDDAb5I1JG+zSkDZFfITq2cxQFXJCb9NtkTAEGxK0806UsA8upr0czA2QA==","dtype":"float64","shape":[77]}}},"id":"e5dbdfb1-ac18-469f-80d7-5bcae4f8b6b8","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},"ticker":{"id":"904e9f55-e992-4905-be45-03499c1e6f2f","type":"BasicTicker"}},"id":"736af58c-37a4-4baa-8c33-52cb7de01b8c","type":"Grid"},{"attributes":{"axis_label":"1","formatter":{"id":"a0c9c7a5-914e-46cb-a7ff-1bec46277808","type":"BasicTickFormatter"},"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},"ticker":{"id":"4cffb863-1668-4085-be3a-5c2dd6fce894","type":"BasicTicker"}},"id":"ea9479a1-6934-4495-ac3a-d52c6876688f","type":"LinearAxis"},{"attributes":{"plot":null,"text":"t-SNE of: adrenal-combat"},"id":"2cbd7e79-f776-4a0a-a340-b7acbf020873","type":"Title"},{"attributes":{"active_drag":{"id":"e49f136f-8874-466d-9c3c-500368666627","type":"PanTool"},"active_scroll":{"id":"4e29c7a7-b8f1-4d38-a9e3-799fc452bdb6","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"e49f136f-8874-466d-9c3c-500368666627","type":"PanTool"},{"id":"4e29c7a7-b8f1-4d38-a9e3-799fc452bdb6","type":"WheelZoomTool"},{"id":"e53af76e-146d-4941-a668-efe68125ddba","type":"BoxZoomTool"},{"id":"6f4e0c17-5df2-4afc-8998-bc06fdd69fc3","type":"SaveTool"},{"id":"5e93aa77-3ddc-47b1-8bd9-1824dd2c1a27","type":"ResetTool"},{"id":"10489608-b3ba-453f-a828-acfd3f2e7ac5","type":"HelpTool"},{"id":"8ac57bf8-03fe-4534-918d-3c1b368f77ac","type":"HoverTool"}]},"id":"67488bcc-7198-4d80-b85b-e47e5440878a","type":"Toolbar"},{"attributes":{},"id":"a0c9c7a5-914e-46cb-a7ff-1bec46277808","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7f026e5d-4059-47c4-a480-71c75041bc3d","type":"ColumnDataSource"},"glyph":{"id":"b0510336-2c7a-4406-8cb6-0c949a93536e","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"4f1d3133-ff6e-4a0d-afe7-5681a369f50c","type":"GlyphRenderer"},{"attributes":{"label":{"value":"GTEX"},"renderers":[{"id":"4f1d3133-ff6e-4a0d-afe7-5681a369f50c","type":"GlyphRenderer"}]},"id":"838674e8-962b-453f-85f4-1223fb1ed5ac","type":"LegendItem"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"}],"sample":["GTEX-111CU-0126-SM-5GZWZ","GTEX-111YS-0126-SM-5987T","GTEX-1122O-0326-SM-5H124","GTEX-11DXX-0126-SM-5EGH7","GTEX-11DXY-1626-SM-5H12L","GTEX-11DXZ-0226-SM-5EGGZ","GTEX-11EMC-0526-SM-5EGJN","GTEX-11EQ9-0126-SM-5986I","GTEX-11GSP-0326-SM-5A5KW","GTEX-11I78-1826-SM-5A5M4","GTEX-11NSD-0226-SM-5A5LR","GTEX-11P7K-0126-SM-5986E","GTEX-11TT1-0126-SM-5LUAA","GTEX-11XUK-0126-SM-5CVLK","GTEX-1211K-0126-SM-59HJE","GTEX-12696-0626-SM-5EGGD","GTEX-12WSD-2126-SM-5LZWK","GTEX-12WSG-0726-SM-5EGIG","GTEX-12WSJ-0126-SM-5GCOM","GTEX-12WSK-0326-SM-5GCOJ","GTEX-12WSN-0926-SM-5GCN1","GTEX-13111-0326-SM-5DUXF","GTEX-131XF-0126-SM-5DUVF","GTEX-131XG-1326-SM-5DUX4","GTEX-132AR-1726-SM-5EGHQ","GTEX-132QS-0126-SM-5IFH9","GTEX-1399R-0326-SM-5KM1X","GTEX-1399S-0426-SM-5IFG5","GTEX-1399U-0226-SM-5P9J2","GTEX-139YR-0126-SM-5IJEY","GTEX-13D11-0426-SM-5LZYA","GTEX-13FH7-0226-SM-5IFGG","GTEX-13FTW-0126-SM-5IJED","GTEX-13N11-0826-SM-5IJFP","GTEX-13O1R-2326-SM-5IJF9","GTEX-13O21-0126-SM-5IJE8","GTEX-13O3O-1626-SM-5KM1O","GTEX-13O61-0126-SM-5KM4P","GTEX-13OVI-1226-SM-5J2ME","GTEX-13OW7-2726-SM-5L3HN","GTEX-13PL7-1026-SM-5MR5C","GTEX-13PVR-0226-SM-5RQJI","GTEX-13W3W-1326-SM-5LU4T","GTEX-145LT-0126-SM-5S2QJ","GTEX-146FR-1526-SM-5SIB8","GTEX-14753-1726-SM-5NQ9X","GTEX-147F4-2526-SM-5NQBB","GTEX-148VJ-1626-SM-5QGPH","GTEX-14A5I-2126-SM-5NQA8","GTEX-14BMU-0126-SM-5S2Q9","GTEX-14DAQ-1826-SM-5S2VV","GTEX-14H4A-0226-SM-5SI6Q","GTEX-NFK9-1726-SM-3TW8P","GTEX-O5YT-1326-SM-3MJGR","GTEX-O5YV-1126-SM-3LK73","GTEX-OHPK-1326-SM-3MJGN","GTEX-OHPL-1326-SM-3MJGG","GTEX-OIZH-1326-SM-3NB1H","GTEX-OOBK-3125-SM-3LK5R","GTEX-OXRK-0126-SM-3NB1E","GTEX-P4QS-1326-SM-3NMCD","GTEX-PLZ5-0326-SM-3P614","GTEX-PLZ6-0226-SM-3P61I","GTEX-PWCY-0226-SM-48TD8","GTEX-Q2AH-0126-SM-48U2B","GTEX-Q2AI-0226-SM-48U1D","GTEX-Q734-0126-SM-48U1E","GTEX-QCQG-0126-SM-48U27","GTEX-QDVN-0426-SM-48TZ6","GTEX-QEG5-1826-SM-4R1JP","GTEX-QLQ7-0126-SM-4R1JW","GTEX-QLQW-0226-SM-447BJ","GTEX-QMRM-0126-SM-4R1K9","GTEX-QXCU-1326-SM-48FE2","GTEX-R53T-0226-SM-48FEH","GTEX-R55C-0226-SM-48FEO","GTEX-R55G-0126-SM-48FDS","GTEX-REY6-1726-SM-48FDL","GTEX-RUSQ-0226-SM-47JWT","GTEX-RWSA-1726-SM-47JX7","GTEX-S32W-0126-SM-4AD61","GTEX-S341-0126-SM-4AD64","GTEX-S4Q7-0226-SM-4AD5O","GTEX-SUCS-0526-SM-4DM56","GTEX-T6MO-0126-SM-4DM6X","GTEX-TKQ2-0226-SM-4DM6V","GTEX-U3ZM-0226-SM-4DXTA","GTEX-U3ZN-0826-SM-4DXSZ","GTEX-U4B1-0126-SM-4DXSN","GTEX-V1D1-0226-SM-4JBHG","GTEX-V955-0126-SM-4JBH5","GTEX-VJYA-0526-SM-4KL1R","GTEX-VUSG-1526-SM-4KKZH","GTEX-WFG8-0126-SM-4LVMH","GTEX-WHPG-1526-SM-4M1ZK","GTEX-WQUQ-0126-SM-4OOSS","GTEX-WY7C-0326-SM-4OND5","GTEX-WYVS-0226-SM-4ONDK","GTEX-X4EO-1726-SM-4QARN","GTEX-X4LF-0126-SM-4QAS7","GTEX-XMK1-0226-SM-4B65D","GTEX-XQ3S-1726-SM-4BOOD","GTEX-XUZC-0226-SM-4BOO7","GTEX-XV7Q-0226-SM-4BRVL","GTEX-XYKS-0926-SM-4BRVG","GTEX-Y114-0526-SM-4TT8V","GTEX-Y3IK-0226-SM-51MRJ","GTEX-Y5V5-1326-SM-4V6G9","GTEX-Y5V6-1926-SM-5IFIL","GTEX-Y9LG-0126-SM-5Q59W","GTEX-YB5E-0226-SM-5IFHI","GTEX-YF7O-0126-SM-5IFIR","GTEX-YFCO-0126-SM-4W1YT","GTEX-ZA64-0226-SM-5HL9C","GTEX-ZDTT-0126-SM-4WKHA","GTEX-ZF2S-0126-SM-4WKFO","GTEX-ZLFU-0826-SM-4WWBP","GTEX-ZLV1-0226-SM-4WWC1","GTEX-ZLWG-0126-SM-4WWC5","GTEX-ZVP2-0126-SM-5NQ7D","GTEX-ZVT2-0826-SM-5GIEO","GTEX-ZYFG-0926-SM-5BC5U","GTEX-ZYVF-1626-SM-5N9EH","GTEX-ZYWO-0126-SM-5GZWQ","GTEX-ZZPU-1226-SM-5N9CK"],"tissue":["Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal","Adrenal"],"type":["GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX"],"x_values":{"__ndarray__":"UUIGkw/KVkAOMwwiMM81wEvtWvUKD1dAP6V4168HXEBTBGLhW4xGQE/LURtSUEFA6fo4cLg2MsAf3ne+6VEmQObMYA+LxPu/sxOi3UWXTkBwiJnPUzNlwIn0WRlJIB9AHkWhUgZYW0Ak3WsT4ChVQL2t2ON5FElArs1nMIdYQ0BxZmlHSJW2v+CC3CSzgSPA/ZPiQ3R7G0CwDr3ryPcJwBZKClV1JFnAwT8+IEYXM0BKLGxYN8JfwAu1Di5STDnA5fJk9gqPZcADFX8wo1VqwO0sUupT7EJABZa2IVzWIEBlsyHlXVlSQF+Ui4ye+VpA94E/o9JDVUBN/QA21OAyQAlqIbrr1j9A80QgWa3iQEAZGUFwkxl7QDScXySJkjRAO12aVNTuWsDl69EQcT0pQA8rvBQ2IFJAx20s8cdeHUAS5VvGXVQzQDjDC5G4bE5Atp5uaoFGLEBL10fX985WQGNRnDRGvCJAbwMp4gfaLMDlOgvqzsovwProp6aPL+E/dfr0FBVWUUDGUHxIrEFQwM6cm4ZHbUhAUMyENvpLYkB1kJP2HqrkP2tglKplCVRAhjK4c78fPEBQ8kTOPddSQITL1RGCKF5APn7q5Kl1YECj/IfGZP5GQH+hZQmCPlTANcsADRCiSEBrnqP0sqJkwK6tkdbXJVJA4A0gknd6QMB8+QppKxdBQA6Ebf5cCk1AY39vXPswQMCZcSEkyVJsQDi/e6fitEFAl9q92IxmRMD6Up348WxGQH1oFTj4+kLADjXUj8WkSUDm+Tddkul1QDwXqfON2BjAo/UkdJdKW0DGevDSaJFeQHuG80AEXUnACLivPUPtZcB3fSMRcLIywHnjiwG3tkpArTBZytIiV0AMlSETsaZbQFprKIoY717ALTZiv6A1VEBTbIPXKEdWQDUaFaqOsDNA99ZOKIfvQkC2ehe5jPJAQAEsEMJHjy/A2pbJMngKSUB2Q25BSrJPQCcYMVUDo1HARzRxGh1oR0Bcntk26XJFQBPwF1DnZk5AV0TrXA/fYcBe0Opzy/b9P5UlwwUjNDBAYsi9FOYKUUARs37cwU04QBrcVcIwz1JARlTQcntuWkBzoAzNVwhYQCx61qX+UEzA0lToHO58T0DnkJ/HvghCwKZzOTCI4CbATVWxFIsrWkB9neSkA8hWQA4DO77e+FBAB5CDCXDxN0AYnRAH+1ZCwLJ9hDZhnFNAmtzxFuABYcAhxqsLXHRDQBwMJdUmbENAfv2qZMTCYkC3KUflW4ZAQEfQtqI3EEhAWycn1Z/DTEBi5bX64olQQFgcmTMm5D1Age3Jb8izL0CghGhB1pzgPw==","dtype":"float64","shape":[125]},"y_values":{"__ndarray__":"8rtdDCVnOcBB4KZf/61FwNSa8tH0fkfAZj5U+gyqU8AiTRe+9ZFFwIGMsbZT/1zAeaqNTxo8TcBqRqT+yqtEQBjM3LIm4C3AXC88EsxvQ8BB/2uVchtmQPteE7Z/wVZA0kPzsABCOcCLLQXc+hJOwOKekUOECTDAjlSOYC8sUsDbj5zcSI48wM7oF8eltmFAMYUoWcJ3OEAzz8jEFEBAQCfADjEV81JA5wtBYRzSQUBcUm4DdgZNQBnJV4xXUC3A4ftHzrU6fcC7OP1HhYZYwHcyXqNcoj3AdFmdxx9aJ0Bl7HQPtBtywPQKlN0T5UNAHxO5qJOcQcA2nWEb2hk/wA8rUKs4OCtAhxF9/kQYRkBy2aFUZ2tDwNUxB2BHsiFAViJtTlDTLkA/SO8k+EFUwHTxl4Y+VVBAMDwAKRFzMcCorx1Mdhk2QJ8n208P2UVAFb37/CJKTUDwrdxnq1VSwIZk4anD1FjAxm3OAehFPsBV/sqVykFJQGHoTyTdME3AZ8a7lYuFGsDSRgOyxJ1UQNx+Gmtmbk/A2Vy53rUWDsAsVRYYRKRIQGoxIQNdoBdAD4AHNP/3RcA0ravvfhFGwD4JH785NFVAIv0oJ9/hM8A/SEnUurtUwPgc33DqXFJAzR140wLSQkBnn9own7RAQP67fLFoHUDAPRDDA3dsO8DNON4PBkNdQEfSij1Odz9ArTz7uDDmY0D+C/joBwA8QLbPUwtUTE5AmiciUrMCWMB+WWxPGDNYQN0b+xuSJVRA+qi2AP5kWcA8faa0HLRfwOGMngs6bVFA6/SBAufWTsAGXXuzVhUgQCQcokztwlTAuksqoB6ia8BVeqIdwRJWwBYj9ytJthzA9ZU2/eYAGkDdDQzM5wEiwKVI9RnPt17AAyPGXDeNR0C9O0oV87xOQAqCDSEb7RXApHaBe67BL8BnDmPtAsJTQAfqahcvYRDAnzTv3Y/pVECsf9qQNc4mQNgJGTmZXDTANVxjgQ91SkBUIuxrQPFRQN5Y7B1NZTbAqSWu7s+GTEC5BgKHK91dwN/vs881pU/A0F/NJOoGTMBfmq2DYyRKQI6JugsVF1RAdZF0y3l1G0D9PFHzE2tUQE6BuiCTW2BAU76hWP2GUsDJv67BgANfwAL4Po/5ozDAQ14BIuwyRcBuPQAckBMqwKQWFc6RkldAZNUZYT02WUC0nu4wp0pFwJIpL7B7RDbAUBTjcLSfXMAD0jGiT0YTwLVMphJa1zVAB5PQDzjKREAIKOSlfQRAQK9UrueYozRAEZIQfvBRUEBRGiJCTrVKQBwAFiScqUvA9eq8fdCgRcCSEPyBqvBRwA==","dtype":"float64","shape":[125]}}},"id":"7f026e5d-4059-47c4-a480-71c75041bc3d","type":"ColumnDataSource"},{"attributes":{},"id":"835f9451-7ef7-4e51-863f-8256330fb26c","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},"ticker":{"id":"4cffb863-1668-4085-be3a-5c2dd6fce894","type":"BasicTicker"}},"id":"2da85d66-d2e5-4830-aef6-aa2f036f2a71","type":"Grid"},{"attributes":{"data_source":{"id":"e5dbdfb1-ac18-469f-80d7-5bcae4f8b6b8","type":"ColumnDataSource"},"glyph":{"id":"f1543b85-15be-44a7-9e7a-ade1823ae492","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"effaea45-af26-469d-b6c0-bcee7678310f","type":"GlyphRenderer"},{"attributes":{},"id":"86f01e38-dd10-4f5a-a9cc-6fe25c1834da","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#7fc97f"},"line_color":{"value":"#7fc97f"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b0510336-2c7a-4406-8cb6-0c949a93536e","type":"Circle"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"5e93aa77-3ddc-47b1-8bd9-1824dd2c1a27","type":"ResetTool"},{"attributes":{"items":[{"id":"838674e8-962b-453f-85f4-1223fb1ed5ac","type":"LegendItem"},{"id":"c774ce29-3e57-4db9-86dc-46aa4c2522a1","type":"LegendItem"}],"location":"top_left","plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"142113bc-d267-4138-a7e7-75c087137da1","type":"Legend"},{"attributes":{},"id":"904e9f55-e992-4905-be45-03499c1e6f2f","type":"BasicTicker"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"6f4e0c17-5df2-4afc-8998-bc06fdd69fc3","type":"SaveTool"},{"attributes":{"callback":null,"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},"tooltips":[["Tissue","@tissue"],["Type","@type"],["Sample","@sample"]]},"id":"8ac57bf8-03fe-4534-918d-3c1b368f77ac","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#beaed4"},"line_color":{"value":"#beaed4"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f1543b85-15be-44a7-9e7a-ade1823ae492","type":"Circle"},{"attributes":{"below":[{"id":"ea9479a1-6934-4495-ac3a-d52c6876688f","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"a999fc23-06d0-410c-9b8f-8afc738c0fb8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9bbe8bb3-8a60-4847-88e9-076e9e27bda0","type":"BoxAnnotation"},{"id":"4f1d3133-ff6e-4a0d-afe7-5681a369f50c","type":"GlyphRenderer"},{"id":"effaea45-af26-469d-b6c0-bcee7678310f","type":"GlyphRenderer"},{"id":"142113bc-d267-4138-a7e7-75c087137da1","type":"Legend"},{"id":"ea9479a1-6934-4495-ac3a-d52c6876688f","type":"LinearAxis"},{"id":"a999fc23-06d0-410c-9b8f-8afc738c0fb8","type":"LinearAxis"},{"id":"2da85d66-d2e5-4830-aef6-aa2f036f2a71","type":"Grid"},{"id":"736af58c-37a4-4baa-8c33-52cb7de01b8c","type":"Grid"}],"title":{"id":"2cbd7e79-f776-4a0a-a340-b7acbf020873","type":"Title"},"tool_events":{"id":"86f01e38-dd10-4f5a-a9cc-6fe25c1834da","type":"ToolEvents"},"toolbar":{"id":"67488bcc-7198-4d80-b85b-e47e5440878a","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"762f646d-7bb7-4c9f-bc05-1ec7e447afc4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"f7983163-7ac4-420b-a342-a985c0d4af7c","type":"Range1d"}},"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"4e29c7a7-b8f1-4d38-a9e3-799fc452bdb6","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":508.64507356861634,"start":-391.913860543889},"id":"762f646d-7bb7-4c9f-bc05-1ec7e447afc4","type":"Range1d"},{"attributes":{"overlay":{"id":"9bbe8bb3-8a60-4847-88e9-076e9e27bda0","type":"BoxAnnotation"},"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"e53af76e-146d-4941-a668-efe68125ddba","type":"BoxZoomTool"},{"attributes":{"axis_label":"2","formatter":{"id":"835f9451-7ef7-4e51-863f-8256330fb26c","type":"BasicTickFormatter"},"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"},"ticker":{"id":"904e9f55-e992-4905-be45-03499c1e6f2f","type":"BasicTicker"}},"id":"a999fc23-06d0-410c-9b8f-8afc738c0fb8","type":"LinearAxis"},{"attributes":{"plot":{"id":"13a2907d-d44b-4594-a462-35d9e7a75a06","subtype":"Chart","type":"Plot"}},"id":"e49f136f-8874-466d-9c3c-500368666627","type":"PanTool"}],"root_ids":["13a2907d-d44b-4594-a462-35d9e7a75a06"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"62dcf153-6f81-446a-85d8-c52824cafd2d","elementid":"0c1392e6-24c3-4969-b9d7-cf4a0d33f912","modelid":"13a2907d-d44b-4594-a462-35d9e7a75a06"}];
                
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
