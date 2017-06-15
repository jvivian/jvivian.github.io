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
      };var element = document.getElementById("a05e7db3-5d90-44ef-9929-8a17c509e8aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a05e7db3-5d90-44ef-9929-8a17c509e8aa' but no matching script tag was found. ")
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
                var docs_json = {"21a379d9-3ca8-4203-9b21-b97e07e579a5":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"},{"dist":"(0.3, 0.5]"}],"dist":["(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]","(0.3, 0.5]"],"values":{"__ndarray__":"BmRDecmb3D+uNT0eSgPYP1gBYTyJ9ds/ADheQkvg3j8g8WbxffDcPxq9ABwxQd4/PB0im4S83j/EnciE2nnePy6+PSeWO9w/IGAnbQla1z+E9p8emUndP/oBogNMaN4/kD3WAbTU1T+MXpv57iXeP0AjLqY5M90/Vvrp78272j+ykjszWYndP8wqfBmRxtw/yBipx+KS1z/2RhIpYojeP34GA04OUNw//GnYNnly3j+UCO9UQgDeP05CU0PBgto/CiGaVhGm1z+KgR9wXJzeP+yX4XxQAdg/MA0wAiRq3j8SLwZG+ZbXP3x0ZNwr7No/lg8pRfms1j8Y5mWmFmvbP76vzW2wc90/uggqyMdT3D/8UFWz2KreP7Ag5gNMRdg/UOtC/dlT3T9wQrcGgPfWP8wgJk/mQ9w/MpmpFsFf2j+euHZlp63cP/YJ93Fk4dk/8md3gR/H2D+cDmzfd+XcPyp2h1cc09Y/ckfADrDi2j8QChY+cN7cPyK6OSL0Xt4/tKk5MstN2D/i1F0Mv1feP2rhFyo8Odk/IAWBBnr+2j+GfUQU6jndPwR5gEoU9Nk/3kWwoNlo2j92iqdJSgjbP/odN/6F7Nw/hEJwB75x2T8qgpJCxSffP+ZNZCwtKdo/1oUJQIhT2D+0cbStAbreP4z908eJ/N0/ePKrZV7C1j/ipBp5dlvaP+4yxYe3v94/kPdP+z9b3T9mgQllONDcP5yU4xHNa90/uNxu826/2j/KyNi4GfjeP/wbFYE3bdw/0q1z4I312j8Kvxv5A7PfP+K7YCFoct4/5r13v6B22D/8+zvqarLeP6T3hoNzFNs/UtK0elxC3z+i7u20Aw3aP5yOp3R4194/xiGnCdvY3j8UZ1KF+VraP9jKfm6489w/8lJ+3oRf3j+6KztEKj/ZP77t3eg3gNc/tNTwzslg1j8IawflifTYP3b7tdiL8Nw/QMVftcpG2T/88GdPGcDcPy595tKOaN8/KGCUrhDh3T/myX1tmQHWP27IfEItp9g/YHUQhzu/3z/sZHg16AjcP2xAIHyRINk/Km00z3K+2T8mIvP/7rzXP375FSOA19k/lp7ECago2j/a0wcvQ1vcP/QosSrMPNs/fGF/HxnX3D/4OHUMgR3aP2DKIZL+Bto/vIubX8U22D/ElNn4hrHYP+LCn/Qhuto/wFy5TqbZ1T8O5EjF/I3YP5yui9IXINc/zCqiQPb21z/gMFQaqlPYPz7qzxF8kNk/3oDRG20Y3j9GUB4kmR3cPzA5jF+pd9U/pmM1HW7T2T8QYZ0ECoDbP5rf50VDEdo/OsdY2shs2j8YgVRLZ17eP8DphP5fhd0/UFkZu2O+3T/gx/IkcATdP/TUyMzpP9w/Uk+vAOWv2D8=","dtype":"float64","shape":[130]},"x":["bladder","bladder","bladder","bladder","bladder","bladder","breast","breast","breast","breast","breast","breast","cervix","cervix","cervix","cervix","cervix","cervix","cervix","cervix","cervix","colon","colon","colon","colon","colon","colon","colon","colon","colon","colon","colon","colon","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","esophagus","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","kidney","kidney","kidney","kidney","kidney","kidney","kidney","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","pancreas","pancreas","pancreas","pancreas","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","prostate","skin","skin","skin","skin","skin","skin","skin","skin","skin","skin","skin","stomach","stomach","stomach","stomach","stomach","stomach","stomach","stomach","stomach","stomach","stomach","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma"],"y":["ovary","skin","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","cervix","colon","skin","testis","uterus_endometrioid_carcinoma","adrenal","bladder","cervix","colon","esophagus","head_and_neck","skin","stomach","testis","bladder","breast","cervix","head_and_neck","kidney","lung_mesothelioma","lung_squamous","ovary","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","breast","cervix","esophagus","head_and_neck","kidney","lung_mesothelioma","lung_squamous","ovary","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","colon","kidney","skin","stomach","testis","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","cervix","colon","esophagus","head_and_neck","stomach","testis","adrenal","colon","esophagus","liver","skin","testis","uterus_carcinosarcoma","bladder","cervix","colon","head_and_neck","testis","uterus_carcinosarcoma","bladder","cervix","skin","uterus_carcinosarcoma","bladder","breast","cervix","colon","esophagus","head_and_neck","kidney","lung_adenocarcinoma","lung_mesothelioma","ovary","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","breast","cervix","colon","esophagus","head_and_neck","ovary","pancreas","stomach","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","breast","esophagus","kidney","lung_mesothelioma","lung_squamous","ovary","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","cervix","esophagus","head_and_neck","lung_squamous","prostate","skin","stomach","testis","uterus_carcinosarcoma","adrenal","bladder","cervix","colon","esophagus","head_and_neck","skin"]}},"id":"90f4b44c-0eeb-4d9a-bbda-92a19f132d1b","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"},{"dist":"[-0.001, 0.2]"}],"dist":["[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]","[-0.001, 0.2]"],"values":{"__ndarray__":"9I+0SVgDwj/sLPAoeSTDPxw3SVe8EME/LJU5wdowxT9Mywm9MjLCP0R4pRyha8I/AAAAAAAAAAD4t5zdkyW/P+DHWWCKBb8/jBcXam5hwj+AR3ZSLLzCP0xkCjMxl8Q/RA6eiD1rwD/ATCVboc+tP5zUjtN7BsU/OOs9OWPkuj9YkrJok3m0P/RY8kyiL8M/","dtype":"float64","shape":[18]},"x":["breast","cervix","colon","esophagus","liver","liver","liver","liver","liver","liver","liver","liver","liver","liver","lung_squamous","prostate","prostate","stomach"],"y":["liver","liver","adrenal","adrenal","breast","cervix","esophagus","head_and_neck","lung_squamous","ovary","prostate","skin","stomach","uterus_carcinosarcoma","liver","adrenal","liver","adrenal"]}},"id":"86eeb937-3574-4771-9fc2-1cb6f64ca18f","type":"ColumnDataSource"},{"attributes":{"align":"center","plot":null,"text":"Average Euclidean Distance UCSF-409 Genes"},"id":"82efaf40-5c0b-4715-86e1-e8f6bd31a0c7","type":"Title"},{"attributes":{"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"fc19aa7e-72d3-4ae6-8562-e65771453bcc","type":"HelpTool"},{"attributes":{"axis_label":"Tumor","formatter":{"id":"61445a05-7f0b-4422-ba0c-18ffdc3fd0e4","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"},"ticker":{"id":"a963c83d-e8aa-46e9-a72f-542e8b348eff","type":"CategoricalTicker"}},"id":"e7c86512-cbd2-4e54-968f-5652e97ff9dd","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"(0.8, 1]"},{"dist":"(0.8, 1]"},{"dist":"(0.8, 1]"}],"dist":["(0.8, 1]","(0.8, 1]","(0.8, 1]"],"values":{"__ndarray__":"AAAAAAAA8D9av+uYNp7vP8O35nzaLu0/","dtype":"float64","shape":[3]},"x":["pancreas","prostate","thyroid"],"y":["pancreas","prostate","thyroid"]}},"id":"98da2a1b-e274-4f9b-91da-46d5964eb94b","type":"ColumnDataSource"},{"attributes":{},"id":"925d1ac6-c586-449b-8013-f93f404c5cf7","type":"CategoricalTicker"},{"attributes":{"data_source":{"id":"86eeb937-3574-4771-9fc2-1cb6f64ca18f","type":"ColumnDataSource"},"glyph":{"id":"517f40b3-2e3a-40aa-afb0-c0597e25bcdd","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"8aa8b6d8-562b-48d7-96b5-ecf972a38217","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"939bc9a7-df8d-4202-a770-0292c1d6c3bc","type":"PanTool"},{"id":"764d0993-b260-4265-a9bb-4fae24624eb4","type":"WheelZoomTool"},{"id":"0895d0e6-24a2-4ae6-a919-b008ccb1a162","type":"BoxZoomTool"},{"id":"8f93a48c-060a-4177-a757-fdef92a9a168","type":"SaveTool"},{"id":"92d31987-f716-4595-81e9-aeb76d759078","type":"ResetTool"},{"id":"fc19aa7e-72d3-4ae6-8562-e65771453bcc","type":"HelpTool"}]},"id":"873fd08a-cb59-413c-a142-c8d222ea11a2","type":"Toolbar"},{"attributes":{"data_source":{"id":"dcf3ce7d-2db2-428f-ba88-e4d45fe4d491","type":"ColumnDataSource"},"glyph":{"id":"35946f58-fe34-4a87-845b-f90c7653bebd","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"2e1db99f-9951-40a4-9bf5-b9257852f6e3","type":"GlyphRenderer"},{"attributes":{},"id":"a963c83d-e8aa-46e9-a72f-542e8b348eff","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#eff3ff"},"height":{"units":"data","value":0.95},"line_color":{"value":"#eff3ff"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"517f40b3-2e3a-40aa-afb0-c0597e25bcdd","type":"Rect"},{"attributes":{"data_source":{"id":"90f4b44c-0eeb-4d9a-bbda-92a19f132d1b","type":"ColumnDataSource"},"glyph":{"id":"d4770b6f-2bb5-47e6-9644-e047de1df993","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"3a94bf74-c5e6-4417-8e22-1d5a378b2b87","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"939bc9a7-df8d-4202-a770-0292c1d6c3bc","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"},{"dist":"(0.7, 0.8]"}],"dist":["(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]","(0.7, 0.8]"],"values":{"__ndarray__":"0KdZbYyz5z/8ZkJUf7zlP2C8P2ZzvOU/hJn/KRCD5T/E946cRlrqP7Pzbc7ckug/O2ckB2Sf5T/85WenA/DoPzUaG+3VOeY/CPZXzPkS6T/oRLqWDFXqP4hXlK4BdOU/1FCHfF6o6j957VYIGTnmPyQ4YSL3ROY/aJ8vZRtz6T9qNj9pJp/mPxoC7Z4v4uU//FPXJSTe5z8wddKQXmLmP2HqeFkf9+U/ltauKEbj5T8=","dtype":"float64","shape":[22]},"x":["breast","breast","breast","cervix","colon","colon","colon","colon","head_and_neck","kidney","liver","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_squamous","lung_squamous","lung_squamous","pancreas","pancreas","skin","uterus_endometrioid_carcinoma"],"y":["breast","pancreas","prostate","kidney","colon","pancreas","prostate","stomach","head_and_neck","kidney","liver","kidney","lung_adenocarcinoma","pancreas","thyroid","lung_adenocarcinoma","pancreas","thyroid","lung_adenocarcinoma","stomach","skin","kidney"]}},"id":"7a8025b1-71d7-405b-8157-5f5459a7be01","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"98da2a1b-e274-4f9b-91da-46d5964eb94b","type":"ColumnDataSource"},"glyph":{"id":"cf447177-78a3-422e-8e24-4266fdc58724","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"5ef3501b-1d0a-4687-8dc9-57515791467f","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["bladder","breast","cervix","colon","esophagus","head_and_neck","kidney","liver","lung_adenocarcinoma","lung_squamous","pancreas","prostate","skin","stomach","thyroid","uterus_endometrioid_carcinoma"]},"id":"5bc30c10-7a04-4a33-a0ca-4ec76771a496","type":"FactorRange"},{"attributes":{"callback":null,"factors":["adrenal","bladder","breast","cervix","colon","esophagus","head_and_neck","kidney","liver","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","pancreas","prostate","skin","stomach","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma"]},"id":"13c789aa-4b08-40e9-a8c0-9b503831959a","type":"FactorRange"},{"attributes":{"below":[{"id":"03dfb81b-e86d-400f-abd2-333b54ac44fe","type":"CategoricalAxis"}],"css_classes":null,"left":[{"id":"e7c86512-cbd2-4e54-968f-5652e97ff9dd","type":"CategoricalAxis"}],"plot_height":512,"plot_width":512,"renderers":[{"id":"204fc892-edc3-4e43-9451-f551e14a985f","type":"BoxAnnotation"},{"id":"5ef3501b-1d0a-4687-8dc9-57515791467f","type":"GlyphRenderer"},{"id":"bc7e8336-6b9e-4a5c-bcfa-4eeb9587e7a0","type":"GlyphRenderer"},{"id":"0ff182c8-724a-42de-a7d1-6fd5cb6d451c","type":"GlyphRenderer"},{"id":"3a94bf74-c5e6-4417-8e22-1d5a378b2b87","type":"GlyphRenderer"},{"id":"2e1db99f-9951-40a4-9bf5-b9257852f6e3","type":"GlyphRenderer"},{"id":"8aa8b6d8-562b-48d7-96b5-ecf972a38217","type":"GlyphRenderer"},{"id":"03dfb81b-e86d-400f-abd2-333b54ac44fe","type":"CategoricalAxis"},{"id":"e7c86512-cbd2-4e54-968f-5652e97ff9dd","type":"CategoricalAxis"}],"title":{"id":"82efaf40-5c0b-4715-86e1-e8f6bd31a0c7","type":"Title"},"tool_events":{"id":"cc45c76e-ecaf-4698-b6ab-ccd85876d61a","type":"ToolEvents"},"toolbar":{"id":"873fd08a-cb59-413c-a142-c8d222ea11a2","type":"Toolbar"},"x_mapper_type":"auto","x_range":{"id":"5bc30c10-7a04-4a33-a0ca-4ec76771a496","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"13c789aa-4b08-40e9-a8c0-9b503831959a","type":"FactorRange"}},"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"},{"dist":"(0.5, 0.7]"}],"dist":["(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]","(0.5, 0.7]"],"values":{"__ndarray__":"sIjZDxhf4z/ITHkHBq3gP9Iyh4iueOE/PJPYRwsv4T/5haBK92LhP3rABZw3FeI/HLoiOu6/4j+Y1q3I5xrjP7bpgrtBH+E/P3z+foPh4z9TT2DwvuHkP2C6UWbfiOQ/+m9AmV+n4j+tcgsxZFLiP2SttCqIceE/1FkAhTzY5D/8bpC1GvrjPycb19/SO+I/081lh2UM5D8QQCmj5PvgP+taedXif+I/PdPlsYva4z99vAus2IrgPwfzBCdFo+A/MhNfaSdA4D94DR1dA6XjP+wgplyeqeA/JPKUiA584T+j+qG8yMbhP7Pskcs47uE/3phGO+WJ4T+Pd6BlNnzhP6aqp2WyxeA/ns/OL8pC4T+YUOleVL3iPxKn/R7HX+A/hMM4bpUq4j+LmbD730XkP0yZvkrC+uE/BgJDOkWI4j+d1h55vyjiP1Q6XHh7l+E/DHSSk+i64j+L9+y1kgHhP/pawnU5m+I/4oj2+Vfr4D/+v5xs47DkPzNvvNscBOA/lixuDrih4T8uzlI+FOngP0yzW11k2OE/yjLLMRY94T/stY5kL8XiP1WA+9NzPOA/3DgscJoz4D/aJ2iLHq7hPyLfs7llbOM/ToyWz2if4D8cf1XWTpvjP5yVYMkmLeA/ai64Bpkp4j+Ee1LM0Y7hP8hqukukLOM/3+1dIOFB4D+sz/Eo+U3gP6r75pjjBuU/bj/2Icjv4z+uwCVGnvHjP6fP/7v45uA/mJUkxv274T+dYwgfsEfjPwkw63xgu+M/qrwOKpyU4D/Q++FBKx7lP+KHJ5/bVeM/sFGv26HY4z/WXqE69G3jP76t8/X3nuA/Ij1nzrrN4j/oNFSIH3fgP4b+Ebw/ieQ/2nFGkTCO4j/eUAatQL7hP0B5zK4weeA/4B2Mgion5T/IGTEIw+/kPyU3RmIWkeM/WCY8poOm4j/K8d192g/iP5BGj4GfIOI/MDj/HOqg4z9Uq+8a5ZfgPwngZrVmJOA/HD7fXFx74z8aOP7VAhDhP0l/MH01hOM/8MgJ9VgC4T+3PgpbsL3gP2aeEeC97+A/3I0Tg4i74j9HAhMtUjnhP1ZPvPN5uOA/NFx4LX6d4T85psRdibrkP38P+v0jZuE/zB26PO454z9wO6vNfwjhP4bKZkOIpeQ/bNigAYov4j8c8nZ261LhP5Rxc1jcFuI/c7CSDZQz4D94DKh3Kn3gP1KPEM5dQuI/njY/kMeh4j99ZicTkXPkP0TI4CVnbeE/md7lKlZ95D+7svwcc6vjP0dOWe23A+M/8sRjR9kb4D92rmNQd6fgP9zNcOfAPOM/Qib/SrOJ4z8iqAvWK33kPw==","dtype":"float64","shape":[125]},"x":["bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","bladder","breast","breast","breast","breast","breast","breast","breast","breast","breast","breast","cervix","cervix","cervix","cervix","cervix","cervix","cervix","cervix","cervix","cervix","colon","colon","esophagus","esophagus","esophagus","esophagus","esophagus","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","head_and_neck","kidney","kidney","kidney","kidney","kidney","kidney","kidney","kidney","kidney","kidney","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_adenocarcinoma","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","lung_squamous","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","pancreas","prostate","prostate","prostate","skin","skin","skin","skin","skin","skin","stomach","stomach","stomach","stomach","stomach","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","thyroid","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma","uterus_endometrioid_carcinoma"],"y":["bladder","breast","cervix","colon","esophagus","head_and_neck","kidney","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","pancreas","prostate","stomach","esophagus","head_and_neck","kidney","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","stomach","thyroid","uterus_carcinosarcoma","breast","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","pancreas","prostate","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","esophagus","lung_adenocarcinoma","colon","lung_adenocarcinoma","pancreas","prostate","stomach","bladder","breast","cervix","esophagus","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","pancreas","prostate","thyroid","breast","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","pancreas","prostate","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma","bladder","breast","cervix","head_and_neck","lung_mesothelioma","lung_squamous","ovary","prostate","stomach","uterus_endometrioid_carcinoma","breast","esophagus","kidney","lung_mesothelioma","lung_squamous","ovary","prostate","stomach","uterus_endometrioid_carcinoma","breast","colon","esophagus","head_and_neck","kidney","lung_mesothelioma","lung_squamous","ovary","prostate","testis","thyroid","uterus_endometrioid_carcinoma","lung_squamous","pancreas","stomach","kidney","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","testis","thyroid","colon","lung_adenocarcinoma","pancreas","prostate","stomach","breast","kidney","lung_adenocarcinoma","lung_mesothelioma","ovary","pancreas","uterus_endometrioid_carcinoma","breast","lung_adenocarcinoma","lung_mesothelioma","lung_squamous","ovary","pancreas","prostate","stomach","testis","thyroid","uterus_carcinosarcoma","uterus_endometrioid_carcinoma"]}},"id":"88b027d5-eddf-4b22-822a-f9f6153eb94f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7a8025b1-71d7-405b-8157-5f5459a7be01","type":"ColumnDataSource"},"glyph":{"id":"f02caf73-3974-460f-a380-15b27c84d680","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"bc7e8336-6b9e-4a5c-bcfa-4eeb9587e7a0","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"204fc892-edc3-4e43-9451-f551e14a985f","type":"BoxAnnotation"},"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"0895d0e6-24a2-4ae6-a919-b008ccb1a162","type":"BoxZoomTool"},{"attributes":{},"id":"0c533431-22cc-4d53-98a3-a39337eea3d5","type":"CategoricalTickFormatter"},{"attributes":{},"id":"61445a05-7f0b-4422-ba0c-18ffdc3fd0e4","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f02caf73-3974-460f-a380-15b27c84d680","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"204fc892-edc3-4e43-9451-f551e14a985f","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4770b6f-2bb5-47e6-9644-e047de1df993","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c02da2c1-8577-45fc-8743-0b5cdb22cc35","type":"Rect"},{"attributes":{"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"764d0993-b260-4265-a9bb-4fae24624eb4","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"cf447177-78a3-422e-8e24-4266fdc58724","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"},{"dist":"(0.2, 0.3]"}],"dist":["(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]","(0.2, 0.3]"],"values":{"__ndarray__":"Jq4u4HAg1D8UknN7svPLP9C7KwJFbc0/4OxPvQwDzT/wTeR0o9TKP6zBKs5cA8s/DFIcf1XKzD9QPSjVxC7NP2BT1kKtk8o//AJG7Hf9zz/oMED+Z/bOP+5pTNh5eNI//vs7kFQy0z+YfP6kob7NPxzfz28M2so/nJRqyYd20j8s7KHpAVDTP3KzLREg0dE/1MVQLzfY0T/grW4+6RrHP6SaT2laF84/7JxHSVVdzT8cOw5JbLjJP5TG+F+5Y9Q/aFcH+LG/0j8iWlwsxjrTP1BD6K+RBck/EtFwfxS91D+ceypi6ubMP769n0JyWtA//nOKiNJT1T8uUxgyTt3UP4zmEp12yMo/DGXiBzngyT9+91kT/fLTPxDPDDh4JdM/QHF8kQxGzz/gAnEO5m/NPw==","dtype":"float64","shape":[38]},"x":["bladder","bladder","breast","colon","colon","esophagus","esophagus","head_and_neck","head_and_neck","kidney","kidney","kidney","liver","liver","liver","liver","liver","liver","liver","liver","liver","liver","lung_squamous","lung_squamous","pancreas","pancreas","prostate","skin","skin","skin","stomach","stomach","stomach","stomach","thyroid","thyroid","thyroid","uterus_endometrioid_carcinoma"],"y":["adrenal","liver","adrenal","liver","skin","liver","skin","adrenal","liver","adrenal","liver","skin","adrenal","bladder","colon","kidney","lung_adenocarcinoma","lung_mesothelioma","pancreas","testis","thyroid","uterus_endometrioid_carcinoma","adrenal","skin","adrenal","liver","skin","adrenal","liver","prostate","cervix","head_and_neck","liver","skin","adrenal","colon","liver","liver"]}},"id":"dcf3ce7d-2db2-428f-ba88-e4d45fe4d491","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"88b027d5-eddf-4b22-822a-f9f6153eb94f","type":"ColumnDataSource"},"glyph":{"id":"c02da2c1-8577-45fc-8743-0b5cdb22cc35","type":"Rect"},"hover_glyph":null,"muted_glyph":null},"id":"0ff182c8-724a-42de-a7d1-6fd5cb6d451c","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"35946f58-fe34-4a87-845b-f90c7653bebd","type":"Rect"},{"attributes":{},"id":"cc45c76e-ecaf-4698-b6ab-ccd85876d61a","type":"ToolEvents"},{"attributes":{"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"8f93a48c-060a-4177-a757-fdef92a9a168","type":"SaveTool"},{"attributes":{"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"}},"id":"92d31987-f716-4595-81e9-aeb76d759078","type":"ResetTool"},{"attributes":{"axis_label":"Normal","formatter":{"id":"0c533431-22cc-4d53-98a3-a39337eea3d5","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec","subtype":"Chart","type":"Plot"},"ticker":{"id":"925d1ac6-c586-449b-8013-f93f404c5cf7","type":"CategoricalTicker"}},"id":"03dfb81b-e86d-400f-abd2-333b54ac44fe","type":"CategoricalAxis"}],"root_ids":["cd116e6a-ff84-4279-8c69-5ea0f78e8fec"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"21a379d9-3ca8-4203-9b21-b97e07e579a5","elementid":"a05e7db3-5d90-44ef-9929-8a17c509e8aa","modelid":"cd116e6a-ff84-4279-8c69-5ea0f78e8fec"}];
                
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