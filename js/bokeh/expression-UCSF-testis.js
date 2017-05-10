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
      };var element = document.getElementById("1dd65d5f-bc10-48a1-a802-3a11657b2ed0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1dd65d5f-bc10-48a1-a802-3a11657b2ed0' but no matching script tag was found. ")
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
                var docs_json = {"966f7984-09b9-44ad-9c14-627d625afc5c":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#7fc97f"},"line_color":{"value":"#7fc97f"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"5665306c-861e-4cc8-a20a-465eee40eecd","type":"Circle"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"6db859c5-5370-4f1f-bb8c-029148028166","type":"SaveTool"},{"attributes":{"active_drag":{"id":"36000012-7079-4890-abfc-1cbb5b782030","type":"PanTool"},"active_scroll":{"id":"ece01f24-5fdf-400f-8d8a-485edc3b0d36","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"36000012-7079-4890-abfc-1cbb5b782030","type":"PanTool"},{"id":"ece01f24-5fdf-400f-8d8a-485edc3b0d36","type":"WheelZoomTool"},{"id":"675e09c7-5845-415f-bea1-9963fb3b9102","type":"BoxZoomTool"},{"id":"6db859c5-5370-4f1f-bb8c-029148028166","type":"SaveTool"},{"id":"c31c5781-71d3-436e-959e-022079df438d","type":"ResetTool"},{"id":"05a3abcb-b14b-47ec-8e03-bb8a82710c88","type":"HelpTool"},{"id":"ecbe0c64-60ab-4075-b800-a28867692cd8","type":"HoverTool"}]},"id":"41de6578-27b9-4fce-841c-24c04351fb15","type":"Toolbar"},{"attributes":{"callback":null,"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},"tooltips":[["Tissue","@tissue"],["Type","@type"],["Sample","@sample"]]},"id":"ecbe0c64-60ab-4075-b800-a28867692cd8","type":"HoverTool"},{"attributes":{"items":[{"id":"49961eac-c333-47c6-a7cf-a9ac50a3d6b8","type":"LegendItem"},{"id":"4451d82a-9c4d-4133-bfbe-bce988a3310d","type":"LegendItem"}],"location":"top_left","plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"4ab53706-2d14-4c1f-8d91-c564bbbe95ae","type":"Legend"},{"attributes":{},"id":"1ed16deb-de0a-472b-9682-b3d15cc99137","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"644627ec-22df-43f7-9014-d170a16e6f43","type":"ColumnDataSource"},"glyph":{"id":"886925b5-0777-403b-8b60-cbc934e5f4c1","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"1492b7ee-99a4-4b39-9d43-8aebae7d33ea","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"257cc261-6c18-4500-a7ef-36c31415591b","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"bd2411b0-902b-48bc-bd4b-d7d77cc2fc9e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b239312c-6327-4671-a287-97fa804ce64d","type":"BoxAnnotation"},{"id":"f6ccc43b-0020-464a-ae45-327956467eef","type":"GlyphRenderer"},{"id":"1492b7ee-99a4-4b39-9d43-8aebae7d33ea","type":"GlyphRenderer"},{"id":"4ab53706-2d14-4c1f-8d91-c564bbbe95ae","type":"Legend"},{"id":"257cc261-6c18-4500-a7ef-36c31415591b","type":"LinearAxis"},{"id":"bd2411b0-902b-48bc-bd4b-d7d77cc2fc9e","type":"LinearAxis"},{"id":"c592166d-13f6-48de-94ec-c5056653eefe","type":"Grid"},{"id":"21272092-547d-4e96-9b07-8a6ce731242f","type":"Grid"}],"sizing_mode":"scale_width","title":{"id":"2c6dab57-b03b-4d24-8bed-f6e172f4ea96","type":"Title"},"tool_events":{"id":"648cb0ad-2a2a-49e8-bbca-53cc19bc4d85","type":"ToolEvents"},"toolbar":{"id":"41de6578-27b9-4fce-841c-24c04351fb15","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"a9bd06f4-ba78-4910-964c-985db8467a31","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a74b4ec3-ab14-4138-9511-e7a305100d97","type":"Range1d"}},"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},{"attributes":{"label":{"value":"GTEX"},"renderers":[{"id":"f6ccc43b-0020-464a-ae45-327956467eef","type":"GlyphRenderer"}]},"id":"49961eac-c333-47c6-a7cf-a9ac50a3d6b8","type":"LegendItem"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"05a3abcb-b14b-47ec-8e03-bb8a82710c88","type":"HelpTool"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"ece01f24-5fdf-400f-8d8a-485edc3b0d36","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"}],"sample":["TCGA-2G-AAEW-01","TCGA-2G-AAEX-01","TCGA-2G-AAF1-01","TCGA-2G-AAF4-01","TCGA-2G-AAF6-01","TCGA-2G-AAF8-01","TCGA-2G-AAFE-01","TCGA-2G-AAFG-01","TCGA-2G-AAFH-01","TCGA-2G-AAFI-01","TCGA-2G-AAFJ-01","TCGA-2G-AAFL-01","TCGA-2G-AAFM-01","TCGA-2G-AAFN-01","TCGA-2G-AAFO-01","TCGA-2G-AAFV-01","TCGA-2G-AAFY-01","TCGA-2G-AAFZ-01","TCGA-2G-AAG0-01","TCGA-2G-AAG3-01","TCGA-2G-AAG5-01","TCGA-2G-AAG6-01","TCGA-2G-AAG7-01","TCGA-2G-AAG8-01","TCGA-2G-AAG9-01","TCGA-2G-AAGA-01","TCGA-2G-AAGC-01","TCGA-2G-AAGE-01","TCGA-2G-AAGF-01","TCGA-2G-AAGG-01","TCGA-2G-AAGI-01","TCGA-2G-AAGJ-01","TCGA-2G-AAGK-01","TCGA-2G-AAGM-01","TCGA-2G-AAGN-01","TCGA-2G-AAGO-01","TCGA-2G-AAGP-01","TCGA-2G-AAGS-01","TCGA-2G-AAGT-01","TCGA-2G-AAGV-01","TCGA-2G-AAGW-01","TCGA-2G-AAGX-01","TCGA-2G-AAGY-01","TCGA-2G-AAGZ-01","TCGA-2G-AAH0-01","TCGA-2G-AAH2-01","TCGA-2G-AAH3-01","TCGA-2G-AAH4-01","TCGA-2G-AAH8-01","TCGA-2G-AAHA-01","TCGA-2G-AAHC-01","TCGA-2G-AAHG-01","TCGA-2G-AAHL-01","TCGA-2G-AAHN-01","TCGA-2G-AAHP-01","TCGA-2G-AAHT-01","TCGA-2G-AAKD-01","TCGA-2G-AAKG-01","TCGA-2G-AAKH-01","TCGA-2G-AAKL-01","TCGA-2G-AAKM-01","TCGA-2G-AAKO-01","TCGA-2G-AAL5-01","TCGA-2G-AAL7-01","TCGA-2G-AALF-01","TCGA-2G-AALG-01","TCGA-2G-AALN-01","TCGA-2G-AALO-01","TCGA-2G-AALP-01","TCGA-2G-AALQ-01","TCGA-2G-AALR-01","TCGA-2G-AALS-01","TCGA-2G-AALT-01","TCGA-2G-AALW-01","TCGA-2G-AALX-01","TCGA-2G-AALY-01","TCGA-2G-AALZ-01","TCGA-2G-AAM2-01","TCGA-2G-AAM3-01","TCGA-2G-AAM4-01","TCGA-2X-A9D5-01","TCGA-2X-A9D6-01","TCGA-4K-AA1G-01","TCGA-4K-AA1H-01","TCGA-4K-AA1I-01","TCGA-4K-AAAL-01","TCGA-S6-A8JW-01","TCGA-S6-A8JX-01","TCGA-S6-A8JY-01","TCGA-SB-A6J6-01","TCGA-SB-A76C-01","TCGA-SN-A6IS-01","TCGA-SN-A84W-01","TCGA-SN-A84X-01","TCGA-SN-A84Y-01","TCGA-SO-A8JP-01","TCGA-VF-A8A8-01","TCGA-VF-A8A9-01","TCGA-VF-A8AB-01","TCGA-VF-A8AC-01","TCGA-VF-A8AD-01","TCGA-VF-A8AE-01","TCGA-W4-A7U2-01","TCGA-W4-A7U3-01","TCGA-W4-A7U4-01","TCGA-WZ-A7V3-01","TCGA-WZ-A7V4-01","TCGA-WZ-A7V5-01","TCGA-WZ-A8D5-01","TCGA-X3-A8G4-01","TCGA-XE-A8H1-01","TCGA-XE-A8H4-01","TCGA-XE-A8H5-01","TCGA-XE-A9SE-01","TCGA-XE-AANI-01","TCGA-XE-AANJ-01","TCGA-XE-AANR-01","TCGA-XE-AANV-01","TCGA-XE-AAO3-01","TCGA-XE-AAO4-01","TCGA-XE-AAO6-01","TCGA-XE-AAOB-01","TCGA-XE-AAOC-01","TCGA-XE-AAOD-01","TCGA-XE-AAOF-01","TCGA-XE-AAOJ-01","TCGA-XE-AAOL-01","TCGA-XY-A89B-01","TCGA-XY-A8S2-01","TCGA-XY-A8S3-01","TCGA-XY-A9T9-01","TCGA-YU-A90P-01","TCGA-YU-A90Q-01","TCGA-YU-A90S-01","TCGA-YU-A90W-01","TCGA-YU-A90Y-01","TCGA-YU-A912-01","TCGA-YU-A94D-01","TCGA-YU-A94I-01","TCGA-YU-AA4L-01","TCGA-YU-AA61-01","TCGA-ZM-AA05-01","TCGA-ZM-AA06-01","TCGA-ZM-AA0B-01","TCGA-ZM-AA0D-01","TCGA-ZM-AA0E-01","TCGA-ZM-AA0F-01","TCGA-ZM-AA0H-01"],"tissue":["Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis"],"type":["TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor"],"x_values":{"__ndarray__":"WUF2qb0TRsCVyZTsUVhCwHJKGvgAAkjA8TyBQuvVS8AkNISUxww5wMpRcP9xV0zAL7ZAFkonQMCJIHiPjU01wPU6I/t65FTA4IB0pe3DPcDgHmiK1ZVCwACL9a+caEXACgof//lBP8C+ASRyo1s3wKePWvGDSkTARW3fuynLPcAT5TXJnTtFwJZWrYs7EDbA/WVvy1/2QsC6YSmeKS9DwHGcCDLujS7AHppX0jHoYUATxsf044ZPwEURa/R66UXAJQZ0F0kWQMCCLpOTrfZUwElOPf+VmTjAt1fSiwcLQsBlvAK0YRhCwE/s5WpCWFNAXYz5WN+fS8DeuZEje5RRwLVAJTzr7jzAD7q/2chMO8BYHvP+lUY/wJrNmlBYO0PAYYVETVbySsBeizlhxD1PwGvseFjBtUnAyV1VKtP3QsDjcJyoB3I1wJCrASQioSvA8TCcxmGwNcDDkpNgUwY6wFHdreZPTkTA/h5P88c3QMDSq3VI5eYvwOYpvslHD1HAKEPfE739O8CfGss/40A6wCm9+PQkri3Ad6EKeeQPScA7kpoY2m0gwOie4KmRFDfAIeEH7GFqOcDhfwY+E909wMjmZo2N703AZe24YlUuOsAIPvVO8O5HwBIoqP2I9kDABCfCCHgzPMD82qo3/bBCwASMIk3JVSDAns6UvBZnMsCkoHz5ez1LwM3fFVGKWVHAAqr5vmxZNMDdfN0m4XJNwG+3CGno6SjA2clgHuaKQ8CisDBU0lo5wGuM5L6UnEfAAmgmlPOO4L92ocNaQ7RBwDP69vH+2D/A2i7YvDyqFsDAEC7MJ39CwHk7WNTv9kbA8hpNKXbIM8CmtSPoP1A0wNZURrVc6zHA7uZ2DogPSMA60ECcj5dCwJeDjc1XICnAypaZCCTdMcBcIQLEUzH+P1Tq1J25LULAeaz2M4dwRcCUZqDf2lBRwCaka9F3Wj/ADAR4pWNjRMCBzy634dgSwH7TWVWJwT7AB+ohGGYLR8B0luIrwE5AwDcBaM63rkjAe3m5vQwWR8A7NWhNj9QlwA/QO5TRxyTAXgvQJbifQ8BUFF+zEdZEwL8XUtsjKlHAE48OCcjkQ8CB5Bapk3JKwAfTzsfUTELAPNs2vveNRcBruf4a8V07wPjGMJIF7z3AJ6JVz3E0OMDKioZODLxSwLe2cmyGZknA03Lcj8aENcAigocO37VKwMzsBHIvCkjAHSWKljBjUMAF9Hv7mMdRQAaygegIzk3Asq7+o8IeQsDAi7M0EflFwMHOApDZvELAmOXnbHBWPMAdgLhx7K8rQGu/PDFL8zrAEiWe/VinHsCDpm6yna4wwKp1tBrQwTTAQBnfY3R1TsCVgZSluL47wH/DcH7X/zPAElxWoBQVQUB+f3zm3tBFQLKsogeZijzAkR4fMW/2RMDE5cbhElRRwD7odmG6ZkDAxkt53VGBPsDnLqqYlNw0wKgY8LdjBUnACDtdilb5TMA4wykQrtBLwC6xDbzb3ULA8b+ufk/ZR8Da+fzjS3BAwNI6Ie5NeSXAaondVtGMF0AjrLTUH6Q1wNKvUrf1KVDA20jZMMPVMsA=","dtype":"float64","shape":[148]},"y_values":{"__ndarray__":"MJbjCu0uScCBHXw1X9s7wIrFjAA/e0HAf9uhfpgDO8DiHK0bnlRAwEzN21nHTUjArWj2UfZFRcBAqtEdQqVMwMOy/tOp61zAQPG+tQZePkD+ooIeNwpYQIOKiSHXBj1A4Xuj6QcdUEAi8dcPj31IQIWdTH43PkVAN+LOYouhWMB+6KFh1H1MQHTWnuUvSipAwNR8B3utS0DAJtcLl6QoQOuxKn37TyNAeJQrY9SLRECSsrtTLBdGQIe3VJzFK0dAIsmUYAhfR8C20QY2r1M5QLGN/pif8jRA7C4znhTFR0DG0ncE7UtCQIa5uhlcLBrAFj7agE7VSkCXy/jQW0pEQKa5ijxtuThAwBH4fpJPK0CC5qfdRPhMQKUBj31rfEhAzgMGW3/PVcALKnpyvBhXQHPDhzX8Bz5AP4ngyg/pEECM/AVGiCJLQLo9AyW2QS5AnK6aB8beMUCiO9wgYddOQPrSCiBZzD3AtuDqZ1p7MEBuu48m7DpOwFpKUEbwPEpA9DE3IOWgOsD+CLwV1rpDwNDtckKZskbAYfnwjVqDNsAnQkP2+WVOwCEyNJF2PUXAB3bafaOcKcC63/6P1ORCwMVt5nO9E0RAKfr8a+vmRUAkvkLyBO1IQOjxnP2AYUtAfcb/vRQIS0AhZujPV1dKwL762U5RrwdAartxv1mwSECvWSmzU2RBQPmzw+wYDFBAz1vz1ggpO0A6CKicOfQVwLCA6PXIERdAeuTMVGHuUUCoaNEaZlIeQLWnVaQiijBAOyUtZGt2QsCHG+9XzCY4QMJc0LSh1xBALol8+sVCWEDtB+aFpRMzQFCEt5Gx1ThA0VqkPnHY1T+g6/YhT+FDQHuknSLTpUPAtYe6OGFoRsCL9eImIS4jwPNTcidgaErAjSV/rs3dSMA2sGuKEw9LwB2ABYl2zUDA+STrYbKcM8B6QO6lEKZSQMjpR07DvkDAPIbxdH/sN8CGla2FC1dGwMmUNMg1cSFAZuiHH3zbUEDgx1b9Q4NIQLlkzd97WjHA6btgrITLQ0ATA+4yrCVBwAb9JHYl9ETA5Db1RPmcTcBaVIwOeIpJQOfPrMn+kz3AqU3P81ymQsAOR5uaOXEwQGx6yd3+tE5ANzM9FmR2RcBu3RiJREBIwK95YBWOAUrA0hpeGqltSsB+M4wvqBVDwA3Tv/KXjlRAz/WQ1l0kSMDzuyGqXp1DwH5cG+7qTTzANknNf4lNH8DiG2ekB6olQDrDNwXCPkHAXaO1kwC7RMCSAcceWilCwFKvTxHYvkfAWRAuO+2LUcChoc1c6lEQwIxEXs3SbPG/nf5EACp3ScCwPxX/9WAywPTKlJDqjhxAWqY0BZKbMMByj2sIk3pNwPhBfba50k1AjpUzLDcPXkC0HUV6C5RWQFaWbpgOXFFAubX3dvSWK8AW3VpuspkzQLpT+tjg2DbAdGBSp1HBQEC16CaGVNNAwCNIrvcQ1hZAu8do0STyOUCpMiJgp7c+QFUcye6BIT1Aulu67851FMD7HAQwwPMvwO9j67iFjDzAerJAu3pWT8DvhO/erj81wLSYn8AMdyJAadmvzMA0OMA=","dtype":"float64","shape":[148]}}},"id":"644627ec-22df-43f7-9014-d170a16e6f43","type":"ColumnDataSource"},{"attributes":{"label":{"value":"TCGA-Tumor"},"renderers":[{"id":"1492b7ee-99a4-4b39-9d43-8aebae7d33ea","type":"GlyphRenderer"}]},"id":"4451d82a-9c4d-4133-bfbe-bce988a3310d","type":"LegendItem"},{"attributes":{},"id":"2a2febec-4465-4c5b-8aad-be5b9327dc13","type":"BasicTickFormatter"},{"attributes":{},"id":"fed5854d-d3ca-4e87-ad97-c0ae16b5d665","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"}],"sample":["GTEX-111CU-1726-SM-5EGHM","GTEX-111FC-1926-SM-5GZYC","GTEX-111VG-1926-SM-5GIDO","GTEX-111YS-2026-SM-5EGGL","GTEX-117XS-2026-SM-5GID1","GTEX-117YW-1526-SM-5EGGP","GTEX-1192W-2326-SM-5N9BS","GTEX-11DXY-0226-SM-5H123","GTEX-11DXZ-2126-SM-59881","GTEX-11EI6-2226-SM-5EGJM","GTEX-11EQ8-1426-SM-5EGJR","GTEX-11EQ9-1926-SM-5PNVV","GTEX-11GS4-2026-SM-5N9CP","GTEX-11LCK-2326-SM-5HL53","GTEX-11NSD-1026-SM-5N9BE","GTEX-11NUK-2626-SM-5A5MB","GTEX-11NV4-1726-SM-5N9FC","GTEX-11OF3-1826-SM-5987N","GTEX-11ONC-2226-SM-5HL6D","GTEX-11P7K-1026-SM-5HL6Y","GTEX-11TT1-2226-SM-5GU6B","GTEX-11TUW-2226-SM-5EQL9","GTEX-11UD2-2826-SM-5GU6X","GTEX-11WQC-2326-SM-5EQKE","GTEX-11WQK-2826-SM-5EQKH","GTEX-11ZUS-2726-SM-5FQUA","GTEX-1212Z-0326-SM-5FQSJ","GTEX-12696-0226-SM-5EGL3","GTEX-12C56-1426-SM-5FQSW","GTEX-12WSH-0326-SM-5GCNH","GTEX-12WSI-2126-SM-5GCMV","GTEX-12WSL-2326-SM-5DUXQ","GTEX-12WSM-1326-SM-5GCP9","GTEX-12ZZY-0126-SM-5LZV2","GTEX-13111-1526-SM-5EGJX","GTEX-13112-0226-SM-5P9IV","GTEX-131XE-0426-SM-5IJF4","GTEX-131XF-2026-SM-5DUWG","GTEX-132QS-1226-SM-5P9GD","GTEX-1399Q-2826-SM-5IJEZ","GTEX-1399T-1526-SM-5P9J6","GTEX-139T8-0726-SM-5L3D2","GTEX-139TS-1726-SM-5IJG5","GTEX-139TT-2226-SM-5LZWO","GTEX-13FLW-2126-SM-5N9FD","GTEX-13FTW-1326-SM-5LZZD","GTEX-13G51-0826-SM-5K7VB","GTEX-13N2G-0126-SM-5N9DV","GTEX-13NYB-2226-SM-5MR58","GTEX-13NZA-2526-SM-5IJFX","GTEX-13NZB-2026-SM-5MR4M","GTEX-13O1R-0726-SM-5IJEI","GTEX-13O21-1226-SM-5J2MK","GTEX-13O61-2026-SM-5J2M6","GTEX-13OVH-0726-SM-5N9BU","GTEX-13OVL-0426-SM-5IFG6","GTEX-13QJ3-0226-SM-5S2PU","GTEX-144GL-0726-SM-5LU4P","GTEX-144GN-1626-SM-5Q5BU","GTEX-145LT-0426-SM-5LUAP","GTEX-145MF-1726-SM-5LU9H","GTEX-145MH-2326-SM-5O9AW","GTEX-145MO-0126-SM-5S2QU","GTEX-14753-0626-SM-5Q5CY","GTEX-147F4-0626-SM-5LUAK","GTEX-147JS-0126-SM-5S2TW","GTEX-14A6H-2326-SM-5Q5B5","GTEX-14ABY-0626-SM-5Q5C9","GTEX-N7MS-0126-SM-3TW8O","GTEX-NFK9-0126-SM-3LK5H","GTEX-NPJ8-1226-SM-3MJHM","GTEX-O5YT-2126-SM-3MJGD","GTEX-OHPM-2126-SM-3LK75","GTEX-OIZI-0126-SM-3NB13","GTEX-OOBJ-2126-SM-3NB1N","GTEX-OOBK-2126-SM-3LK5T","GTEX-OXRL-2126-SM-3NM98","GTEX-P4PQ-2126-SM-3NMCV","GTEX-P4QR-0226-SM-3NMCH","GTEX-P4QS-2126-SM-3NMCF","GTEX-PLZ5-1526-SM-3P5ZX","GTEX-PLZ6-1226-SM-3P5ZS","GTEX-PW2O-1426-SM-48TCD","GTEX-Q2AH-1526-SM-48TZG","GTEX-Q2AI-1226-SM-48U14","GTEX-QDVN-1926-SM-48TZ8","GTEX-QEG4-0126-SM-48TZE","GTEX-QEG5-0126-SM-4R1JR","GTEX-QLQW-1026-SM-447A9","GTEX-QMRM-1526-SM-4R1K6","GTEX-QV31-1126-SM-4R1K4","GTEX-QV44-1726-SM-4R1KG","GTEX-R55C-1426-SM-48FED","GTEX-R55D-0126-SM-48FEL","GTEX-R55E-0726-SM-48FCZ","GTEX-REY6-0126-SM-48FDT","GTEX-RM2N-1326-SM-48FCW","GTEX-RN64-2326-SM-48FDW","GTEX-RUSQ-2126-SM-47JXK","GTEX-RWSA-2426-SM-47JXR","GTEX-S3XE-1526-SM-4AD5A","GTEX-S4Q7-1226-SM-4AD5I","GTEX-S4Z8-2126-SM-4AD5H","GTEX-S7SE-0326-SM-4AT5Q","GTEX-S95S-1126-SM-4B64E","GTEX-SIU7-1526-SM-4BRWQ","GTEX-SNMC-1026-SM-4DM7K","GTEX-SNOS-1126-SM-4DM67","GTEX-SUCS-1326-SM-4DM5T","GTEX-T5JC-0726-SM-4DM55","GTEX-T6MN-2026-SM-4DM7L","GTEX-T8EM-0126-SM-4DM5R","GTEX-TKQ2-1526-SM-4DXUN","GTEX-U3ZH-1526-SM-4DXV1","GTEX-U3ZM-1626-SM-4DXSK","GTEX-U8T8-1126-SM-4DXUE","GTEX-U8XE-0126-SM-4E3I3","GTEX-V1D1-2126-SM-4JBH4","GTEX-V955-1926-SM-4KL1L","GTEX-WFG8-1926-SM-4LVM1","GTEX-WH7G-1926-SM-4LVMM","GTEX-WHSB-2126-SM-4M1XF","GTEX-WHSE-0426-SM-4M1XO","GTEX-WK11-0326-SM-4OOS6","GTEX-WOFM-1126-SM-4OOSB","GTEX-WVJS-2726-SM-4MVNU","GTEX-WVLH-2626-SM-4MVNV","GTEX-WY7C-2226-SM-4ONCS","GTEX-WZTO-0326-SM-4PQYZ","GTEX-X261-2326-SM-4PQYU","GTEX-X3Y1-2626-SM-4PQZI","GTEX-X4XX-0726-SM-4QARS","GTEX-X5EB-2026-SM-4E3KA","GTEX-XAJ8-1326-SM-47JYT","GTEX-XBED-2026-SM-4AT5D","GTEX-XLM4-1526-SM-4AT6D","GTEX-XMK1-2026-SM-4B65K","GTEX-XPT6-1626-SM-4B655","GTEX-XQ3S-2726-SM-4BOP2","GTEX-Y111-2426-SM-4TT23","GTEX-Y3I4-2026-SM-4TT6Z","GTEX-Y5V6-1726-SM-4VDSZ","GTEX-Y8E4-2226-SM-5LU94","GTEX-Y9LG-1726-SM-4VBQE","GTEX-YB5E-1926-SM-5IFIG","GTEX-YEC3-1726-SM-5IFIK","GTEX-YEC4-1526-SM-4W1YU","GTEX-YF7O-2026-SM-4W1YE","GTEX-YFCO-1726-SM-4W21S","GTEX-Z93S-1726-SM-5HL8G","GTEX-ZA64-1626-SM-5CVME","GTEX-ZAB4-0126-SM-5CVMG","GTEX-ZAB5-2426-SM-5CVMW","GTEX-ZLFU-2026-SM-4WWG2","GTEX-ZPU1-2126-SM-57WED","GTEX-ZT9W-2226-SM-57WFU","GTEX-ZT9X-1426-SM-5DUX1","GTEX-ZTX8-1126-SM-51MRM","GTEX-ZUA1-2726-SM-59HLJ","GTEX-ZV7C-2026-SM-5NQ8F","GTEX-ZVTK-0126-SM-57WDG","GTEX-ZVZP-2226-SM-57WBF","GTEX-ZY6K-1726-SM-5GZX8","GTEX-ZYFC-0126-SM-5GIEH","GTEX-ZYT6-2726-SM-5GICP"],"tissue":["Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis","Testis"],"type":["GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX"],"x_values":{"__ndarray__":"ZDgkqA3jTUAAIUTjl3FLQMaMh/7SGT5A4J5HMsOcR0DZC5Rx6+M1QDfzX9+Bxk5AalcB9GPHKkBHTssiJgoIQKXmdSYa11JAqg5U59dUQEAjXSIu8YVSQJo3RObsIVJA+tTSsgiaU0ASjM4Yl+dUQEcoxvWD8U5AdNdCPyp6UUCI8ima1NpSQCZvyzHNoSNAgozv6zNIQkCWCB8VVRA6QPKDockbeT9A8gFD2fzqTkC8ZUF3WdVbQP3i3aB4gkVAcdCfqS9RHED5Kmz9ShhSQFuIWlvv0EhAAe/xPobPREB9rg7ttGQ8QBlKReO0qUBAmC0igboLV0ANxyRmvPVRQNAGsPBTYl7AKZydYqO0QUAQKrPhwm9NQEcHHzBTSFFAgIEoVTXsO0Bq8/U5lEQyQLZ/qMdw1DtAld1PWQkkL0D132Y4yoIWQOQGqWAVJTBAJNsU1Tr2QUCkEpq7ZQI/QN/BC39NyVNA0vRiEEyDSEDxOoyv9YowQBTQcj9dHklA/49NUBgEUUD+bFJ0Qi5OQPBWwjNDWkxARKaN6abjN0AXeE8PJW41QGPxveSs9ERA4v4udF5bWEBXRwcDLPpRQMZfUjB5NClABaA8GF0QUEDLs8XWPB9CQHDuPiIJHtc//k5w6s15QkDnQcNTkopNQHUW7oJIA0RACaAL4YaxS0BDO+I6kD9EQFKv6c5Wtx/AMmYaCsLZTUDC4Y1ZbqU4QPxgV2Q1bk9AH1QWB858REC48t11COoYQGbvEOuCtFLAiIhX0GzPUED0IIhMSLsgwETmmDv0BjlAUs/53RnZUkCBng+qa30uQMdNq6rnXjxA+Otp9lcMI0CvEw9pTo4BQO7c05WG1P4/besqoyg7PkAiaRjP4OhRQHK/7RwCezhA5dccF7VuR0Bu8eGWjwgZQHhCXV5bKjDAp344SzRjSUCQNa8uDMhPQLrL17EXMk9ASI1zj4hqNUDBf4aq+ac3QMcxDz0sJ0FAjLfN2YrzQEDPO3AbdXdIQBKybxRSsFRAXSCgv1i3MkDRV4mtvmpFQDH5GeEuG1xA9bgRv3VsSUAMScOlaE8LQG+KVSpHqBxAhR4MEqhCVEDkIrsyg9w9QHBgJwUphfs/0leVPQSiGUCVVmbXctxQQNSapF+g3UlAGMgMI0cETEBU4LDm+/dFQKntFNcaG1BAnByOI0nATED0ekaAPdw8QP6w7WIIwklAbF8BzFZiTUDwi+3QaCM4QNOTuzORp0hAXun5SoL+SkCIYKtkRrf0v/PiaJOOplJAZ0Vr3KoxIsCb3C0WSfE7QKrtnL80Jk1AKj6bEpB9UUApJH8jtGhZQIw6kWOxqDJAnv2giVovMEC4rFPcbn3bvxop2IYprjfAOhBO6LFPOUAYMKApYhVNQAXVGWTPBCpAJUH5JJ4zP0ARJ8f16VlTQM+v7MHZKFNAgqbIpmo5TkCVX3k97HQuQFh/sAw2EB9AVD7djFhgUEAkZdDKZd1QQD5kGXT/ZzhAzY1wzjc6OEB19Z8SfBlNQGaaMvNQYz9AkVbo/p4kIEBs79IZUxg3QF9xzrMt60hA08ONV3JqDsCG+rQXVzU8QPKgkQiU6URA+m1mLNQnN0D8byqwlM9EQDDIF+WK2kDAeNUd5f9qP0CkAxY0Tp0DQCEdZdSA+0xAycH9zYJbVUCXZR1ah1YqwIjhH2BbLDJAGDnJT5JEUMCSrCBjYTRBQDJruc0mwURAbJ7MdRIMI0DE5dnc9lxTQHbIoCQJhEFA","dtype":"float64","shape":[165]},"y_values":{"__ndarray__":"vMq6d5DmJMAxdKI5/Q4QwD7gkBVO5jLAjWHJa+9KLEA60zWERDwlwDCscKxo70XAEGM5oASbUsBinvcr9pkjwDgiwLX3B1JAMgVdMacRSUBbtaKJlFQ0QOHBwwAZdRdAiizSzsnSKEA+Dc3OUhkiQKuTyNRbQSxAoVbrs6TrCsBKvSt3tLRNQArKC6Z7D0hAE2BjpZMD3b+lTB/ISJNAwKjU8bBcNghAhwwaf5D/HcCb655RE2xhwBImMiy5EUhADjLb7YbmRsAgqY2n9P1AQFWdB1eInElAKLdB3DowOED8AVhim+NCQNbo1EWCRUjALP+oeX4MFEBEG2V+PvRFQE7EPP6eyzZAxaIINNPkNcAHvHib4ClSQGQXKq+pxTlAMuG91Tf3XEDGQNXjL3dDwPquKnd3U0BASP+IsVw/KEAX2fv83iFBwGBaGpvIMjvAPqUOATQoQEDNgGvkXyo/QLaM34lRqhpAFGW0Rxs5PMDAOX7l+bE9wJRCRrdaCEFACppVKR9VUEChPLP6P2ZBQH+TYwBCGi1AT6kBwhT+SkCem08UT5Q+QJYTC0bQpjNAfQH2z0EaQ0CufkTOxZdDQFZyIq4SQ0TAbHeUF15/M0D23lDkwh0bQDYpzj5guznAyVGFdGZVHsBJJOrSsAM7QBPDN+15TVVATsTyAmmIQEDeCkgT6C0UwFF0Bk4xnEpA4OzH37OyRcCZFsBSDBVVQPSBHoT1kkNAhqj53YM6JEB22uhRALw2wGILeO2sYj1AdhIRnGY/L0CYCNeXohhBQP0rd/bsx1lA3J5IfUEBM8CuRkxR//RJQBMt6Sk+7jPASiiWGYzvMUD0EzCpsBpKQCopkvPXMTJAJuQGVHNxPsDYsxM5sNUdwACVmUmHFUhAtz9hupkdPEBD5mqROj8rwFdasTMjc1FAgqrgHCGsQsCVup2OP60jQPHkeFqG6DHAHYXfAkm1OMApPSy7OFQtwJZ43AjZAk5A0RXvvT7UJkDOxR31iM4iwHp51ssV3DVAS0f0UmIsMUDpKL4Y+GE5wJ44P1Z3ED3A3aE/zZsIRcBz02G0kQRSQPLcrpXo4VdA+HXC6Yk6YcBOEpgaHm0wQHe1c/DuIEdAMk8uYJ6LOsDzuUrTzxczwLBVJIhRdew/uG6J9xK7M8CDDTnDQ9AHQGCnknoiN/q/h4Jv/Ij6M0CT10MOKgxIwOH3SpHG0jbAp+DnZv8mL8AoK22nPEdCwCWS810EBzVAFUyymjtOQ0CNVm5+0HD3v9/E8hO2A0TAaVyyzKlUUUDR1BDHWOo6QI7YEnCP7DzAzavba7abKsBbAnwyxNQ8QAsL7KkfGETA8LVn6dbEUkAXkZZ8jCwxwKxCvp5eqlZAVT0j2La5FMBxYDhCAo5OQCrBpLfd3w1A4/qx1ejgREAoDqsP+fgowECKyvjEOzpA3Tvex+u9NsAyhkM3pKFMQE+oxftyB01AJg/rHjGFEkA5xqCLZpdAQA8AW6mXCQlACnkRjB78REDWUEYSdo47wBOdnkkFRyLAbr4OEpdTVUBcGlWCuWdFwApeRBB/nUZAWtdaBODLIUDTY4sKCcQyQMKon69xSy3A5Hmi4TpMUEDSKln9ABVBwNcnYbrXbERAArkhx9hUK8ACPNrLbhNEQBTb6elUZSBAz6pv8ZGsLUDAri2hyWxCQJsU28HPskZAHIUJOLGvwz/7j3y9zUVCQP3UUq2F1ENA6fD6Oi2AJsCs2f4UzeoRwOiNFmTEcThA","dtype":"float64","shape":[165]}}},"id":"abf2e970-2d1c-4420-b2d5-d5b2c5de027f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},"ticker":{"id":"eb020189-aba5-454f-a3b2-eacc258d89d5","type":"BasicTicker"}},"id":"c592166d-13f6-48de-94ec-c5056653eefe","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b239312c-6327-4671-a287-97fa804ce64d","type":"BoxAnnotation"},{"attributes":{},"id":"eb020189-aba5-454f-a3b2-eacc258d89d5","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#beaed4"},"line_color":{"value":"#beaed4"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"886925b5-0777-403b-8b60-cbc934e5f4c1","type":"Circle"},{"attributes":{"callback":null,"end":169.73532724895244,"start":-148.01561880703053},"id":"a9bd06f4-ba78-4910-964c-985db8467a31","type":"Range1d"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"36000012-7079-4890-abfc-1cbb5b782030","type":"PanTool"},{"attributes":{"axis_label":"1","formatter":{"id":"2a2febec-4465-4c5b-8aad-be5b9327dc13","type":"BasicTickFormatter"},"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},"ticker":{"id":"eb020189-aba5-454f-a3b2-eacc258d89d5","type":"BasicTicker"}},"id":"257cc261-6c18-4500-a7ef-36c31415591b","type":"LinearAxis"},{"attributes":{"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"c31c5781-71d3-436e-959e-022079df438d","type":"ResetTool"},{"attributes":{"overlay":{"id":"b239312c-6327-4671-a287-97fa804ce64d","type":"BoxAnnotation"},"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"}},"id":"675e09c7-5845-415f-bea1-9963fb3b9102","type":"BoxZoomTool"},{"attributes":{"axis_label":"2","formatter":{"id":"1ed16deb-de0a-472b-9682-b3d15cc99137","type":"BasicTickFormatter"},"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},"ticker":{"id":"fed5854d-d3ca-4e87-ad97-c0ae16b5d665","type":"BasicTicker"}},"id":"bd2411b0-902b-48bc-bd4b-d7d77cc2fc9e","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1","subtype":"Chart","type":"Plot"},"ticker":{"id":"fed5854d-d3ca-4e87-ad97-c0ae16b5d665","type":"BasicTicker"}},"id":"21272092-547d-4e96-9b07-8a6ce731242f","type":"Grid"},{"attributes":{"plot":null,"text":"t-SNE of: testis"},"id":"2c6dab57-b03b-4d24-8bed-f6e172f4ea96","type":"Title"},{"attributes":{"data_source":{"id":"abf2e970-2d1c-4420-b2d5-d5b2c5de027f","type":"ColumnDataSource"},"glyph":{"id":"5665306c-861e-4cc8-a20a-465eee40eecd","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"f6ccc43b-0020-464a-ae45-327956467eef","type":"GlyphRenderer"},{"attributes":{},"id":"648cb0ad-2a2a-49e8-bbca-53cc19bc4d85","type":"ToolEvents"},{"attributes":{"callback":null,"end":146.199252544834,"start":-165.33886832854074},"id":"a74b4ec3-ab14-4138-9511-e7a305100d97","type":"Range1d"}],"root_ids":["afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"966f7984-09b9-44ad-9c14-627d625afc5c","elementid":"1dd65d5f-bc10-48a1-a802-3a11657b2ed0","modelid":"afa3d74a-ff86-4b83-8f3d-dc9ac9f6ede1"}];
                
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
