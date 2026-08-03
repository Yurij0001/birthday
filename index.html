[index.html](https://github.com/user-attachments/files/30680440/index.html)
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sito in Allestimento</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body, html {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      z-index: 1;
    }

    .card {
      position: relative;
      z-index: 2;
      background: rgba(10, 10, 18, 0.45);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      padding: 40px 50px;
      text-align: center;
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
      max-width: 90%;
      width: 480px;
    }

    h1 {
      color: #ffffff;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    p {
      color: rgba(255, 255, 255, 0.85);
      font-size: clamp(1rem, 2.5vw, 1.25rem);
      font-weight: 400;
      letter-spacing: 0.5px;
    }

    .highlight {
      color: #00ffcc;
      font-weight: 600;
    }
  </style>
</head>
<body>

  <canvas id="canvas"></canvas>

  <div class="card">
    <h1>Sito in allestimento</h1>
    <p>Riapre il <span class="highlight">4 Agosto 2026</span> alle <span class="highlight">17:00</span> <br><br><br> by Yuri</p>
  </div>

  <script id="fs" type="x-shader/x-fragment">#version 300 es
 precision highp float;
 out vec4 O;
 uniform float time;
 uniform vec2 resolution;
 uniform vec2 move;
 uniform vec2 wheel;
 #define FC gl_FragCoord.xy
 #define R resolution
 #define T (25.+time)
 #define S smoothstep
 #define N normalize
 #define MN min(R.x,R.y)
 #define rnd(p) fract(sin(dot(p,vec2(12.9898,78.233)))*345678.)
 #define rot(a) mat2(cos((a)-vec4(0,11,33,0)))
 
 float box(vec3 p, vec3 s, float r) {
   p=abs(p)-s+r;
   return length(max(p,.0))+min(.0,max(max(p.x,p.y),p.z))-r;
 }
 
 float map(vec3 p) {
   vec3 q=cos(p*1.8+5e2);
   float s=sign(p.y);
   p.y=abs(p.y)-2.5;
   vec2 id=floor(p.xz-s);
   if (mod(id.y,2.)==.0) {
     p.x-=T*.5;
     id.x=floor(p.x-s);
   } 
   float f=1.-dot(abs(fract(p*42.)-.5)-.25,vec3(1))*.5;
   p.xz=fract(p.xz-s)-.5;
   return box(p,vec3(.1+.3*rnd(id),2.-.6*rnd(id),.2),f*f*.0125)-1e-3*f;
 }
 
 vec3 norm(vec3 p) {
   float h=1e-3; vec2 k=vec2(-1,1);
   return N(
     k.xyy*map(p+k.xyy*h)+
     k.yxy*map(p+k.yxy*h)+
     k.yyx*map(p+k.yyx*h)+
     k.xxx*map(p+k.xxx*h)
   );
 }
 
 bool march(inout vec3 p, vec3 rd, out float dd) {
   for (int i; i++<400;) {
     float d=map(p);
     if (abs(d)<1e-3) return true;
     if (dd>15.) return false;
     p+=rd*d*.5;
     dd+=d*.5;
   }
 }
 
 float occ(vec3 p, vec3 n, float d) {
   return clamp(map(p+n*d)/d,.0,1.);
 }
 
 vec3 dir(vec2 uv, vec3 p, vec3 t, float z) {
   vec3 up=vec3(0,1,0),
   f=N(t-p),
   r=N(cross(up,f)),
   u=N(cross(f,r));
   return mat3(r,u,f)*N(vec3(uv,z));
 }
 
 void cam(inout vec3 p) {
   p.xz*=rot(.2-move.x/MN+.2*T*.01);
 }
 
 vec3 render(vec2 uv) {
   vec3 col=vec3(0),
   p=vec3(0,-.3,-23.5-wheel.y/MN-1e2*sin(T*5e-3));
   cam(p);
   vec3 rd=dir(uv,p,vec3(0,5.5,0),1.2), lp=p;
   lp.z+=.5;
   float dd;
   if (march(p,rd,dd)) {
     vec3 n=norm(p), l=N(lp-p);
     float dif=clamp(dot(l,n),.0,1.),
     spe=pow(clamp(dot(N(lp-rd),n),.0,1.),21.),
     ao=occ(p,n,.5)*.8*occ(p,n,1.),
     ld=distance(lp,p), atten=1./(1.+ld*.25+ld*ld*.125);
     vec3 mat=vec3(4,1.6,.6);
     col+=.08+dif*mat*ao*atten;
     col+=spe*atten;
   }
   col=mix(vec3(0),col,exp(-125e-5*dd*dd*dd));
   col=tanh(col*col);
   col=sqrt(col);
   col=mix(vec3(0),col,min(time*.3,1.));
   // vignette
   vec2 c=FC/R;
   c*=1.-c.yx;
   float vig=c.x*c.y*25.;
   vig=pow(vig,.5);
   col*=vig;
   return col;
 }
 
 void main() {
   vec2 uv=(FC-.5*R)/MN;
   vec3 col=render(uv);
   O=vec4(col,1);
 }
  </script>

  <script>
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl2');

    if (!gl) {
      console.error("WebGL2 non supportato.");
    }

    const vsSource = `#version 300 es
    in vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }`;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fsSource = document.getElementById('fs').textContent.trim();
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]), gl.STATIC_DRAW);

    const timeLoc = gl.getUniformLocation(program, 'time');
    const resLoc = gl.getUniformLocation(program, 'resolution');
    const moveLoc = gl.getUniformLocation(program, 'move');
    const wheelLoc = gl.getUniformLocation(program, 'wheel');

    let move = [0, 0];
    let wheel = [0, 0];
    let isMouseDown = false;
    let lastMouse = [0, 0];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth * dpr;
      const h = window.innerHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    // Interazioni fluide di background
    window.addEventListener('mousedown', e => {
      isMouseDown = true;
      lastMouse = [e.clientX, e.clientY];
    });

    window.addEventListener('mousemove', e => {
      if (!isMouseDown) return;
      move[0] += e.clientX - lastMouse[0];
      move[1] += e.clientY - lastMouse[1];
      lastMouse = [e.clientX, e.clientY];
    });

    window.addEventListener('mouseup', () => isMouseDown = false);
    window.addEventListener('wheel', e => { wheel[1] += e.deltaY; });

    const startTime = performance.now();

    function loop(now) {
      resize();
      
      gl.useProgram(program);

      const posAttr = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(posAttr);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(timeLoc, (now - startTime) * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform2f(moveLoc, move[0], move[1]);
      gl.uniform2f(wheelLoc, wheel[0], wheel[1]);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  </script>
</body>
</html>
