class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        this.drawRectangle({x: 100, y: 200},{x: 600, y: 400},[255,0,0,255],ctx);
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        this.drawCircle({x:400,y:300},200,[0,0,255,255],ctx);
    }

    // ctx:          canvas context
    drawSlide2(ctx) {
        this.drawBezierCurve({x:100,y:150},{x:300,y:500},{x:600,y:200},{x:700,y:400},[0,255,0,255],ctx);
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
        //P
        this.drawLine({x:100,y:400},{x:100,y:500},[0,0,0,255],ctx);
        this.drawBezierCurve({x:100,y:500},{x:150,y:500},{x:150,y:450},{x:100,y:450},[0,0,0,255],ctx);
        //e
        this.drawLine({x:150,y:425},{x:200,y:425},[0,0,0,255],ctx);
        this.drawBezierCurve({x:150,y:425},{x:150,y:450},{x:200,y:450},{x:200,y:425},[0,0,0,255],ctx);
        this.drawBezierCurve({x:150,y:425},{x:150,y:410},{x:180,y:400},{x:200,y:415},[0,0,0,255],ctx);
        //t
        this.drawLine({x:225,y:475},{x:275,y:475},[0,0,0,255],ctx);
        this.drawLine({x:250,y:400},{x:250,y:500},[0,0,0,255],ctx);
        //e
        this.drawLine({x:300,y:425},{x:350,y:425},[0,0,0,255],ctx);
        this.drawBezierCurve({x:300,y:425},{x:300,y:450},{x:350,y:450},{x:350,y:425},[0,0,0,255],ctx);
        this.drawBezierCurve({x:300,y:425},{x:300,y:410},{x:330,y:400},{x:350,y:415},[0,0,0,255],ctx);
        //r
        this.drawLine({x:375,y:400},{x:375,y:450},[0,0,0,255],ctx);
        this.drawBezierCurve({x:375,y:425},{x:375,y:450},{x:400,y:450},{x:400,y:425},[0,0,0,255],ctx)

        //M
        this.drawLine({x:100,y:200},{x:100,y:300},[0,0,0,255],ctx);
        this.drawLine({x:100,y:300},{x:125,y:200},[0,0,0,255],ctx);
        this.drawLine({x:125,y:200},{x:150,y:300},[0,0,0,255],ctx);
        this.drawLine({x:150,y:300},{x:150,y:200},[0,0,0,255],ctx);
        //i
        this.drawLine({x:175,y:200},{x:175,y:250},[0,0,0,255],ctx);
        this.drawCircle({x:175,y:275},5,[0,0,0,255],ctx);
        //l
        this.drawLine({x:200,y:200},{x:200,y:300},[0,0,0,255],ctx);
        //b
        this.drawLine({x:225,y:200},{x:225,y:300},[0,0,0,255],ctx);
        this.drawCircle({x:250,y:225},25,[0,0,0,255],ctx);
        //r
        this.drawLine({x:300,y:200},{x:300,y:250},[0,0,0,255],ctx);
        this.drawBezierCurve({x:300,y:225},{x:300,y:250},{x:325,y:250},{x:325,y:225},[0,0,0,255],ctx);
        //a
        this.drawCircle({x:375,y:225},25,[0,0,0,255],ctx);
        this.drawLine({x:400,y:200},{x:400,y:225},[0,0,0,255],ctx);
        //t
        this.drawLine({x:425,y:200},{x:425,y:300},[0,0,0,255],ctx);
        this.drawLine({x:400,y:275},{x:450,y:275},[0,0,0,255],ctx);
        //h
        this.drawLine({x:475,y:200},{x:475,y:300},[0,0,0,255],ctx);
        this.drawBezierCurve({x:475,y:225},{x:475,y:250},{x:500,y:250},{x:500,y:225},[0,0,0,255],ctx);
        this.drawLine({x:500,y:225},{x:500,y:200},[0,0,0,255],ctx);
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        this.drawLine(left_bottom,{x:left_bottom.x,y:right_top.y},color,ctx);
        this.drawLine(left_bottom,{x:right_top.x,y:left_bottom.y},color,ctx);
        this.drawLine({x:left_bottom.x,y:right_top.y},right_top,color,ctx);
        this.drawLine({x:right_top.x,y:left_bottom.y},right_top,color,ctx);
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
        let rotate_step = 2*Math.PI/this.num_curve_sections;
        let degree = 0;
        let nextStep;
        let currX;
        let currY;
        let nextX;
        let nextY;
        for(let i=0; i<this.num_curve_sections; i++) {
            nextStep = degree+rotate_step;

            currX=center.x+radius*Math.cos(degree);
            currY=center.y+radius*Math.sin(degree);

            nextX=center.x+radius*Math.cos(nextStep);
            nextY=center.y+radius*Math.sin(nextStep);

            this.drawLine({x:currX,y:currY},{x:nextX,y:nextY},color,ctx);
            degree=nextStep;
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        let currX;
        let currY;
        let nextX;
        let nextY;
        let tStep = 1.0/this.num_curve_sections;
        let t = 0;
        let nextT;

        for(let i=0; i<this.num_curve_sections; i++) {
            nextT = t + tStep;

            currX = Math.pow((1-t),3) * pt0.x + 3 * Math.pow((1-t),2) * t * pt1.x + 3 * (1-t) * Math.pow(t,2) * pt2.x + Math.pow(t,3) * pt3.x;
            currY = Math.pow((1-t),3) * pt0.y + 3 * Math.pow((1-t),2) * t * pt1.y + 3 * (1-t) * Math.pow(t,2) * pt2.y + Math.pow(t,3) * pt3.y;
            nextX = Math.pow((1-nextT),3) * pt0.x + 3 * Math.pow((1-nextT),2) * nextT * pt1.x + 3 * (1-nextT) * Math.pow(nextT,2) * pt2.x + Math.pow(nextT,3) * pt3.x;
            nextY = Math.pow((1-nextT),3) * pt0.y + 3 * Math.pow((1-nextT),2) * nextT * pt1.y + 3 * (1-nextT) * Math.pow(nextT,2) * pt2.y + Math.pow(nextT,3) * pt3.y;
            this.drawLine({x:currX,y:currY},{x:nextX,y:nextY},color,ctx);

            t = nextT;
        }
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};
