Raphael.fn.donut = function(x, y, r) {
    var _i, _paths = [], _angles = [0, Math.PI/2, Math.PI, (3 * Math.PI)/2, 2*Math.PI];
    
    var segment = function(r_inner, r_outer, theta1, theta2) {
        var inner_arc_points = [x + r_inner * Math.cos(theta1), y + r_inner * Math.sin(theta1), x + r_inner * Math.cos(theta2), y + r_inner * Math.sin(theta2)];
        var outer_arc_points = [x + r_outer * Math.cos(theta1), y + r_outer * Math.sin(theta1), x + r_outer * Math.cos(theta2), y + r_outer * Math.sin(theta2)];
        
        return ("M" + inner_arc_points[0] + "," + inner_arc_points[1]) + ("A" + r_inner + "," + r_inner + ",0,0,1," + inner_arc_points[2] + "," + inner_arc_points[3]) + 
               ("L" + outer_arc_points[2] + "," + outer_arc_points[3]) + 
               ("A" + r_outer + "," + r_outer + ",0,0,0," + outer_arc_points[0] + "," + outer_arc_points[1]) + 
               "Z";
    };
    
    for (_i = 0; _i < 4; _i++) {
        if(_i % 2 == 0)
            _paths.push(segment(r, r + 50, _angles[_i], _angles[_i + 1]));
        else
            _paths.push(segment(r - 10, r + 40, _angles[_i], _angles[_i + 1])); 
    }
    
    return this.path(
        _paths.join('')
    );
};
