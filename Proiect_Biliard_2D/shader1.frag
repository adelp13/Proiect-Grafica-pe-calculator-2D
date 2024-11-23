#version 330 core

//	Variabile de intrare (dinspre Shader.vert);
in vec4 ex_Color;
in vec2 tex_Coord;		//	Coordonata de texturare;

//	Variabile de iesire	(spre programul principal);
out vec4 out_Color;		//	Culoarea actualizata;

// Variabile uniform:
uniform int codColShader;
uniform sampler2D myTexture;

void main(void)
  {
	  switch (codColShader)
	  {
		case 0: 
		  out_Color = ex_Color;
		  break;
		case 1: 
			 out_Color = texture(myTexture, tex_Coord);
			break;
		case 2:
			out_Color=vec4 (1.0, 0.0, 0.0, 0.0);
			break;
		default:
			break;
	  };
  }