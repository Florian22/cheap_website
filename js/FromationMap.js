$(function(){
      $('#NantesMap').vectorMap({
          map:'fr_regions_2016_merc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'FR-R',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#LannionMap').vectorMap({
          map:'fr_regions_2016_merc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'FR-E',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#vPlusMap').vectorMap({
          map:'fr_regions_2016_merc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'FR-E',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#udes').vectorMap({
          map:'ca_lcc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'CA-QC',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#exit').vectorMap({
          map:'ca_lcc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'CA-QC',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#voxygen').vectorMap({
          map:'fr_regions_2016_merc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'FR-E',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

      $('#asc').vectorMap({
          map:'fr_regions_2016_merc',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'FR-R',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

$('#lero').vectorMap({
          map:'26counties',
          backgroundColor: "#111",
          zoomButtons : false,
          zoomOnScroll: false,
          regionsSelectable: false,
          selectedRegions: 'LK',
          regionStyle: {
              initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            },
            selected:{
              fill:'red'
            },
          }
          });

     


  });