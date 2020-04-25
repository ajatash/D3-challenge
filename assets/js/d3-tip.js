

d3.functor = function functor(v) {
    return typeof v === "function" ? v : function() {
      return v;
    };
  };


d3.tip = function() {
  
    var direction = d3_tip_direction,
        offset    = d3_tip_offset,
        html      = d3_tip_html,
        node      = initNode(),
        svg       = null,
        point     = null,
        target    = null
    
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
        });
        
    function tip(vis) {
      svg = getSVGNode(vis)
      point = svg.createSVGPoint()
      document.body.appendChild(node)
    };
  };
  
  
