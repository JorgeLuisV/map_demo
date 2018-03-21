'use strict'

function buildMap(){
  let areas = {
      a1: {type: 'path', coords: 'M6.056,0.977l108,0.046-0.112,261-108-.046Z', style: 1, area: 4999},
      a2: {type: 'path', coords: 'M6.037,260.987l107.968,0.094-0.033,65.262c0,5.884-3.654,10.652-8.154,10.648L6,336.9Z', style: 1, area: 1557},

      b1: {type: 'path', coords: 'M139,1H547a0,0,0,0,1,0,0V180a8,8,0,0,1-8,8H147a8,8,0,0,1-8-8V1A0,0,0,0,1,139,1Z', style: 2, area: 1266},
      b2: {type: 'path', coords: 'M575,1H846a0,0,0,0,1,0,0V180a8,8,0,0,1-8,8H583a8,8,0,0,1-8-8V1A0,0,0,0,1,575,1Z', style: 2, area: 1258},

      c1: {type: 'path', coords: 'M147,249H304a0,0,0,0,1,0,0v88a0,0,0,0,1,0,0H147a8,8,0,0,1-8-8V257A8,8,0,0,1,147,249Z', style: 1, area: 3658},
      c2: {type: 'path', coords: 'M303,249H428a8,8,0,0,1,8,8v72a8,8,0,0,1-8,8H303a0,0,0,0,1,0,0V249A0,0,0,0,1,303,249Z', style: 1, area: 4796},
      c3: {type: 'path', coords: 'M470,249h59a0,0,0,0,1,0,0v88a0,0,0,0,1,0,0H470a8,8,0,0,1-8-8V257A8,8,0,0,1,470,249Z', style: 1, area: 9514},
      c4: {type: 'path', coords: 'M528,249H863s8.182,0.5,8,8c-0.183,7.519-.064,36-0.064,36l-121.824.092,0.208,11.531-159.712.016L589.52,337.3s-61.479-.274-61.52-0.3V249Z', style: 1, area: 6633},
      c5: {type: 'path', coords: 'M589.033,302.963l159.281,0.067-0.008-11.225S871.062,291.927,871,292v37a8,8,0,0,1-8,8H589Z', style: 1, area: 1065},

      d1: {type: 'path', coords: 'M5,391h97a8,8,0,0,1,8,8v41a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V391A0,0,0,0,1,5,391Z', style: 2, area: 6633},
      d2: {type: 'path', coords: 'M5,439H110a0,0,0,0,1,0,0v41a8,8,0,0,1-8,8H5a0,0,0,0,1,0,0V439A0,0,0,0,1,5,439Z', style: 2, area: 4536},
      d3: {type: 'path', coords: 'M147,391H428a8,8,0,0,1,8,8v41a0,0,0,0,1,0,0H139a0,0,0,0,1,0,0V399A8,8,0,0,1,147,391Z', style: 2, area: 2924},
      d4: {type: 'path', coords: 'M139,439H436a0,0,0,0,1,0,0v41a8,8,0,0,1-8,8H147a8,8,0,0,1-8-8V439A0,0,0,0,1,139,439Z', style: 2, area: 3556},
      d5: {type: 'path', coords: 'M558.989,391.346L649,391s8,1.5,8,8v81a8,8,0,0,1-8,8H470a8,8,0,0,1-8-8l0.009-40.722,96.806,0.038S558.983,391.318,558.989,391.346Z', style: 2, area: 2342},
      d6: {type: 'path', coords: 'M470,391h90a0,0,0,0,1,0,0v49a0,0,0,0,1,0,0H462a0,0,0,0,1,0,0V399A8,8,0,0,1,470,391Z', style: 2, area: 1244},
      d7: {type: 'path', coords: 'M679.986,391.026l182-.052a8,8,0,0,1,8,8l0.024,81a8,8,0,0,1-8,8l-182,.052a8,8,0,0,1-8-8l-0.024-81A8,8,0,0,1,679.986,391.026Z', style: 2, area: 6843},

      e1: {type: 'path', coords: 'M6,517h96a8,8,0,0,1,8,8v20a8,8,0,0,1-8,8H6a0,0,0,0,1,0,0V517A0,0,0,0,1,6,517Z', style: 1, area: 6434},
      e2: {type: 'path', coords: 'M147,517H428c4.585-.5,8,3.582,8,8v20a8,8,0,0,1-8,8H147a8,8,0,0,1-8-8V525A8,8,0,0,1,147,517Z', style: 1, area: 3462},
      e3: {type: 'path', coords: 'M470,517H649c4.418-.429,8,3.582,8,8v20a8,8,0,0,1-8,8H470a8,8,0,0,1-8-8V525A8,8,0,0,1,470,517Z', style: 1, area: 7543},
      e4: {type: 'path', coords: 'M680,517H862c4.275-.429,8,3.582,8,8v20a8,8,0,0,1-8,8H680a8,8,0,0,1-8-8V525A8,8,0,0,1,680,517Z', style: 1, area: 2355},

      f1: {type: 'path', coords: 'M907,1h94s0.15,79.383-.02,84.547c-0.2,5.628-23.042,97.2-23.876,99.2S971,188,971,188s-51.17.071-57,.071-7.334-3.61-7.334-3.61Z', style: 2, area: 1026},
      f2: {type: 'path', coords: 'M904,249s66.176-.05,69.51-0.05c4.5,0,6.49,5.05,6.49,5.05l21.97,90.526,0.17,162.93s-0.06,45.2-45.809,45.449S904,553.036,904,553c0,0-8,0-8-8V257A8,8,0,0,1,904,249Z', style: 2, area: 6020},
    
      g1: {type: 'path', coords: 'M145,212v15C133.082,226.833,132.918,212,145,212Z', style: 3},
      g2: {type: 'path', coords: 'M146.994,212.061l140-.122,0.013,15-140,.122Z', style: 3},
      g3: {type: 'path', coords: 'M289,212.027l139-.054,0.006,15-139,.054Z', style: 3},
      g4: {type: 'path', coords: 'M430,227V212C441.918,212.167,442.082,227,430,227Z', style: 3},
      g5: {type: 'path', coords: 'M467,212v15C455.082,226.833,454.918,212,467,212Z', style: 3},
      g6: {type: 'path', coords: 'M469,211.985l70,0.03-0.006,15-70-.03Z', style: 3},
      g7: {type: 'path', coords: 'M541,227V212C552.918,212.167,553.082,227,541,227Z', style: 3},
      g8: {type: 'path', coords: 'M582,212v15C570.082,226.833,569.918,212,582,212Z', style: 3},
      g9: {type: 'path', coords: 'M584,211.974l129,0.052-0.006,15-129-.052Z', style: 3},
      g10: {type: 'path', coords: 'M715,211.971l124,0.058-0.008,15-124-.058Z', style: 3},
      g11: {type: 'path', coords: 'M841,227V212C852.918,212.167,853.082,227,841,227Z', style: 3},
      g12: {type: 'path', coords: 'M869,183h15C883.833,194.918,869,195.082,869,183Z', style: 3},
      g13: {type: 'path', coords: 'M884,104v77H869V104h15Z', style: 3},
      g14: {type: 'path', coords: 'M884,26v76H869V26h15Z', style: 3},
      g15: {type: 'path', coords: 'M884,24H869C869.167,12.082,884,11.918,884,24Z', style: 3},

      h1: {type: 'path', coords: 'M22,359v11C11.406,369.878,11.261,359,22,359Z', style: 3},
      h2: {type: 'path', coords: 'M24,358.974l78,0.052-0.008,11-78-.052Z', style: 3},
      h3: {type: 'path', coords: 'M104,370V359C114.594,359.122,114.739,370,104,370Z', style: 3},
      h4: {type: 'path', coords: 'M148,359v11C137.406,369.878,137.261,359,148,359Z', style: 3},
      h5: {type: 'path', coords: 'M150,358.949l137,0.1-0.008,11-137-.1Z', style: 3},
      h6: {type: 'path', coords: 'M289,359.043l138-.086,0.006,11-138,.086Z', style: 3},
      h7: {type: 'path', coords: 'M429,370V359C439.594,359.122,439.739,370,429,370Z', style: 3},
      h8: {type: 'path', coords: 'M471,359v11C460.406,369.878,460.261,359,471,359Z', style: 3},
      h9: {type: 'path', coords: 'M473,359.047l174-.094,0.006,11-174,.094Z', style: 3},
      h10: {type: 'path', coords: 'M649,370V359C659.594,359.122,659.739,370,649,370Z', style: 3},
      h11: {type: 'path', coords: 'M680,359v11C669.406,369.878,669.261,359,680,359Z', style: 3},
      h12: {type: 'path', coords: 'M682,358.981l87,0.036,0,11-87-.036Z', style: 3},
      h13: {type: 'path', coords: 'M771.005,358.963l89,0.075-0.01,11-89-.075Z', style: 3},
      h14: {type: 'path', coords: 'M862,370V359C872.594,359.122,872.739,370,862,370Z', style: 3},

      i1: {type: 'path', coords: 'M145.551,563v8C138.2,570.911,138.1,563,145.551,563Z', style: 3},
      i2: {type: 'path', coords: 'M148.007,563l279.987,0.01v8L148.006,571v-8Z', style: 3},
      i3: {type: 'path', coords: 'M430.012,571v-8C437.942,563.089,438.05,571,430.012,571Z', style: 3},
      i4: {type: 'path', coords: 'M467.551,563v8C460.2,570.911,460.1,563,467.551,563Z', style: 3},
      i5: {type: 'path', coords: 'M470.007,563.005L649,563.118l0,7.877L470,570.882Z', style: 3},
      i6: {type: 'path', coords: 'M651.012,571v-8C658.942,563.089,659.05,571,651.012,571Z', style: 3},
      i7: {type: 'path', coords: 'M677.551,563v8C670.2,570.911,670.1,563,677.551,563Z', style: 3},
      i8: {type: 'path', coords: 'M680.007,562.943L862,563.057l0,8L680,570.943Z', style: 3},
      i9: {type: 'path', coords: 'M864.012,571v-8C871.942,563.089,872.05,571,864.012,571Z', style: 3},
    },
    width = 1024,
    height = 572,
    indigo = {
      'fill': '#3F51B5',
      'stroke': '#fff',
      'stroke-width': '0.75'
    },
    teal = {
      "fill": '#009688',
      'stroke': '#fff',
      'stroke-width': '0.75'
    },
    green = {
      'fill': '#8BC34A',
      'stroke': '#fff',
      'stroke-width': '0.75'
    },
    font = {
      'font-size': 10.572,
      'font': 'Arial',
      'font-weight': 'bold',
      'fill': '#FFF',
    },
    buildAreas = {}

  let paper = Raphael('map', width, height)
  paper.setViewBox(0, 0, width, height);

  paper.canvas.removeAttribute('width');
  paper.canvas.removeAttribute('height');
  paper.canvas.setAttribute('preserveAspectRatio', 'none');

  $.each(areas,(i,item) => {
    if (item.type == 'path') {
      if (item.area) {
        if (item.style == 1) {
          buildAreas[i] = paper.path(item.coords).attr(indigo)
          buildAreas[i].area = item.area
        } else {
          buildAreas[i] = paper.path(item.coords).attr(teal)
          buildAreas[i].area = item.area
        }
      } else {
        paper.path(item.coords).attr(green)
      }
    } else {
      paper.text(item.x, item.y, item.text).attr(font)
    }

  })

  for (let area in buildAreas) {
    
    buildAreas[area].orColor = buildAreas[area].attrs.fill;
    
    ((st, area) => {

      st[0].style.cursor = "pointer";

      st[0].onmouseover = () => {
        st.animate({fill: '#FFF', "stroke": buildAreas[area].orColor, "stroke-width": "3"}, 500)
        st.toFront()
        $('#info').html(`${st.area} m²`)
      }

      st[0].onmouseout = () => {
        st.animate({fill: buildAreas[area].orColor, "stroke": '#FFF', "stroke-width": "0.75"}, 500)
        st.toBack()
        $('#info').html('-')
      }
                 
    })(buildAreas[area], area)

  }

  $('#map').panzoom({
    $zoomIn: $('.map-container').next().find('#zoomin'),
    $zoomOut: $('.map-container').next().find('#zoomout'),
    $reset: $('.map-container').next().find('#reset'),
    panOnlyWhenZoomed: true,
    minScale: 1
  })

}

$(document).ready(() => {
  buildMap()
})