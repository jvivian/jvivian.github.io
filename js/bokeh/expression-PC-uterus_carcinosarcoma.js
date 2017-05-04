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
      };var element = document.getElementById("cb497a24-9ec3-4034-ad37-297abbf34f52");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb497a24-9ec3-4034-ad37-297abbf34f52' but no matching script tag was found. ")
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
                var docs_json = {"249136c3-bea3-45c8-8496-bcfd3daef129":{"roots":{"references":[{"attributes":{"label":{"value":"GTEX"},"renderers":[{"id":"c040de58-07af-4541-a380-01cdc0829c01","type":"GlyphRenderer"}]},"id":"0d169706-cc6e-47e1-b443-ebd16a4932c6","type":"LegendItem"},{"attributes":{"callback":null,"end":133.7473219932525,"start":-149.0079564552976},"id":"1426b120-d556-424b-b5f7-ec0bd5e96935","type":"Range1d"},{"attributes":{"plot":null,"text":"t-SNE of: uterus_carcinosarcoma"},"id":"ee65f4c9-ee0a-4418-a958-5470d151b8fd","type":"Title"},{"attributes":{"callback":null,"end":170.16124811926704,"start":-192.9286986954444},"id":"dbce17ef-9bed-4dac-abe4-5a89df58d904","type":"Range1d"},{"attributes":{},"id":"f467fbfd-f4b3-4b24-a177-6c534fde1327","type":"BasicTicker"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"329e8f81-49b9-4ec6-970a-6adbdccb6eb8","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},"ticker":{"id":"f467fbfd-f4b3-4b24-a177-6c534fde1327","type":"BasicTicker"}},"id":"83012696-8cac-425c-8a31-1a7f4512db19","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#beaed4"},"line_color":{"value":"#beaed4"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"a42465c2-0c70-4fd4-8d6f-1b5ea49a3615","type":"Circle"},{"attributes":{"items":[{"id":"0d169706-cc6e-47e1-b443-ebd16a4932c6","type":"LegendItem"},{"id":"4f7973fb-a4a5-4fcc-b6b2-960a01d10653","type":"LegendItem"}],"location":"top_left","plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"b200dd4c-03d3-4c60-aeae-e862bc8c27fe","type":"Legend"},{"attributes":{"active_drag":{"id":"ff629dc0-c4b4-4964-9e10-6b12d7f4a96c","type":"PanTool"},"active_scroll":{"id":"329e8f81-49b9-4ec6-970a-6adbdccb6eb8","type":"WheelZoomTool"},"active_tap":"auto","tools":[{"id":"ff629dc0-c4b4-4964-9e10-6b12d7f4a96c","type":"PanTool"},{"id":"329e8f81-49b9-4ec6-970a-6adbdccb6eb8","type":"WheelZoomTool"},{"id":"4d54305b-f5d6-456c-8042-441b106975af","type":"BoxZoomTool"},{"id":"1efab8fa-f1a6-48e4-b864-8c98b6dfc4e3","type":"SaveTool"},{"id":"bc1bcf12-ac07-43f0-975a-36480a4cd23b","type":"ResetTool"},{"id":"0cfbd4ac-5224-496a-890c-cf6e6dc932e7","type":"HelpTool"},{"id":"c7609f47-a712-4202-9a31-42b18f5a62be","type":"HoverTool"}]},"id":"e1001b38-b745-4d8f-a3dd-781a94f993a6","type":"Toolbar"},{"attributes":{"axis_label":"2","formatter":{"id":"6983f3e8-6ac7-4b8f-9f22-c861e33b519c","type":"BasicTickFormatter"},"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},"ticker":{"id":"f467fbfd-f4b3-4b24-a177-6c534fde1327","type":"BasicTicker"}},"id":"6d2d4b05-92ed-4b4e-a49b-baebb53b3409","type":"LinearAxis"},{"attributes":{"label":{"value":"TCGA-Tumor"},"renderers":[{"id":"3240f360-6e53-45b0-97c7-97db21e43d89","type":"GlyphRenderer"}]},"id":"4f7973fb-a4a5-4fcc-b6b2-960a01d10653","type":"LegendItem"},{"attributes":{},"id":"9126576f-04d2-42e6-af1f-bd104aad1822","type":"BasicTicker"},{"attributes":{},"id":"4ed6a51a-e744-4eb0-b600-c1bb4c8a3bd6","type":"ToolEvents"},{"attributes":{"data_source":{"id":"0659ef7e-90f2-45f8-aee3-6202249b364c","type":"ColumnDataSource"},"glyph":{"id":"a42465c2-0c70-4fd4-8d6f-1b5ea49a3615","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"3240f360-6e53-45b0-97c7-97db21e43d89","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"},{"type":"TCGA-Tumor"}],"sample":["TCGA-N5-A4R8-01","TCGA-N5-A4RA-01","TCGA-N5-A4RD-01","TCGA-N5-A4RF-01","TCGA-N5-A4RJ-01","TCGA-N5-A4RM-01","TCGA-N5-A4RN-01","TCGA-N5-A4RO-01","TCGA-N5-A4RS-01","TCGA-N5-A4RT-01","TCGA-N5-A4RU-01","TCGA-N5-A4RV-01","TCGA-N5-A59E-01","TCGA-N5-A59F-01","TCGA-N6-A4V9-01","TCGA-N6-A4VC-01","TCGA-N6-A4VD-01","TCGA-N6-A4VE-01","TCGA-N6-A4VF-01","TCGA-N6-A4VG-01","TCGA-N7-A4Y0-01","TCGA-N7-A4Y5-01","TCGA-N7-A4Y8-01","TCGA-N7-A59B-01","TCGA-N8-A4PI-01","TCGA-N8-A4PL-01","TCGA-N8-A4PM-01","TCGA-N8-A4PN-01","TCGA-N8-A4PO-01","TCGA-N8-A4PP-01","TCGA-N8-A4PQ-01","TCGA-N8-A56S-01","TCGA-N9-A4PZ-01","TCGA-N9-A4Q1-01","TCGA-N9-A4Q3-01","TCGA-N9-A4Q4-01","TCGA-N9-A4Q7-01","TCGA-N9-A4Q8-01","TCGA-NA-A4QV-01","TCGA-NA-A4QW-01","TCGA-NA-A4QX-01","TCGA-NA-A4QY-01","TCGA-NA-A4R0-01","TCGA-NA-A4R1-01","TCGA-NA-A5I1-01","TCGA-ND-A4W6-01","TCGA-ND-A4WA-01","TCGA-ND-A4WC-01","TCGA-ND-A4WF-01","TCGA-NF-A4WU-01","TCGA-NF-A4WX-01","TCGA-NF-A4X2-01","TCGA-NF-A5CP-01","TCGA-NG-A4VU-01","TCGA-NG-A4VW-01","TCGA-QM-A5NM-01","TCGA-QN-A5NN-01"],"tissue":["Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma","Uterus_carcinosarcoma"],"type":["TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor","TCGA-Tumor"],"x_values":{"__ndarray__":"RYJ5Wap5YUBzQlzW7J1DQFDFen2L1lBAWq+nHCbfSEBBYmUrJLsvQJC44S53B0VABVf6dHzjNED83O2l8HJNQIvlHBKgLlFAagQpv2FKPMCAlSMe9zFGQD6WD1YaxzhAoehXE0WYTUDUNt+SbEwoQBdmECXoTkTAQBa0x8ICQEDaOft+elVkwF4K2X25Jx7A6h+pVIoFM0BDFAzYZCEYQLIsGjpeNFJAZ+ZYlXOa4b82qNV7Sl9TQLHN19hx3UBAo+pOtYBSS8CuwPSvT4EKQDJ+x49lES1AoDU4lyiWPMCNeniK63xhQMwEhzIqIEJAmtFK5J9oXkCw8bAg/JcZQBXC1+TMUC/A2+4zAprfQUCQFAycwRwwwBGVmy/9HTVA7RmfdO/3D8BNihS3kMRQQNA2UhhECCdAUu4UIpvgPEAq/bp8R4VBQGEIoqdDhxPA2Uac50XBT0AyF0l6LAFawCPjPkrPo/I/kv0pADNCSEDt9yhK6881QO93wK9rY1VA2Urrrjn4WkAhMgd/v3pZwB4Tpfh1NCpAIoPSor0tWEDpSiSOw9BRQF2NMwWwKyLAw38YR3BKPkDTSSkJeR1VwCyTSDirE+U/","dtype":"float64","shape":[57]},"y_values":{"__ndarray__":"LABwWLaKB0D6E0q6aGtOwMiQNIR5ritASCd6/gmlU8ACylu3gDBIwPn5i8l/wFVAqcph5be4VcA4VGC/zoczwOdUx0cWpkPAEYJtOLldUsCq1qZxRDc0wAZYIZpzFFHAiXCYKeVcP8CwkazqzItbQDlEc16qLkXAx98mmdIvQMBXV82QDQVJwBhZLeMs61fAhkxrELJeNsAzpXgJ6EJQwHasXQzYBVHAWCEMSD7iVMBlVZotPDI4wPT4LkxY/E9Ade+L/5YiVEAEK/XNQ9VLwAjhk7KmW1LA4Qp3XDm0VsDGlD7UpTxTwG01paQQs0bAYmSuFwuzSUCyejjKaVVOQPg6HO1uvEbAKG1OHq3OVsDaTVFdeExNwEWYLs6MylZAQvcfB5PAPsB270uaBeJKwOUYzf0tqkHAmz9Ht7l9TMAtEoTX3FpSwJItVGH9vU/AUFGrcQ++IMAGLemLE2ArQNuZxBRSd1VA1DNqC6ejUMBIcHfjjVRDwAXvflt0/wtAFyGLtMM74D9DYAn+un1MQHUyLa7zc03A7vzkg6LuJ8DFx6duO3UGwCzjKnQvnFPAHK6zDvRmMsCRXW0of0s6QOHNIQIm4UXA","dtype":"float64","shape":[57]}}},"id":"0659ef7e-90f2-45f8-aee3-6202249b364c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},"ticker":{"id":"9126576f-04d2-42e6-af1f-bd104aad1822","type":"BasicTicker"}},"id":"de6098a5-4c8d-4903-920d-1e71481cb5cf","type":"Grid"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"1efab8fa-f1a6-48e4-b864-8c98b6dfc4e3","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ad0f24ea-e98e-49cb-a8d1-3d362b2251f6","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6dc8dd50-d0ab-41a6-95a2-fd0e70a11369","type":"ColumnDataSource"},"glyph":{"id":"3098dca9-03e5-4f31-b3e8-65257b370346","type":"Circle"},"hover_glyph":null,"muted_glyph":null},"id":"c040de58-07af-4541-a380-01cdc0829c01","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"bc1bcf12-ac07-43f0-975a-36480a4cd23b","type":"ResetTool"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"0cfbd4ac-5224-496a-890c-cf6e6dc932e7","type":"HelpTool"},{"attributes":{},"id":"6983f3e8-6ac7-4b8f-9f22-c861e33b519c","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"ad0f24ea-e98e-49cb-a8d1-3d362b2251f6","type":"BoxAnnotation"},"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"4d54305b-f5d6-456c-8042-441b106975af","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#7fc97f"},"line_color":{"value":"#7fc97f"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3098dca9-03e5-4f31-b3e8-65257b370346","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},"tooltips":[["Tissue","@tissue"],["Type","@type"],["Sample","@sample"]]},"id":"c7609f47-a712-4202-9a31-42b18f5a62be","type":"HoverTool"},{"attributes":{},"id":"5905d407-7402-4413-a831-fe61aa13e479","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"d8d94632-6d9a-4439-9ac4-238c195787fb","type":"LinearAxis"}],"css_classes":null,"left":[{"id":"6d2d4b05-92ed-4b4e-a49b-baebb53b3409","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ad0f24ea-e98e-49cb-a8d1-3d362b2251f6","type":"BoxAnnotation"},{"id":"c040de58-07af-4541-a380-01cdc0829c01","type":"GlyphRenderer"},{"id":"3240f360-6e53-45b0-97c7-97db21e43d89","type":"GlyphRenderer"},{"id":"b200dd4c-03d3-4c60-aeae-e862bc8c27fe","type":"Legend"},{"id":"d8d94632-6d9a-4439-9ac4-238c195787fb","type":"LinearAxis"},{"id":"6d2d4b05-92ed-4b4e-a49b-baebb53b3409","type":"LinearAxis"},{"id":"de6098a5-4c8d-4903-920d-1e71481cb5cf","type":"Grid"},{"id":"83012696-8cac-425c-8a31-1a7f4512db19","type":"Grid"}],"title":{"id":"ee65f4c9-ee0a-4418-a958-5470d151b8fd","type":"Title"},"tool_events":{"id":"4ed6a51a-e744-4eb0-b600-c1bb4c8a3bd6","type":"ToolEvents"},"toolbar":{"id":"e1001b38-b745-4d8f-a3dd-781a94f993a6","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"dbce17ef-9bed-4dac-abe4-5a89df58d904","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1426b120-d556-424b-b5f7-ec0bd5e96935","type":"Range1d"}},"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"1","formatter":{"id":"5905d407-7402-4413-a831-fe61aa13e479","type":"BasicTickFormatter"},"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"},"ticker":{"id":"9126576f-04d2-42e6-af1f-bd104aad1822","type":"BasicTicker"}},"id":"d8d94632-6d9a-4439-9ac4-238c195787fb","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x_values","y_values","tissue","sample"],"data":{"chart_index":[{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"},{"type":"GTEX"}],"sample":["GTEX-1117F-2426-SM-5EGGH","GTEX-113JC-2226-SM-5EGJG","GTEX-11DXX-1526-SM-5H115","GTEX-11EM3-1926-SM-5987U","GTEX-11I78-2126-SM-5A5K8","GTEX-11P81-1626-SM-5BC52","GTEX-11ZTS-2326-SM-5EQMY","GTEX-11ZTT-1726-SM-5EQL4","GTEX-12WSD-2826-SM-59HKT","GTEX-12WSG-2126-SM-5EGJ7","GTEX-12WSK-2026-SM-5CVNB","GTEX-12ZZX-2126-SM-5LZVL","GTEX-1313W-2826-SM-5P9G1","GTEX-131XG-2026-SM-5GCN5","GTEX-131YS-2326-SM-5IJFJ","GTEX-132AR-1526-SM-5KM1L","GTEX-1399S-2226-SM-5IFEW","GTEX-1399U-1326-SM-5IJET","GTEX-139D8-2526-SM-5N9G3","GTEX-13D11-1226-SM-5IFGA","GTEX-13FTX-1026-SM-5J2O5","GTEX-13N11-1126-SM-5KM41","GTEX-13OVI-1026-SM-5L3EM","GTEX-13OVJ-2326-SM-5IJGA","GTEX-13PL7-2026-SM-5IFGK","GTEX-13QBU-1626-SM-5LU4S","GTEX-13S7M-1726-SM-5RQK3","GTEX-13U4I-1926-SM-5LU39","GTEX-13VXT-1626-SM-5IJES","GTEX-145ME-1326-SM-5O98Q","GTEX-14BIM-2226-SM-5SI8Y","GTEX-14BMU-1826-SM-5RQII","GTEX-N7MT-0726-SM-3TW8S","GTEX-OHPK-2026-SM-3MJH7","GTEX-OHPL-2026-SM-3TW8R","GTEX-P4PP-2026-SM-3P61N","GTEX-P4QT-2026-SM-3NMCJ","GTEX-P78B-2526-SM-3P5ZY","GTEX-POMQ-1226-SM-3P61F","GTEX-PWCY-1426-SM-48TCT","GTEX-PWN1-2026-SM-48TD9","GTEX-PX3G-2026-SM-48U1H","GTEX-Q734-1626-SM-48U1B","GTEX-QCQG-1326-SM-48U24","GTEX-R55G-1626-SM-48FF4","GTEX-RU72-2626-SM-4TT75","GTEX-RWS6-1326-SM-47JXB","GTEX-S341-1026-SM-4AD71","GTEX-S4UY-1226-SM-4AD51","GTEX-T2IS-2226-SM-4DM65","GTEX-T5JW-1526-SM-4DM5E","GTEX-T6MO-1526-SM-4DM57","GTEX-TMMY-2226-SM-4DXTN","GTEX-U3ZN-0726-SM-4DXT5","GTEX-UPIC-1526-SM-4IHLU","GTEX-W5WG-1326-SM-4LMI9","GTEX-WEY5-0726-SM-4LMID","GTEX-WI4N-2426-SM-4OOSC","GTEX-WWYW-2826-SM-4MVOQ","GTEX-WXYG-1326-SM-4ONCN","GTEX-WYVS-1226-SM-4ONCL","GTEX-XUJ4-1526-SM-4BONU","GTEX-XUW1-0226-SM-4BOOS","GTEX-XUZC-0926-SM-4BOQF","GTEX-XV7Q-1526-SM-4BRWB","GTEX-XYKS-1626-SM-4BRUQ","GTEX-Y3IK-2126-SM-4YCDS","GTEX-YFC4-2826-SM-5P9FR","GTEX-YJ8O-1126-SM-5P9IS","GTEX-ZAJG-2826-SM-5HL8D","GTEX-ZAK1-2526-SM-5S2N7","GTEX-ZLWG-1026-SM-4WWC4","GTEX-ZP4G-0726-SM-4WWF2","GTEX-ZTPG-2026-SM-5O999","GTEX-ZV6S-1526-SM-5NQ7O","GTEX-ZVT2-0426-SM-5E44S","GTEX-ZXES-0726-SM-5E451","GTEX-ZYVF-0526-SM-5E43E"],"tissue":["Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma","Uterus_endometrioid_carcinoma"],"type":["GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX","GTEX"],"x_values":{"__ndarray__":"GfIpLedpK0C4/qw5UMRJQEfvmct7bUJA0UAAif7gVUCBqKlNjLdMwNTcJ1ywxi9ARnQjCkUsHsAWNWpcvE0wQP+AcVR0JyLAOLgII7QoVMBaQYpWNqwVwACoVMCv4EnAjKxavlERUsBZqpzAtVpPwArqcje1sD/AkrsBXVxVOcA4mpVITeAuwNvqoPHiMcU/9IkVVFZCM8DHwe7/B/1QwAbpCbJtOxdAs6XOxsFvOcAXaQH3bRxSwEK8fq/o1kdAeA33NKzzQUBLVWceSe9VQNFfVemtz0bA+Te78kooOMAJK/dHYpM+wNFZW3RUFEfANo+rbsIIUkAmuAMuocRUwDuUUEde50ZAKr3LDBj1V0BR7GU+CVtHQC+z8TGM+kzAQIpbbmO5N0D2Feo2bwgtwK0eB5VoyElAHCNunDeITcBCZ+jHv69AwJkfnOA2x8A/sz+ERMwIGkBb2mm7eSRNwClZBiSYs1XA4YgFVMsxOECVxb4IWZ5MwLaaRYskFkTAdmgHwykMKsDcTYu7zsk2wLHoAgd44TXAxViwROeVD8Dbt+dLZPAoQO+U0b8sKRNAqqlrrTffAEBBAEPpIcJNwOXRTMjgVEbAxNGARDpGPsA0AgCdep1DwLX+Wi8AWEHAKGYdfSMJDkCT/yo/4+1CwHzB4UuUKDRAQyR8a9K9UMDGi3tN969HwEGrUT2bRlDA1ZJd3pX5MMCMvAweHoNAQKHify+7oD9AGWui8SJ5VcBjWBWCvApHwIxhEHovpgnAkO4FzscfTEAuAUUaY9QmwHsdYinvkznAvWx5g/YhM0DEW+R7R9lGQNK0VkIP1kZA","dtype":"float64","shape":[78]},"y_values":{"__ndarray__":"zN7NCPJaGcCU81Tlpc9GwFwR9xclakhAtjqGb1KMRMAOAhJtpWpAQDtJaN941klAKPjtcqKCKUDQ5UfVp9scQN2XaTqBlVBAoAybV2KjQMD0tDaDfZc6QMKAYbCEwjbAVzqJiv1cNsB89L8PDfVDQKCjmb8HGzdAWBCI8G9aVUD96BJfFHs9QGR+lS+DZABAsc9UAdtPMECqIJQyZTpRQMyEtjz3oj9An9JMlxFCHsCft07zrMEhQCEZzv061yNA3CuVxfwYNECRTGd1N3hCQP07lXglNipAQxLBsniuD0DWLQftvXknQAJcyFSyUU5AvhKmwJ72VMBK16xV3N0TwFpXHW8tkwjAPvgZkIKJOsD11jDI1XlFQB4+1yZ7XF/An4v+uFtHPED/Ka94Y7QTQJqtUqi7vE9Aq75xaRJFGUCKJdNlMl1KQAub0yMBTSnAjEbO5elfRUBTKeru7RNFwHK+ZbfW/h5AvzKR1q5ZLkB9bzKMnNEwQJKMM4QkFhJANRFN9NucRUDZAaJYzjFJQJIzFa/JZE9AV/Kk1FeqQkCXQZOApQ43QKOcdVwpHFJAtQZrn1DCNUAk0rUnLjogwB1Q/nwkm0hA5b3POBztPcAAMpR5Hs40wDAuJvG93E9Ak8QDaMcfKUAHFRqyF2dDQNirtfI00lFAF/hsg1OzN0C1RTj8X987QPkpV+WS5klAISG4EVcCMcDqSuT4hsxBQFGdqPyI2xJAeNQW3bGjRUChyj2KY5khwJYnWdg8cElAZor0peSFSUDMb9duAXkcwJ9Eo49su0FAUGDx9BQzREDPkfKxX8U7QJohlmO8yEDA","dtype":"float64","shape":[78]}}},"id":"6dc8dd50-d0ab-41a6-95a2-fd0e70a11369","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"904ed972-38d1-4ced-80ef-42e2719cbb4f","subtype":"Chart","type":"Plot"}},"id":"ff629dc0-c4b4-4964-9e10-6b12d7f4a96c","type":"PanTool"}],"root_ids":["904ed972-38d1-4ced-80ef-42e2719cbb4f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"249136c3-bea3-45c8-8496-bcfd3daef129","elementid":"cb497a24-9ec3-4034-ad37-297abbf34f52","modelid":"904ed972-38d1-4ced-80ef-42e2719cbb4f"}];
                
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
